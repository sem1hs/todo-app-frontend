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
