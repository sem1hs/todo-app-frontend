import { TodoRequest, TodoResponse, TodoUpdateRequest } from "@/types/todo";
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

export const deleteTodo = async (id: number): Promise<string> => {
  const response = await apiClient.delete(`${TODO_API_URLS.todo}/${id}`);
  return response.data;
};

export const updateTodo = async (
  id: number,
  todo: TodoUpdateRequest
): Promise<TodoResponse> => {
  const response = await apiClient.patch(`${TODO_API_URLS.todo}/${id}`, todo);
  return response.data;
};
