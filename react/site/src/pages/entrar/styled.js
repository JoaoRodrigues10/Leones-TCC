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
  
.rodape {
  display: flex;
  flex-direction: row;
  background-color: #242424;
  justify-content: center;
  padding: 50px 30px;
  
  width: auto;
  height: 290px;
}
  
.rodape-nome {
  margin: 0px 0px 30px;
}
  
.rodape h1 {
  border-bottom: 1px solid #ffffff;
  font-size: 25px;
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
}
  
.rodape-text {
  color: #ffffff;
  font-family: "Josefin Sans", sans-serif;
  line-height: 20px;
  margin: 10px 0px;
}
  
.sobre {
  margin: 0px 50px 0px 0px;
}
  
.contato {
  margin: 0px 50px 0px 0px;
}
  
.localizacao {
  margin: 0px 50px 0px 0px;
}
  
.img-local img {
  width: 450px;
  height: 145px;
}
  



`
export { Container }