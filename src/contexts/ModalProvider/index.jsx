import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeOrOpenModal = () => setIsOpenModal(!isOpenModal);

  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        closeOrOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalProvider = () => useContext(ModalContext);

export { ModalProvider, useModalProvider };
