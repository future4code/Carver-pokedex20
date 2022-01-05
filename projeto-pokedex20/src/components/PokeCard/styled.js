import styled from "styled-components";

export const ContainerCard = styled.div`
    background-color: #f1f1f1;
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 20px 0px;


    img {
        width: 60%;
    }

    div {
        display: flex;
        width: 100%;

            button {
                display: inline-block;
                width: 50%;
                height: 40px;
            }
    }
`
