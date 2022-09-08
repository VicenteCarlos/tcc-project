import { Container_1, Container_2, MainStyled } from "./style";

const Main = () => {
  return (
    <MainStyled>
      <Container_1>
        <h1>Bom dia, fulano!</h1>
        <div className="search">
          <span>icon here</span>
          <input placeholder="Pesquisar..." />
        </div>
      </Container_1>
      <Container_2>
        <div>
          <span>icon here</span>
          <p>Saldo total</p>
          <div>
            <strong>Saldo here</strong>
            <span>icon here</span>
          </div>
        </div>
      </Container_2>
      {/* <section className="container-3">
        <div>
            gráfico here
        </div>
        <div>
            <h4>Balanço mensal</h4>
            <span>Data</span>
            <div className="dataValues">
                <div className="values-1">
                    <p>Receitas</p>
                    <span>Value</span>
                </div>
                <div className="values-2">
                    <p>Despesas</p>
                    <span>Value</span>
                </div>
                <hr />
                <div className="finalValue">
                    <p>Balanço</p>
                    <span>Value</span>
                </div>
            </div>
        </div>
      </section> */}
    </MainStyled>
  );
};

export { Main };
