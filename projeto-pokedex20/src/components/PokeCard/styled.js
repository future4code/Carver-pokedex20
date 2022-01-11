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

export const ButtonCard = styled.button`
  right: 10px;
  height: 10px;
  border-radius: 15px;
  background-color: #272485 ;
  color: yellow;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
`;
