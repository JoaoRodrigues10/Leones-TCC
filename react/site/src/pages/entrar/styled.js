import styled from "styled-components"
  
const Container = styled.div`
.container {
    display: flex;
    flex-direction: column;
    background-color: #0c1526;
    
    height: 680px;
  }
  
  .faixa1 {
    display: flex;
    flex-direction: row;
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
    color: white;
    border-bottom: 3px solid #e3b052;
    width: 300px;
    height: 30px;
  }
  
  input::placeholder {
    text-align: center;
    color: white;
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
  
  border-radius: 10px;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 120px;
  align-items: center;
  border: none;
  cursor: pointer;
}
  
.cadrastro {
  font-size: 15px;
  margin: 20px;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
}
  


`
export { Container }