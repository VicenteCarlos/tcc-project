import { motion } from "framer-motion";
import { listData } from "../../../../../../assets/mocks";
import { DivSectionStyled } from "./style";
import { variants } from "./variants";

const Modal = ({ isOpen, setIsOpen }) => {
  const closeModal = () => setIsOpen(!isOpen);

  return (
    <DivSectionStyled
      variants={variants}
      as={motion.div}
      initial="hidden"
      animate="visible"
    >
      <div className="content">
        <ul>
          {listData.map((item, i) => (
            <li ley={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="content-2">
        <button id="login">Login</button>
        <button id="register">Criar conta</button>
        <button id="close" onClick={closeModal}>
          Fechar
        </button>
      </div>
    </DivSectionStyled>
  );
};

export { Modal };
