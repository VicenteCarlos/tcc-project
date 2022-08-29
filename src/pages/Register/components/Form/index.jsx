import { useForm } from "react-hook-form";
import { FormStyled } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./yupSchema";
import { TextField } from "@mui/material";
import { variants } from "../../variants"
import { motion } from "framer-motion";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) => console.log(data);

  return (
    <FormStyled 
      as={motion.form}
      variants={variants}
      animate="visible"
      initial="hidden"
    onSubmit={handleSubmit(submitForm)}>
      <span>
        <motion.h2 variants={variants} initial="hidden" animate="visible">Registre-se</motion.h2>
      </span>
      <fieldset className="inputContainer">
        <TextField
        className="name"
          color={errors.name ? "error" : "primary"}
          label={errors.name ? errors.name.message : "Nome"}
          variant="outlined"
          {...register("name")}
        />

        <TextField
          className="surname"
          color={errors.surname ? "error" : "primary"}
          label={errors.surname ? errors.surname.message : "Sobrenome"}
          variant="outlined"
          {...register("surname")}
        />
      </fieldset>
      <fieldset className="inputContainer-2">
        <TextField
          color={errors.e_mail ? "error" : "primary"}
          label={errors.e_mail ? errors.e_mail.message : "E-mail"}
          variant="outlined"
          {...register("e_mail")}
        />

        <TextField
          color={errors.password ? "error" : "primary"}
          variant="outlined"
          type="password"
          label={errors.password ? errors.password.message : "Senha"}
          {...register("password")}
        />

        <TextField
          color={errors.confirm_password ? "error" : "primary"}
          variant="outlined"
          type="password"
          label={
            errors.confirm_password
              ? errors.confirm_password.message
              : "Confirmar senha"
          }
          {...register("confirm_password")}
        />
      </fieldset>
      <button type="submit">Cadastrar</button>
    </FormStyled>
  );
};

export { Form };
