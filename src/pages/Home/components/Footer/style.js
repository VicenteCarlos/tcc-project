import styled from "styled-components";
import { MediaQuery } from "../../../../assets/mocks";

const FooterStyled = styled.footer`
  background-color: #141414;
  color: white;
  height: 10vh;
  display: ${props => props.isOpenModal ? "none" : "flex"};
  justify-content: space-between;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;

    img {
      margin: 0 15px;
      width: 40px;
      height: 40px;
    }

    figcaption {
      margin: 0 5px;
      font-weight: bold;
      font-size: 15px;

      strong {
        color: #52b788;
      }
    }
  }

  span {
      margin-right: 30px;
  }

  ${MediaQuery.mobile_320} {
    justify-content: center;

    span {
      display: none;
    }
  }

  ${MediaQuery.mobile_768} {
    height: 20vh;

    figure {
      img {
        width: 100px;
        height: 110px;
      }

      figcaption {
        font-size: 30px;
      }
    }    
  }

  ${MediaQuery.mobile_1200} {
      figure {
        img {
          width: 150px;
          height: 150px;
        }

        figcaption {
          font-size: 50px;
        }
      }
    }
`;

export { FooterStyled };
