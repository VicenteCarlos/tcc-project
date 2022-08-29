import styled from "styled-components";
import { MediaQuery } from "../../../../assets/mocks";

const MainStyled = styled.main`
  display: ${(props) => (props.isOpenModal ? "none" : "initial")};
`;

const Container_1 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10.1%;
  margin-top: 50px;

  .left-part {
    h1 {
      font-weight: bold;
      color: white;
      width: 330px;
      line-height: 50px;
    }

    p {
      width: 470px;
      line-height: 23px;
      margin-top: 10px;
    }

    button {
      border-radius: 10px;
      background-color: #52b788;
      border: 2px solid transparent;
      color: white;
      cursor: pointer;
      font-weight: bold;
      font-size: 17px;
      margin-top: 40px;
      padding: 7px;
    }

    button:hover {
      transition: 0.7s;
      border: 2px solid #52b788;
      color: #52b788;
      background: none;
    }
  }

  .rigth-part {
    margin-right: 15%;

    img {
      width: 600px;
      height: 450px;
      border-radius: 100%;
      margin-bottom: 25%;
    }
  }

  ${MediaQuery.mobile_320} {
    height: 90%;
    padding-bottom: 2rem;
    margin: 0;

    .left-part {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 23px;
        width: 60%;
        line-height: 40px;
        text-align: center;
      }

      p {
        width: 90%;
        text-align: center;
        margin-top: 30px;
      }
    }
    .rigth-part {
      display: none;
    }
  }

  ${MediaQuery.mobile_768} {
    height: 80%;

    .left-part {
      h1 {
        font-size: 50px;
        line-height: 90px;
      }
      p {
        font-size: 35px;
        line-height: 50px;
        width: 60%;
      }

      button {
        font-size: 30px;
        padding: 15px;
      }
    }
  }

  ${MediaQuery.mobile_1200} {
    height: 100%;

    .left-part {
      h1 {
        font-size: 65px;
        line-height: 140px;
      }

      p {
        font-size: 35px;
        line-height: 70px;
      }

      button {
        font-size: 30px;
        padding: 25px;
      }
    }
  }

  ${MediaQuery.mobile_1600} {
    height: 100%;
    padding: 5rem;

    .left-part {
      h1 {
        font-size: 65px;
        line-height: 140px;
      }

      p {
        font-size: 35px;
        line-height: 70px;
      }

      button {
        font-size: 30px;
        padding: 25px;
      }
    }
  }

  ${MediaQuery.mobile_1920} {
    .left-part {
      h1 {
        font-size: 55px;
        text-align: left;
        line-height: 110px;
      }

      p {
        font-size: 30px;
        line-height: 70px;
        text-align: left;
      }

      button {
        font-size: 30px;
        padding: 25px;
        margin-right: 37%;
        margin-bottom: 4rem;
      }
    }

    .rigth-part {
      display: initial;
    }
  }
`;

const Container_2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 60%;

  h2 {
    color: black;
    font-weight: bold;
  }

  p {
    color: black;
    width: 60%;
    margin-top: 30px;
    font-size: 18px;
    text-align: center;
  }

  ${MediaQuery.mobile_320} {
    height: 90%;
    justify-content: flex-start;

    h2 {
      font-size: 20px;
      width: 60vw;
      text-align: center;
      margin-top: 30px;
    }

    p {
      width: 60wv;
    }
  }

  ${MediaQuery.mobile_768} {
    height: 55%;

    h2 {
      font-size: 40px;
      margin-top: 70px;
    }

    p {
      font-size: 28px;
    }
  }

  ${MediaQuery.mobile_1200} {
    height: 70%;

    h2 {
      font-size: 60px;
    }

    p {
      font-size: 42px;
    }
  }

  ${MediaQuery.mobile_1600} {
    height: 75%;
    display: flex;
    justify-content: flex-start;
    margin-top: 40px;
    align-items: center;
    padding: 5rem;

    h2 {
      font-size: 60px;
    }

    p {
      font-size: 42px;
    }
  }

  ${MediaQuery.mobile_1920} {
    height: 70vh;
  }
`;

const Container_3 = styled.section`
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 900px;
    height: 450px;
    border-radius: 15%;
  }

  ${MediaQuery.mobile_320} {
    display: none;
  }
`;

