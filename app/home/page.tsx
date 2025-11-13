"use client";
import { useTodos } from "@/hooks/useTodos";

const Page = () => {
  const { todos, isLoading } = useTodos();
  console.log(todos.map((todo) => todo.createdBy));
  return <div>Hello From Todo</div>;
};

export default Page;
