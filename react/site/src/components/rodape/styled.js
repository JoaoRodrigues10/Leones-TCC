import styled from "styled-components";

const Container = styled.div`
.rodape {
  display: flex;
  flex-direction: row;
  background-color: #242424;
  justify-content: center;
  padding: 50px 30px;
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

@media (max-width: 1024px){
  .img-local img{
    width: 330px;
    height: 95px;
  }

  .rodape-text{
    font-size: 9px;
    margin: 0px;
  }
}

@media (max-width: 500px){
  .rodape{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .img-local img{
    width: 300px;
  }
}

`

export { Container }
