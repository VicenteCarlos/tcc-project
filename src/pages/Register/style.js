import styled from "styled-components";
import { MediaQuery } from "../../assets/mocks"

const MainStyled = styled.main`
  display: flex;

  .imgLeft {
    img {
      width: 50vw;
      height: 100vh;
    }
  }

  .containerForm {
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h2 {
      margin-top: 150px;
    }

    h2,
    .divFormContainer {
      text-align: center;
    }

    span {
      color: black;
      text-align: left;

      a {
        color: #64b977;
        text-decoration: none;
      }
    }
  }

  .imgLeft,
  .containerForm {
    width: 50vw;
    height: 100vh;
  }

  ${MediaQuery.mobile_320} {
    .imgLeft {
      display: none;
    }
  }

  ${MediaQuery.mobile_768} {
    .imgLeft {
      display: none;
    }
  }

  ${MediaQuery.mobile_1200} {
    .imgLeft {
      display: initial;
    }
  }
`;

export { MainStyled };
