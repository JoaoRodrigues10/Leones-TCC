import styled from "styled-components"

const Container2 = styled.div`
    background-color: #3B50A2;

    padding: 2.5em;
    color: white;

    .Container{
        background-color: #174580;
    
        padding: 2em;
        
        border-radius: 20px;
    }

    .Box-1{
        padding: 1em;
    }

    .Box-2{
        display: flex;
        flex-direction: row;

        padding: 2em;

        justify-content: center;
        aling-itens: center;    
    }

    .Informacoes{
        display: flex;
        flex-direction: column;

        padding: 2em;
        background-color: #3B70A2;

        width: 450px;
        height: 500px;

        border-radius: 20px;
    }

    .Informacoes input{
        background: none;
        border: none;
        font-family: "Josefin Sans";
        color: white;
        font-size: 30px;
    }

    .Alterar{
        background-color: #3B70A2;  

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 1em;
        background-color: #3B70A2;

        width: 1000px;
        height: 700px;
        margin-left: 20px;
    
        border-radius: 20px;
    }

    h1{
        
        padding: 0.5em;
    }

    li{

        padding: 0.5em;

        font-size: 30px;

    }

    .Botao-alterar{
        text-align: center;
        padding: 3em;
        
        
    }

    .Botao-alterar button{
        padding: 0.5em; 
        border: none;
        border-radius: 10px;

        font-size: 30px;
        font-family: "Josefin Sans";

        background-color: #E3B052;
        color: white;
    }

    .Alterar-Horario{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

     
`


const Container = styled.div`
.confirmar-horario {
    display: flex;
    flex-direction: column;
    background-color: #174580;
    min-height: calc(80vh - 67px);
    justify-content: center;
  }
  
  .antes {
    font-family: "Josefin Sans";
    font-size: 35px;
    color: #ffffff;
    text-align: center;
    margin: 0px 0px 20px;
  }
  
  .avaliacao {
    font-family: "Josefin Sans";
    font-size: 35px;
    color: #ffffff;
    text-align: center;
    margin: 0px 0px 15px;
  }
  
  .confirmar {
    font-family: "Josefin Sans";
    font-size: 30px;
    color: #ffffff;
    text-align: center;
    margin: 0px 0px 15px;
  }
  
  .botoes {
    display: flex;
    justify-content: center;
  }
  
  button {
    font-weight: 700;
    font-size:20px;
    padding: 15px 60px;
    color: #fff;
    background: #e3b052;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 20px;
  }

  @media (max-width: 1024px){
    .antes {
      font-size: 25px;
    }
    
    .avaliacao {
      font-size: 25px;
    }
    
    .confirmar {
      font-size: 20px;
    }

    button {
      font-size:15px;
      padding: 10px 50px;
    }
  }
  
`

export { Container2, Container }