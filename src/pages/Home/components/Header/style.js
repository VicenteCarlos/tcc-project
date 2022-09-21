import styled from "styled-components";
import { MediaQuery } from "../../../../assets/mocks";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #161a1d;
  height: 15vh;
  position: fixed;
  width: 100vw;

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

    #register {
      border: 2px solid white;
      border-radius: 12px;
      margin: 0 40px;
    }

    #register:hover {
      transition: 1s;
      border: 2px solid #64b977;
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

    nav, .containerButton {
      display: none;
    }

    button {
      width: 50px;
      height: 90;
      margin-bottom: 20px;
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
        font-size: 55px;
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
        width: 90px;
        height: 90px;
      }

      figcaption {
        font-size: 38px;
        width: 500px;
      }
    }

    nav {
      display: initial;

      ul {
        padding: 0;
        padding-right: 100px;

        li {
          font-size: 27px;
        }
      }
    }


    .containerButton {
      width: 500px;
      margin-bottom: 12.3px;
      display: flex;
      justify-content: center;
      align-items: center;

      #login,
      #register {
        display: initial;
        font-size: 24px;
      }

      #register {
        width: 160px;
        height: 80px;
        padding: 05px;
        margin-right: 2rem;
    
      }

      #login {
        padding-right: 30px;
  
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
        font-size: 36px;
        width: 400px;
      }
    }

    nav {
      width: 300px;
      ul {
        display: flex;
      }
    }

    button {
      display: none;
    }
  }
`;

export { HeaderStyled };
