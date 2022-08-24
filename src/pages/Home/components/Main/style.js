import styled from "styled-components";

const Container_1 = styled.section`
  display: flex;
  justify-content: space-between;
  margin-left: 10.1%;
  margin-top: 50px;

  .left-part {
    h1 {
      font-weight: bold;
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
      width: 350px;
      height: 350px;
      border-radius: 100%;
      margin-bottom: 25%;
    }
  }
`;

const Container_2 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 60vh;

  h2 {
    color: black;
    font-weight: bold;
    margin-top: 20px;
  }

  p {
    color: black;
    width: 60%;
    margin-top: 30px;
    font-size: 18px;
    text-align: center;
  }
`;

const Container_3 = styled.section`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 900px;
    height: 450px;
    border-radius: 15%;
  }
`;

const Container_4 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1d1d;
  height: 85vh;

  div {
    display: flex;

    section {
      background-image: linear-gradient(to right, #2d3530, #1c1f1e);
      border-radius: 30px;
      width: 290px;
      height: 280px;
      margin: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;

      h3 {
        width: 70%;
      }

      p {
        width: 70%;
      }
    }
  }

  button {
    margin-top: 54px;
    border-radius: 15px;
    border: 2px solid transparent;
    background-color: #45A85B;
    color: white;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    transition: 0.7s;
    color: #45A85B;
    border-color: #45A85B;
    background-color: #1E1D1D;
  }
`;

const Container_5 = styled.section``;

const Container_6 = styled.section``;

const Container_7 = styled.section``;

export {
  Container_1,
  Container_2,
  Container_3,
  Container_4,
  Container_5,
  Container_6,
  Container_7,
};
