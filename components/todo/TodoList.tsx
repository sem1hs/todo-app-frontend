import { Todo } from "@/types/todo";

type Props = {
  todos: Todo[];
};
const TodoList = ({ todos }: Props) => {
  return <ul></ul>;
};

export default TodoList;
