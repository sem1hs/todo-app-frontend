"use client";

import { useLogin } from "@/hooks/useLogin";
import { loginInitialValues, loginSchema } from "@/schemas/loginSchema";
import { LoginRequest } from "@/types/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

const LoginForm = () => {
  const mutation = useLogin();

  const handleSubmit = (values: LoginRequest) => mutation.mutate(values);

  return (
    <div>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Kullanıcı Adı"
              className="border w-full px-3 py-2 rounded"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div>
            <Field
              name="password"
              type="password"
              placeholder="Şifre"
              className="border w-full px-3 py-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            {mutation.isPending ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
