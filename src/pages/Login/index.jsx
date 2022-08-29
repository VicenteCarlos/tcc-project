import { Form } from "./components/Form";
import { MainStyled } from "./style";
import { motion } from "framer-motion";
import { variants, variants_1, variants_2 } from "./variants";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <MainStyled>
      <motion.section
        className="containerForm"
        variants={variants_2}
        initial="hidden"
        animate="visible"
      >
        <div className="divFormContainer">
          <Form />
          <motion.span variants={variants} initial="hidden" animate="visible">
            Não possui uma conta? <Link to="/register">Registre-se</Link>
          </motion.span>
        </div>
      </motion.section>
      <motion.section
        variants={variants_1}
        initial="hidden"
        animate="visible"
        className="imgLeft"
      >
        <img
          src="https://cdn.discordapp.com/attachments/1008067136872255560/1011985227222110249/Group_56071.png"
          alt="img: Transforme o futuro do seu dinheiro."
        />
      </motion.section>
    </MainStyled>
  );
};

export { Login };
