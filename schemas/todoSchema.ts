import { TodoRequest } from "@/types/todo";
import * as Yup from "yup";

export const todoSchema = Yup.object({
  title: Yup.string().required("Başlık zorunlu !"),
  description: Yup.string().required("Açıklama zorunlu !"),
});

export const todoInitialValues: TodoRequest = {
  title: "",
  description: "",
  completed: false,
};
