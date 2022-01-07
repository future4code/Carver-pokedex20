import styled from "styled-components";

export const DetailsContainer = styled.main`
  height: 60vh;
  width: 96vw;
  display: flex;
  margin: 10px 20px;
  color: #272485;
  flex-direction: column;
  /* justify-content: space-between; */

  h2 {
    text-align: center;
  }

`;

export const ContainerButtons = styled.div`
  width: 96vw;
  display: flex;
  justify-content: center;
`

export const ButtonCard = styled.button`
  right: 10px;
  height: 30px;
  border-radius: 15px;
  background-color: #272485 ;
  color: yellow;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  margin-right: 10px;
`;


export const MainContainer = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-around;
`

export const ImagesContainer = styled.div`
  align-self: center;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgPoke = styled.img`
  width: 12vw;
`;

export const InfosContainer = styled.div`
  background-color: #f1f1f1;
  color: #272485;
  margin-top: 50px;
  display: grid;
  width: 50vw;
  display: flex;

  div {
    width: 100%;
    padding: 10px;

    li {
      margin: 2px;
    }
  }
`;

export const TypesContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 10px ;
`;

export const MovesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  margin-left: 10px ;
`;

export const StatsContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px ;
`;

export const TitleContainer = styled.h3`
  align-self: flex-start;
  margin: 0;
`;


