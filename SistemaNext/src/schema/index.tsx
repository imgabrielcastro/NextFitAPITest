import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("Este campo é obrigatório"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});
