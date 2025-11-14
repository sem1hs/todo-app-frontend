"use client";

import { Suspense } from "react";
import TodoList from "./TodoList";
import { useTodos } from "@/hooks/useTodos";

const Todos = () => {
  const { todos } = useTodos();

  return (
    <div>
      <Suspense fallback={<p>Yükleniyor...</p>}>
        <TodoList todos={todos} />
      </Suspense>
    </div>
  );
};

export default Todos;
