"use client";

import { useTodos } from "@/hooks/useTodos";
import { todoInitialValues, todoSchema } from "@/schemas/todoSchema";
import { TodoRequest } from "@/types/todo";
import { Field, Form, Formik, FormikHelpers } from "formik";

const TodoForm = () => {
  const { createTodo, isCreating } = useTodos();

  const handleSubmit = (
    values: TodoRequest,
    { resetForm }: FormikHelpers<TodoRequest>
  ) => createTodo(values, resetForm);

  return (
    <li className="rounded-xl overflow-hidden bg-[#333] flex flex-col">
      <Formik
        initialValues={todoInitialValues}
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
              {isCreating ? "Kaydediliyor..." : "Kaydet"}
            </button>
          </div>
        </Form>
      </Formik>
    </li>
  );
};

export default TodoForm;
