import styled from "styled-components";

const Container = styled.div`
.cabecalho {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #242424;
    padding: 10px 20px;
  }
  
  .logo img {
    width: 150px;
  }
  
  .text {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    font-size: 20px;
  }
  
  .cab {
    margin: 0px 20px 0px 0px;
  }
  
  .foto_perfil img {
    width: 40px;
  }
  
  .servicos {
    background-color: #174580;
    padding: 100px 20px;
    min-height: calc(75vh - 67px);
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .boas-vindas {
    font-family: "Josefin Sans";
    font-size: 50px;
    color: #ffffff;
    text-align: center;
    line-height: 1em;  
  }
  
  
  .boas-vindas2 {
    font-family: "Josefin Sans";
    font-size: 50px;
    color: #ffffff;
    text-align: center;
    line-height: 1em;  
    margin: 20px 0px 0px;
  }
  
  .botoes {
    display: flex;
    justify-content: center;
    margin: 30px 0px 0px;
  }
  button {
    font-weight: 700;
    font-size: 25px;
    color: #fff;
    background: #e3b052;
    border: none;
    border-radius: 10px;
    padding: 1em 3.5em;
    cursor: pointer;
    margin-left: 20px;
  }
  
  button:hover {
    background-color: #ffc222;
  }
  
`

export { Container }