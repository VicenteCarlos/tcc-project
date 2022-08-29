import styled from "styled-components";

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
        
        h2, .divFormContainer {
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

    .imgLeft, .containerForm {
        width: 50vw;
        height: 100vh;
    }
    
`

export { MainStyled }