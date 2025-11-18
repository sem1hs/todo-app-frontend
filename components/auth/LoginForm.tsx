"use client";

import { useLogin } from "@/hooks/useLogin";
import { loginInitialValues, loginSchema } from "@/schemas/loginSchema";
import { LoginRequest } from "@/types/auth";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const mutation = useLogin();
  const handleSubmit = (values: LoginRequest) => mutation.mutate(values);

  return (
    <div className="py-32">
      <div className="py-32 px-16 rounded-xl bg-[#333]">
        <h1 className="text-center text-4xl mb-12 text-white">
          Todo App'a Hoşgeldiniz !
        </h1>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-6">
            <div>
              <Field
                name="username"
                type="text"
                placeholder="Kullanıcı Adı"
                className="w-full px-3 py-2 rounded text-xl bg-[#444] placeholder:text-gray-300 text-white"
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Şifre"
                className="w-full px-3 py-2 rounded text-xl bg-[#444] placeholder:text-gray-300 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-all cursor-pointer"
            >
              {mutation.isPending ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
