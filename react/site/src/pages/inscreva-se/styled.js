import styled from "styled-components";

const Container = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    background-color: #0c1526;

    height: 680px;
    min-height: calc(100vh - 300px);
    justify-content: center;
  }
  
  .faixa1 {
    display: flex;
    flex-direction: row;
  }

  .b {
    text-decoration: underline;
  }
  
  .f1-logo img {
    width: 300px;
    height: 144.28px;
  }
  
  .inscreva-se {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulo h1 {
    font-size: 40px;
    margin: 40px;
    color: #ffffff;
    font-family: "Josefin Sans", sans-serif;
  }
  
  .f2-nome input {
    font-size: 15px;
    margin: 10px;
    font-family: "Josefin Sans", sans-serif;
    border: none;
    background-color: #0c1526;
    border-bottom: 3px solid #e3b052;
    width: 300px;
    height: 30px;
    color: white;
  }
  
  input::placeholder {
    color: white;
    text-align: center;
  }
  
  .botao {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 17px 0px;
  }
  
  .botao button {
    color: #ffffff;
    background-color: #e3b052;
    font-family: "Josefin Sans", sans-serif;
  
    border-radius: 15px;
    text-decoration: none;
    font-size: 14px;
    padding: 14px 100px;
    align-items: center;
    border: none;
  }

  .inscreva-se {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  
  .cadrastro{
    color: #ffffff;
    font-family: "Josefin Sans", sans-serif;
    margin-top: 10px;
  }
  
  .cadrastro a {
    border-bottom: 1px solid white;
  }
`
export { Container }