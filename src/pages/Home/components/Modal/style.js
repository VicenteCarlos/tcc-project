import styled from "styled-components";
import { MediaQuery } from "../../../../assets/mocks";

const DivSectionStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #161a1d;

  .content {
    margin-right: 15px;

    ul {
      margin-top: 30px;
      font-size: 20px;

      li {
        list-style-type: none;
        text-align: center;
        margin: 30px 0;
      }
    }
  }

  .content-2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 25%;
    margin-left: 3%;

    button {
      background: none;
      border: none;
      padding: 7px;
      margin-top: 31.5px;
      font-weight: bold;
      font-size: 22px;
      color: white;
      cursor: pointer;
    }

    #register {
      border: 2px solid white;
      border-radius: 12px;
      margin: 20px 40px;
    }

    #close {
      color: white;
      background: #2e7b3f;
      border: none;
      border-radius: 15px;
      font-size: 25px;
      padding: 10px;
      width: 100%;
    }
  }

  ${MediaQuery.mobile_768} {
    padding-top: 10%;

    .content {
      ul {
        li {
          font-size: 30px;
        }
      }
    }

    .content-2 {
      button, #close {
        font-size: 25px;
      }
      
    }
  }

  ${MediaQuery.mobile_1600} {

    .content {
      ul {
        li {
          font-size: 45px;
        }
      }
    }

    .content-2 {
      button {
        margin-top: 0;
      }

      #register {
        margin: 50px 0;
        padding: 15px;
      }

      button, #close {
        font-size: 45px;
      }
      
    }
  }
`;

export { DivSectionStyled };
