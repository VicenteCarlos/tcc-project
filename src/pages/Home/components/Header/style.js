import styled from "styled-components";

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

  nav {
    margin-top: 24.3px;

    ul {
      display: flex;

      li {
        list-style-type: none;
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
`;

export { HeaderStyled }