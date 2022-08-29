import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    h2 {
      color: #64b977;
      font-size: 3rem;
    }
  }

  .inputContainer {
    border: none;
    display: flex;
    margin-bottom: 0;
    margin-top: 40px;

    div {
      width: 13.9vw;
      margin-top: 30px;
    }

    .name {
        margin-left: -8%;
    }

    .surname {
        margin-left: -1%;
        width: 10vw;
    }

    div,
    label {
      margin: 0 10px;
    }
  }

  .inputContainer-2 {
    border: none;
    display: flex;
    flex-direction: column;

    div {
      margin: 5px 0;
      width: 28vw;
    }
  }

  button {
    font-size: 1.3rem;
    padding: 15px;
    border: 2px solid #64b977;
    border-radius: 5px;
    color: #64b977;
    background-color: white;
    cursor: pointer;
    margin-bottom: 40px;
  }

  button:hover {
    transition: 0.7s;
    color: white;
    background-color: #64b977;
  }
`;

export { FormStyled };
