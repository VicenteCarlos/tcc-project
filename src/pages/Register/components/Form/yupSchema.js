import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[A-Za-z]+([\ A-Za-z]+)*/),
    surname: yup.string().required("Sobrenome obrigatório"),
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
    confirm_password: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas não correspondentes"),
  });

export { formSchema }