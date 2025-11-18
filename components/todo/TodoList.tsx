import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

type Props = {
  todos: Todo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ul className="mt-2 grid grid-cols-5 gap-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <TodoForm />
    </ul>
  );
};

export default TodoList;
