import { motion } from "framer-motion";
import { useModalProvider } from "../../../../contexts/ModalProvider";
import { Modal } from "../Modal";
import { HeaderStyled } from "./style";
import { variantsLogo, variantsUl, variantsButton } from "./variants";
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { isOpenModal, setIsOpenModal } = useModalProvider();
  const navigate = useNavigate()

  const loginRouter = () => navigate("/login")
  const registerRouter = () => navigate("/register")


  return isOpenModal ? (
    <Modal
    />
  ) : (
    <HeaderStyled>
      <motion.figure
        variants={variantsLogo}
        initial="initial"
        animate="visible"
      >
        <img
          src="https://cdn.discordapp.com/attachments/641827675895365642/1011840643175284858/icons8-dinheiro-96.png"
          alt="Logo Money's X"
        />
        <figcaption>
          Money <strong>X</strong>
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
        variants={variantsButton}
        initial="initial"
        animate="visible"
      >
        <button id="login" onClick={loginRouter}>Login </button>
        <button id="register" onClick={registerRouter}>Criar conta</button>
      </motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
        onClick={() => {
          setIsOpenModal(!isOpenModal)
        }}
      >
        <img src="https://img.icons8.com/cotton/72/menu.png" alt="menu" />
      </motion.button>
    </HeaderStyled>
  );
};

export { Header };
