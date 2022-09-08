import { useModalProvider } from "../../../../contexts/ModalProvider";
import { Modal } from "../Modal";
import { FooterStyled } from "./style";

const Footer = () => {
  const { isOpenModal } = useModalProvider();
  
  return (
    <FooterStyled isOpenModal={isOpenModal}>
      <figure>
        <img
          src="https://cdn.discordapp.com/attachments/641827675895365642/1011840643175284858/icons8-dinheiro-96.png"
          alt="Logo Money's X"
        />
        <figcaption>
          Money <strong>X</strong>
        </figcaption>
      </figure>
      <span>© 2022 Money'x Sistema de Gestão Financeiro Pessoal</span>
    </FooterStyled>
  );
};

export { Footer };
