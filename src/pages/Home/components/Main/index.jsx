import { Container_1, Container_2, Container_3, Container_4 } from "./style";
import { variants } from "./variants";
import { motion } from "framer-motion";
import { cards } from "../../../../assets/mocks";

const Main = () => (
  <main>
    <Container_1
      as={motion.section}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <div className="left-part">
        <h1>Transforme o futuro do seu dinheiro</h1>
        <p>
          Na nossa plataforma de gestão financeira, você gerencia suas finanças
          de uma forma espetacular.
        </p>
        <button>Começar agora</button>
      </div>
      <div className="rigth-part">
        <img
          src="https://cdn.discordapp.com/attachments/879750205233324162/1011858330089689148/gadgetmatch-20201221-samsung-galaxy-note-20-560x600.png"
          alt="phone"
        />
      </div>
    </Container_1>
    <Container_2
      as={motion.section}
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <h2>Uma maneira simples de gerenciar suas finanças</h2>
      <p>
        Aqui você cuida das suas finanças de forma simples! Com o nosso
        gerenciador, tu organizas suas contas e rendimentos, além de ter tudo o
        que você precisa para a gestao em um so lugar
      </p>
    </Container_2>
    <Container_3>
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/1008067136872255560/1011985615329443962/Frame_56706.png"
          alt="background_phone"
        />
      </div>
    </Container_3>
    <Container_4>
      <div>
        {cards.map((item, i) => (
          <section data-aos="fade-up">
            <img src="#" alt={`card ${i}`} />
            <h3>{item[0]}</h3>
            <p>{item[1]}</p>
          </section>
        ))}
      </div>
      <button>Cadastre-se</button>
    </Container_4>
  </main>
);

export { Main };
