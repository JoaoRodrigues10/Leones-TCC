import styled from "styled-components";

const Container = styled.div`


.aprovacao {
    background-color: #174580;
    min-height: calc(80vh - 67px);
    display: flex;
    justify-content: center;
    flex-direction: column;
}  
  .eba {
    font-family: "Josefin Sans";
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin: 0px 0px 20px;
  }

  .eba2 {
    font-family: "Josefin Sans";
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin: 0px 0px 20px;
  }

  @media (max-width: 1024px){
    .eba {
      font-size: 20px;
    }
  
    .eba2 {
      font-size: 20px;
    }
  }
`

export { Container }