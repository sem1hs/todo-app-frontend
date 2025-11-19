import { TodoResponse } from "@/types/todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { UseMutateFunction } from "@tanstack/react-query";

type Props = {
  todos: TodoResponse[];
  deleteTodo: UseMutateFunction<string, Error, number, unknown>;
};

const TodoList = ({ todos, deleteTodo }: Props) => {
  return (
    <ul className="mt-2 grid grid-cols-5 gap-4">
      {todos.map((todo) => (
        <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
      ))}
      <TodoForm />
    </ul>
  );
};

export default TodoList;
