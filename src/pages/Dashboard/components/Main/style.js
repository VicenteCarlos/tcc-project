import styled from "styled-components";

const MainStyled = styled.main`
    background-color: #1E1D1D;
`

const Container_1 = styled.section`
    margin-top: 50px;

    h1 {
        font-size: 23px;
        color: white;
        margin-left: 7%;
    }

    .search {
        background-color: #303031;
        padding: 4px 12px;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        margin: 0 auto;

        input {
            background-color: #303031;
            color: white;
            padding: 10px 10px 10px 8px;
            border-radius: 10px;
            border: none;
            text-align: center;
        }
    }
`

const Container_2 = styled.section`
    background-color: #1B1818;
    width: 70%;
    margin: 30px auto;
    padding: 15px;
    border-radius: 10px;

    div {

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`

export { MainStyled, Container_1, Container_2 }