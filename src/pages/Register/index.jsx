import { Form } from "./components/Form";
import { MainStyled } from "./style";
import { motion } from "framer-motion";
import { variants, variants_1, variants_2 } from "./variants";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <MainStyled>
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
      <motion.section
        className="containerForm"
        variants={variants_2}
        initial="hidden"
        animate="visible"
      >
        <div className="divFormContainer">
          <Form />
          <motion.span variants={variants} initial="hidden" animate="visible">
            Possui uma conta? <Link to="/login">Login</Link>
          </motion.span>
        </div>
      </motion.section>
    </MainStyled>
  );
};

export { Register };
