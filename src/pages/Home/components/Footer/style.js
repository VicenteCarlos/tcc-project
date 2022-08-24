import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #141414;
  color: white;
  height: 10vh;
  display: flex;
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
`;

export { FooterStyled };
