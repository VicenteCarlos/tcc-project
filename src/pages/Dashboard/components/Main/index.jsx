import {
  Container_1,
  Container_2,
  Container_3,
  Container_4,
  MainStyled,
} from "./style";
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Main = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => Math.random()),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

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
      <Container_3>
        <div>
          <Line data={data} options={options}/>
        </div>
        {/* <div>
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
        </div> */}
      </Container_3>
      <Container_4></Container_4>
    </MainStyled>
  );
};

export { Main };