const Container_4 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1d1d;
  height: 80%;
  padding: 5rem;

  div {
    display: flex;

    section {
      background-image: linear-gradient(to right, #1c1f1e, #2d3530);
      border-radius: 30px;
      width: 300px;
      height: 500px;
      margin: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h3 {
        width: 70%;
        color: white;
        font-size: 20px;
      }

      img {
        width: 45px;
        height: 45px;
      }

      p {
        width: 70%;
      }
    }

    .section-1 {
      p {
        font-size: 12px;
      }
    }
  }

  button {
    margin-top: 54px;
    border-radius: 15px;
    border: 2px solid transparent;
    background-color: #45a85b;
    color: white;
    width: 230px;
    height: 65px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    transition: 0.7s;
    color: #45a85b;
    border-color: #45a85b;
    background-color: #1e1d1d;
  }

  ${MediaQuery.mobile_320} {
    height: 360%;

    div {
      flex-direction: column;

      section {
        width: 80vw;
        height: 55vh;
        margin: 20px 0;

        h3 {
          font-size: 22px;
          width: 70%;
        }

        p {
          font-size: 17px;
          width: 70%;
        }
      }

      .section-1 {
        p {
          font-size: 15px;
        }
      }
    }
  }

  ${MediaQuery.mobile_768} {
    height: 250%;

    div {
      section {
        height: 27%;
        width: 30vw;
      }
      img {
        width: 40px;
        height: 40px;
      }

      h3 {
        font-size: 25px;
      }

      p {
        font-size: 20px;
      }

      .section-1 {
        p {
          font-size: 22px;
        }
      }
    }

    button {
      font-size: 25px;
    }
  }

  ${MediaQuery.mobile_1200} {
    height: 330%;

    div {
      section {
        height: 65%;
        width: 60vw;

        img {
          width: 140px;
          height: 140px;
        }

        h3 {
          font-size: 55px;
        }

        p {
          font-size: 35px;
        }
      }

      .section-1 {
        p {
          font-size: 32px;
        }
      }
    }

    button {
      font-size: 45px;
      width: 500px;
      height: 150px;
      padding: 35px;
    }
  }

  ${MediaQuery.mobile_1600} {
    div {
      section {
        height: 80vh;
        width: 40vw;

        img {
          width: 140px;
          height: 140px;
        }

        h3 {
          font-size: 55px;
        }

        p {
          font-size: 35px;
        }
      }

      .section-1 {
        p {
          font-size: 32px;
        }
      }
    }

    button {
      font-size: 45px;
      width: 500px;
      height: 150px;
      padding: 35px;
    }
  }

  ${MediaQuery.mobile_1920} {
    height: 100%;

    div {
      flex-direction: row;

      section {
        height: 45vh;
        width: 20vw;
        margin: 0 40px;

        img {
          width: 60px;
          height: 60px;
        }

        h3 {
          font-size: 31px;
        }

        p {
          font-size: 23px;
        }
      }

      .section-1 {
        p {
          font-size: 22px;
        }
      }
    }

    button {
      font-size: 30px;
      width: 400px;
      height: 100px;
      padding: 5px;
    }
  }
`;

const Container_5 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;

  h2 {
    font-size: 40px;
    color: white;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    .content {
      margin: 0 50px;
      display: flex;
      flex-wrap: wrap;
      width: 750px;

      section {
        background-image: linear-gradient(to right, #2d3530, #1c1f1e);
        border-radius: 30px;
        width: 250px;
        height: 300px;
        margin: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        img {
          width: 45px;
          height: 45px;
        }

        h3 {
          color: white;
          font-size: 18px;
        }

        p {
          width: 70%;
          font-size: 15px;
        }
      }
    }

    .content-2 {
      img {
        width: 560px;
        height: 530px;
        border-radius: 100%;
      }
    }
  }

  ${MediaQuery.mobile_320} {
    justify-content: flex-start;
    height: 280%;
    flex-wrap: nowrap;

    h2 {
      font-size: 30px;
      text-align: center;
      margin: 0 auto;
    }

    .container {
      margin: 40px 0;
      width: 50%;

      .content {
        flex-direction: column;
        margin: 0;

        section {
          width: 70vw;
          height: 370px;
          margin: 20px auto;

          h3 {
            font-size: 22px;
          }

          p {
            font-size: 17px;
          }
        }
      }

      .content-2 {
        display: none;
      }
    }
  }

  ${MediaQuery.mobile_768} {
    height: 185%;

    .container {
      .content {
        section {
          height: 23%;
          width: 30vw;
          margin: 40px 40px;

          img {
            width: 40px;
            height: 40px;
          }

          h3 {
            font-size: 25px;
          }

          p {
            font-size: 20px;
          }
        }
      }
    }
  }

  ${MediaQuery.mobile_1200} {
    height: 320%;

    h2 {
      font-size: 55px;
    }

    .container {
      justify-content: center;
      align-items: center;

      .content {
        section {
          height: 65%;
          width: 60vw;

          img {
            width: 140px;
            height: 140px;
          }

          h3 {
            font-size: 55px;
          }

          p {
            font-size: 35px;
          }
        }
      }
    }
  }

  ${MediaQuery.mobile_1200} {
    h2 {
      text-align: center;
    }

    .container {
      .content {
        justify-content: center;
        align-items: center;

        section {
          height: 65%;
          width: 50vw;

          img {
            width: 140px;
            height: 140px;
          }

          h3 {
            font-size: 55px;
          }

          p {
            font-size: 35px;
          }
        }
      }
    }
  }

  ${MediaQuery.mobile_1600} {
    .container {
      .content {
        width: 80vw;

        section {
          height: 80vh;
        width: 40vw;
        }
      }
    }
  }

  ${MediaQuery.mobile_1920} {
    height: 130%;

    h2 {
      text-align: center;
    }

    .container {
      width: 80vw;

      .content {
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 80vw;

        section {
          height: 45vh;
          width: 20vw;
          margin: 40px 40px;

          img {
            width: 60px;
            height: 60px;
          }

          h3 {
            font-size: 31px;
          }

          p {
            font-size: 23px;
          }
        }
      }

      .content-2 {
        display: initial;

        img {
          width: 40vw;
        }
      }
    }
  }
`;

const Container_6 = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  padding-top: 70px;

  h2 {
    font-size: 40px;
    margin-top: 100px;
  }

  .container {
    display: flex;
    margin-top: 50px;

    section {
      width: 5vw;
      height: 55%;
      margin: 0 35px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;

      img {
        border-radius: 20px;
        width: 100%;
        height: 150px;
      }

      h3 {
        text-align: left;
      }

      p {
        text-align: left;
      }

      button {
        color: #45a85b;
        border: 2px solid #45a85b;
        border-radius: 10px;
        background-color: white;
        font-size: 16px;
        padding: 10px;
        font-weight: bold;
        margin-top: 30px;
        cursor: pointer;
      }

      button:hover {
        transition: 0.7s;
        color: white;
        background-color: #45a85b;
      }

      .bt-0 {
        margin-top: 27px;
      }

      .bt-1 {
        margin-top: 90px;
      }

      .bt-2 {
        margin-top: 23px;
      }

      .bt-3 {
        margin-top: 85px;
      }
    }
  }

  ${MediaQuery.mobile_320} {
    height: 340%;

    h2 {
      text-align: center;
    }

    .container {
      flex-direction: column;

      section {
        width: 80vw;
        margin: 90px 0;
      }
    }
  }

  ${MediaQuery.mobile_768} {
    height: 360%;

    h2 {
      margin-top: 50px;
      font-weight: bold;
    }

    .container {
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 130px 0;

        img {
          width: 500px;
          height: 350px;
        }

        h3 {
          font-size: 40px;
        }

        p {
          font-size: 30px;
          text-align: center;
        }

        button {
          font-size: 35px;
        }
      }
    }
  }

  ${MediaQuery.mobile_1200} {
    height: 510%;

    h2 {
      font-size: 65px;
    }

    .container {
      section {
        margin: 290px 0;

        img {
          width: 600px;
          height: 550px;
        }

        h3 {
          font-size: 60px;
        }

        p {
          font-size: 40px;
        }

        h3,
        p {
          text-align: center;
        }

        button {
          margin-top: 20px;
          font-size: 45px;
        }
      }
    }
  }

  ${MediaQuery.mobile_1400} {
    height: 580%;
  }

  ${MediaQuery.mobile_1920} {
    height: 130%;

    h2 {
      font-size: 65px;
    }

    .container {
      flex-direction: row;

      section {
        margin: 150px 40px;
        width: 350px;

        img {
          width: 600px;
          height: 300px;
        }

        h3 {
          font-size: 40px;
        }

        p {
          font-size: 28px;
        }

        h3,
        p {
          text-align: center;
        }

        button {
          margin-top: 20px;
          font-size: 25px;
        }
      }
    }
  }
`;

export {
  MainStyled,
  Container_1,
  Container_2,
  Container_3,
  Container_4,
  Container_5,
  Container_6,
};
