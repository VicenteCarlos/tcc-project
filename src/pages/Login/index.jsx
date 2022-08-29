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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="img: Transforme o futuro do seu dinheiro."
        />
      </motion.section>
    </MainStyled>
  );
};

export { Login };
