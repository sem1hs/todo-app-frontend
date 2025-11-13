"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogout = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("tokens");
    router.replace("/");
  };

  return logout;
};
