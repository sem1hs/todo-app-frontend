"use client";

import { useTodos } from "@/hooks/useTodos";
import { todoInitialValues, todoSchema } from "@/schemas/todoSchema";
import { TodoRequest, TodoResponse } from "@/types/todo";
import { Field, Form, Formik, FormikHelpers } from "formik";

type Props = {
  todoToEdit?: TodoResponse;
  onClose?: () => void;
};

const TodoForm = ({ todoToEdit, onClose }: Props) => {
  const { createTodo, updateTodo, isCreating, isUpdating } = useTodos();

  const handleSubmit = (
    values: TodoRequest,
    { resetForm }: FormikHelpers<TodoRequest>
  ) => {
    if (todoToEdit) {
      updateTodo({ id: todoToEdit.id, todo: values });
      onClose?.();
    } else {
      createTodo({ todo: values, resetForm });
    }
  };

  return (
    <li className="rounded-xl overflow-hidden bg-[#333] flex flex-col">
      <Formik
        initialValues={todoInitialValues}
        enableReinitialize
        validationSchema={todoSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="bg-[#222] px-4 py-2">
            <Field
              name="title"
              placeholder="Başlık"
              className="px-1 rounded-md text-white w-full outline-none border-none focus:ring-0"
            />
          </div>
          <div className="px-6 py-5 text-white flex flex-col flex-1 min-h-[200px]">
            <div className="px-1 flex-1 flex min-h-0">
              <Field
                name="description"
                placeholder="Açıklama"
                className="flex-1 w-full p-2 rounded-md text-white outline-none border-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer mt-auto bg-[#222] rounded-xl py-2 px-3"
            >
              {todoToEdit
                ? isUpdating
                  ? "Güncelleniyor..."
                  : "Güncelle"
                : isCreating
                ? "Kaydediliyor..."
                : "Kaydet"}
            </button>
          </div>
        </Form>
      </Formik>
    </li>
  );
};

export default TodoForm;
