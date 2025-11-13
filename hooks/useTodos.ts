import { getAllTodos } from "@/api/todo/todos";
import { Todo } from "@/types/todo";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const todosQuery = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  return {
    todos: todosQuery.data || [],
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    error: todosQuery.error,
  };
};
