import { LoginRequest } from "@/types/auth";
import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().required("Kullanıcı adı zorunlu !"),
  password: Yup.string().required("Şifre zorunlu !"),
});

export const loginInitialValues: LoginRequest = {
  username: "",
  password: "",
};
