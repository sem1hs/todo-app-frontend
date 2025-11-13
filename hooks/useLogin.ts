"use client";

import { login } from "@/api/auth/auth";
import { LoginRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (values: LoginRequest) => login(values),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => alert("Kullanıcı adı veya şifre hatalı !"),
  });

  return mutation;
};
