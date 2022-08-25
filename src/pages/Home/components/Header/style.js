import styled from "styled-components";
import { MediaQuery } from "../../../../assets/mocks";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #161a1d;
  height: 15vh;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin: 0 25px;
      width: 70px;
      height: 70px;
    }

    figcaption {
      margin: 0 5px;
      font-weight: bold;
      font-size: 25px;

      strong {
        color: #52b788;
      }
    }
  }

  nav {
    margin-top: 24.3px;

    ul {
      display: flex;

      li {
        list-style-type: none;
        font-size: 20px;
        margin: 0 14px;
        color: gray;
        padding: 9px;
        border-radius: 15px;
      }

      li:hover {
        transition: 0.7s;
        color: white;
        background-color: #52b788;
        cursor: pointer;
      }
    }
  }

  .containerButton {
    button {
      background: none;
      border: none;
      padding: 7px;
      margin-top: 31.5px;
      font-weight: bold;
      font-size: 20px;
      color: white;
      cursor: pointer;
    }

    #login:hover {
      transition: 0.7s;
      color: #64b977;
    }

    #register {
      border: 2px solid white;
      border-radius: 12px;
      margin: 0 40px;
    }

    #register:hover {
      transition: 0.7s;
      border: 2px solid #64b977;
      color: #64b977;
    }
  }

  ${MediaQuery.mobile_320} {
    justify-content: center;
    align-items: center;

    figure {
      margin: 0;
      margin-right: 10%;

      img {
        width: 45px;
        height: 45px;
      }

      figcaption {
        font-size: 22px;
      }
    }

    button {
      width: 50px;
      height: 50px;
      background-color: transparent;
      border: none;

      img {
        background-color: #52b788;
        border-radius: 100%;
      }
    }

    nav {
      display: none;
    }

    .containerButton {
      button {
        display: none;
      }
    }
  }

  ${MediaQuery.mobile_768} {
    figure {
      img {
        width: 95px;
        height: 95px;
      }

      figcaption {
        font-size: 45px;
      }
    }

    button {
      width: 90px;
      height: 90px;
    }
  }

  ${MediaQuery.mobile_1200} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    figure {
      margin-left: 5%;
      padding-left: ${(element) => (element.isOpen ? "0" : "15%")};
      padding-right: ${(element) => (element.isOpen ? "50%" : "15%")};
      transition: 0.7s;

      img {
        width: 80px;
        height: 80px;
      }

      figcaption {
        font-size: 35px;
      }
    }

    button {
      margin-right: 10%;
    }
  }

  ${MediaQuery.mobile_1600} {
    figure {
      padding: 0;

      img {
        width: 95px;
        height: 95px;
      }

      figcaption {
        font-size: 38px;
        width: 200px;
      }
    }

    nav {
      display: initial;

      ul {
        li {
          font-size: 23px;
        }
      }
    }

    .containerButton {
      width: 500px;
      margin-bottom: 26.5px;

      #login,
      #register {
        display: initial;
      }

      #register {
        width: 150px;
        height: 50px;
      }

      #login {
        padding-left: 90px;
      }
    }

    button {
      display: none;
    }
  }

  ${MediaQuery.mobile_1920} {
    figure {
      img {
        width: 80px;
        height: 80px;
      }

      figcaption {
        font-size: 21px;
        width: 400px;
      }
    }
  }
`;

export { HeaderStyled };
