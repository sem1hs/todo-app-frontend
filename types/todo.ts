import { UseMutateFunction } from "@tanstack/react-query";

export type TodoResponse = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdBy: string;
  createdDate: Date;
};

export type TodoRequest = {
  title: string;
  description: string;
  completed: boolean;
};

export type TodosContextType = {
  todos: TodoResponse[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;

  createTodo: UseMutateFunction<
    TodoResponse,
    Error,
    { todo: TodoRequest; resetForm?: () => void },
    unknown
  >;
  isCreating: boolean;

  deleteTodo: UseMutateFunction<string, Error, number, unknown>;
  isDeleting: boolean;
};

export type TodoUpdateRequest = {
  title?: string;
  description?: string;
  completed?: boolean;
};
