import { Todo } from "@/types/todo";
import { apiClient } from "../apiClient";
import { TODO_API_URLS } from "@/constants/TODO_API_URLS";

export const getAllTodos = async (): Promise<Todo[]> => {
  const response = await apiClient.get(TODO_API_URLS.todo);
  return response.data;
};
