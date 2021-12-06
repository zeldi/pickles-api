import { object, string, ref } from "yup";

export const createUserSchema = object({
  body: object({
    id: string().required("ID is Required"),
    name: string().required("Name is required"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});

