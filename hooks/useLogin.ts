"use client";

import { login } from "@/api/auth/auth";
import { LoginRequest } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (values: LoginRequest) => login(values),
    onSuccess: (data) => {
      Cookies.set("tokens", JSON.stringify(data), {
        expires: 1,
        sameSite: "strict",
      });
      router.push("/home");
    },
    onError: () => alert("Kullanıcı adı veya şifre hatalı !"),
  });

  return mutation;
};
