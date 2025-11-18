import { TodoRequest, TodoResponse } from "@/types/todo";
import { apiClient } from "../apiClient";
import { TODO_API_URLS } from "@/constants/TODO_API_URLS";

export const getAllTodos = async (): Promise<TodoResponse[]> => {
  const response = await apiClient.get(TODO_API_URLS.todo);
  return response.data;
};

export const createTodo = async (todo: TodoRequest): Promise<TodoResponse> => {
  const response = await apiClient.post(TODO_API_URLS.todo, todo);
  return response.data;
};
