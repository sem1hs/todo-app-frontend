"use client";

import { Suspense } from "react";
import TodoList from "./TodoList";
import { useTodos } from "@/hooks/useTodos";

const Todos = () => {
  const { todos, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <TodoList todos={todos} />
      </Suspense>
    </>
  );
};

export default Todos;
