import { motion } from "framer-motion";
import { HeaderStyled } from "./style";
import { variantsLogo, variantsUl, variantsButton } from "./variants";

const Header = () => (
  <HeaderStyled>
    <motion.figure variants={variantsLogo} initial="initial" animate="visible">
      <img
        src="https://cdn.discordapp.com/attachments/641827675895365642/1011840643175284858/icons8-dinheiro-96.png"
        alt="Logo Money's X"
      />
      <figcaption>
        Money's <strong>X</strong>
      </figcaption>
    </motion.figure>
    <motion.nav variants={variantsUl} initial="initial" animate="visible">
      <ul>
        <li>Recursos</li>
        <li>Aprenda</li>
      </ul>
    </motion.nav>
    <motion.div 
    className="containerButton"
    variants={variantsButton} initial="initial" animate="visible"
    >
      <button id="login">Login </button>
      <button id="register">Criar conta</button>
    </motion.div>
  </HeaderStyled>
);

export { Header };
