import { getAllTodos } from "@/api/todo/todo";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTodos = () => {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    staleTime: 1000 * 60 * 10,
  });

  return {
    todos: todosQuery.data || [],
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    error: todosQuery.error,
  };
};
