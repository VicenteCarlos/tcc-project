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
      </fieldset>
      <button type="submit">Logar</button>
    </FormStyled>
  );
};

export { Form };
