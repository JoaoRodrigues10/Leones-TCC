import styled from "styled-components";

const Container = styled.div`
.confirmar-horario {
    display: flex;
    flex-direction: column;
    background-color: #174580;
    min-height: calc(75vh - 67px);
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
  
  button:hover {
    background-color: black;
  }
  
`
export { Container }