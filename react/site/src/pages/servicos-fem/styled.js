import styled from "styled-components";

const Container = styled.div`

  
  .faixa1 {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        rgba(0, 0, 0, 0.7), 
        rgba(0, 0, 0, 0.7)
      ), url("/assets/images/fundofem (4).png");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 46px 110px;
    min-height: calc(100vh - 67px);
    justify-content: center;
  }
  
  .botoes {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  
  .botao {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 80px 20px 80px;
  }
  
  .botao img {
    width: 30px;
  }
  
  .botao button {
    background-color: #e3b052;
    border-radius: 100%;
    border: none;
    width: 100px;
    height: 80px;
    cursor:pointer;
  }
  
  .titulo {
    font-size: 20px;
    text-align: center;
    color: #ffffff;
    margin: 20px 0px 0px 0px;
    cursor: pointer;
  }
  
  li {
    font-size: 20px;
    color: #ffffff;
  }
  
`
const ContainerCortes = styled.div`
.faixa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px 0px;
  background-color: #13213c;
  min-height: calc(100vh - 67px);
}

.carrosel {
  width: 100%;
}

.titulo {
  color: #e3b052;
  font-size: 30px;
  font-weight: bolder;
  margin: 0px 0px 40px;
}

.slider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cabelo {
  padding: 0px;
  margin 0px;
}

.cabelo img {
  width: 236px;
  height: 310px;
}

.info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 90px 0px 0px;
}

.texto {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 0px 50px 0px 0px;
}

.text2 {
  font-size: 20px;
  color: #ffffff;
  margin: 0px 0px 30px;
  line-height: 25px;
}

.botao button {
  width: 291px;
  height: 50px;
  border: none;
  border-radius: 15px;
  font-size: 15px;
  color: #ffffff;
  background-color: #e3b052;
  font-weight: bold;
  margin: 0px 0px 50px;
}

@media (max-width: 1024px){

  .carrosel {
    width: 90%;
  }

  .cabelo img {
    width: 156px;
    height: 230px;
    margin: 0px;
  }

  .text2{
    font-size: 15px;
  }

  .botao button {
    width: 251px;
    height: 40px;
  }
}

`

export { Container, ContainerCortes }