import { TodoResponse, TodoUpdateRequest } from "@/types/todo";
import { formatDate } from "@/utils/formatDate";
import { SquarePen, X } from "lucide-react";
import TodoButton from "./TodoButton";
import { UseMutateFunction } from "@tanstack/react-query";
import { useState } from "react";
import TodoForm from "./TodoForm";

type Props = {
  todo: TodoResponse;
  deleteTodo: UseMutateFunction<string, Error, number, unknown>;
  updateTodo: UseMutateFunction<
    TodoResponse,
    Error,
    {
      id: number;
      todo: TodoUpdateRequest;
    },
    unknown
  >;
};

const TodoItem = ({ todo, deleteTodo, updateTodo }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing && (
        <TodoForm todoToEdit={todo} onClose={() => setIsEditing(false)} />
      )}
      {!isEditing && (
        <li className="rounded-xl overflow-hidden bg-[#333] flex flex-col">
          {!todo.completed && (
            <>
              <div className="bg-[#222] px-4 py-2 flex">
                <h1 className="text-white">{todo.title}</h1>
                <div className="ml-auto flex items-center gap-3">
                  <TodoButton
                    className={"text-white cursor-pointer"}
                    onClick={() => setIsEditing(true)}
                  >
                    <SquarePen />
                  </TodoButton>
                  <TodoButton
                    className={"text-white cursor-pointer"}
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <X />
                  </TodoButton>
                </div>
              </div>
              <div className="px-6 py-5 text-white flex flex-col flex-1 min-h-[200px]">
                <div className="px-1 flex-1">
                  <p>{todo.description}</p>
                </div>

                <div className="w-full flex justify-between text-[12px] italic text-gray-300 mb-3">
                  <span>{todo.createdBy}</span>
                  <span>{formatDate(todo.createdDate)}</span>
                </div>
                <button
                  onClick={() =>
                    updateTodo({ id: todo.id, todo: { completed: true } })
                  }
                  className="cursor-pointer mt-auto bg-[#222] rounded-xl py-2 px-3"
                >
                  Tamamla
                </button>
              </div>
            </>
          )}
          {todo.completed && (
            <div className="flex items-center flex-1 justify-center flex-col py-5 px-6">
              <h1 className="mt-auto text-white text-2xl">Todo Tamamlandı !</h1>
              <TodoButton
                className={
                  "cursor-pointer bg-[#222] mt-auto rounded-xl py-2 px-3 w-full text-white"
                }
                onClick={() => deleteTodo(todo.id)}
              >
                Sil
              </TodoButton>
            </div>
          )}
        </li>
      )}
    </>
  );
};

export default TodoItem;
