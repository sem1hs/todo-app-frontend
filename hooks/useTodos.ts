import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "@/api/todo/todo";
import { TodoRequest, TodoResponse, TodoUpdateRequest } from "@/types/todo";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const todosQuery = useQuery<TodoResponse[], Error>({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    staleTime: 1000 * 60 * 10,
  });

  const createTodoMutation = useMutation({
    mutationFn: async ({
      todo,
      resetForm,
    }: {
      todo: TodoRequest;
      resetForm?: () => void;
    }) => await createTodo(todo),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      variables.resetForm?.();
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: number) => await deleteTodo(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async ({ id, todo }: { id: number; todo: TodoUpdateRequest }) =>
      await updateTodo(id, todo),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    todos: todosQuery.data || [],
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    error: todosQuery.error,
    createTodo: createTodoMutation.mutate,
    isCreating: createTodoMutation.isPending,
    deleteTodo: deleteTodoMutation.mutate,
    isDeleting: deleteTodoMutation.isPending,
    updateTodo: updateTodoMutation.mutate,
    isUpdating: updateTodoMutation.isPending,
  };
};
