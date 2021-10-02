import styled from "styled-components";

const Container = styled.div`
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
