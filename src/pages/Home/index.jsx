import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ModalProvider } from "../../contexts/ModalProvider";

const Home = () => {

  return (
    <ModalProvider>
      <Header />
      <Main />
      <Footer />
    </ModalProvider>
  );
}

export { Home };
