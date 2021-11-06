import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .faixa1 {
    display: flex;
    align-items: center;
  }
  
  .faixa-cabelo {
    background-image: url("/assets/images/cabelo1.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
  }
  
  .text-cabelo {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 144px;
    padding: 96px 213px;
    color: #e3b052;
    text-align: center;
  }
  
  .faixa2 {
    background-color: #13213c;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 0px 100px 0px;
  }
  
  .titulo {
    color: #ffffff;
    font-size: 50px;
    padding: 0px 0px 33px 0px;
  }
  
  .equipe {
    display: flex;
    flex-direction: row;
  }
  
  .equipe img {
    width: 416px;
    height: 409px;
    border-radius: 34px;
    margin: 0px 41px 0px 0px;
  }
  
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .desc2 {
    color: #ffffff;
    font-size: 16px;
    padding: 0px 0px 19px 0px;
  }
  
  .faixa3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #0c1526;
    padding: 100px 92px;
  }
  
  .faixa3 img {
    width: 628px;
    height: 416px;
    border-radius: 34px;
    margin: 0px 41px 0px 0px;
  }
  
  .faixa4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #13213c;
    padding: 54px 0px 65px 0px;
    align-items: center;
  }
  
  .destaques {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .titulo2 {
    color: #e3b052;
    font-size: 50px;
  }
  
  .box img {
    width: 267px;
    height: 283px;
    border-radius: 10px;

  }
  
  .box {
    display: flex;
    flex-direction: column;
    background-color: #174580;
    width: 342px;
    height: 536px;
    align-items: center;
    justify-content: center;
    margin: 32px 30px 58px 30px;
    border-radius: 10px;

  }
  
  .des {
    text-align: center;
    color: #ffffff;
    font-size: 12px;
    margin: 27px 0px;
  }
  
  .box button {
    background-color: #e3b052;
    color: #ffffff;
    padding: 19px 124px;
    border: none;
    border-radius: 22px;
    cursor:pointer;
  }
  
  .marcas {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  
  .marcas img {
    width: 200px;
    margin: 0px 20px;
  }
  
  .faixa5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #0c1526;
    padding: 50px 0px 0px;
  }
  
  .tit {
    color: #e3b052;
    font-size: 16px;
    padding: 0px 0px 27px;
  }
  
  .tit2 {
    color: #e3b052;
    font-size: 16px;
    padding: 50px 0px 27px 0px;
  }
  
  .info {
    color: #ffffff;
    font-size: 16px;
    line-height: 30px;
  }

  @media (max-width: 1024px){

    .box {
      width: 242px;
      height: 436px;
      border-radius: 10px;
    }

      
  .box button {
    padding: 15px 80px;
  }

  .box img {
    width: 207px;
    height: 223px;
    border-radius: 10px;
  }

    .marcas img {
      width: 130px;
    }

    .des {
      font-size: 9px;
    }

    .faixa3 img {
      width: 508px;
      height: 306px;
    }

    .faixa3 {
      display: flex;
      align-items: center;
    }

    .desc2{
      font-size: 10px;
    }

    .text-cabelo {
      font-size: 70px;
    }
    
  }
  
`

export { Container }