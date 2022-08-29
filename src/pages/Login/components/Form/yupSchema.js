import * as yup from "yup";

const formSchema = yup.object().shape({
    e_mail: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail incorreto"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Insira uma senha forte"
      ),
  });

export { formSchema }