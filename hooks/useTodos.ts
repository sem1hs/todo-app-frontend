import { createTodo, getAllTodos } from "@/api/todo/todo";
import { TodoRequest, TodoResponse } from "@/types/todo";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const todosQuery = useQuery<TodoResponse[], Error>({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    staleTime: 1000 * 60 * 10,
  });

  const createTodoMutation = useMutation({
    mutationFn: (todo: TodoRequest) => createTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const createTodoWithReset = (todo: TodoRequest, resetForm: () => void) => {
    createTodoMutation.mutate(todo, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["todos"] });
        resetForm();
      },
    });
  };

  return {
    todos: todosQuery.data || [],
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    error: todosQuery.error,
    createTodo: createTodoWithReset,
    isCreating: createTodoMutation.isPending,
  };
};
