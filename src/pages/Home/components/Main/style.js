import styled from "styled-components";

const Container_1 = styled.section`
  display: flex;
  justify-content: space-between;
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
  height: 80vh;

  div {
    display: flex;

    section {
      background-image: linear-gradient(to right, #1c1f1e, #2d3530);
      border-radius: 30px;
      width: 300px;
      height: 300px;
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
`;

const Container_6 = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  height: 85vh;

  h2 {
    font-size: 40px;
    margin-top: 100px;
  }

  .container {
    display: flex;
    margin-top: 50px;

    section {
      width: 14vw;
      height: 55vh;
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
`;

export {
  Container_1,
  Container_2,
  Container_3,
  Container_4,
  Container_5,
  Container_6,
};
