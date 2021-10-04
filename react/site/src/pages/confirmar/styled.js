import styled from "styled-components";

const Container = styled.div`
.confirmar-horario {
    background-color: #174580;
    padding: 100px 20px;
  }
  
  .antes {
    font-family: "Josefin Sans";
    font-size: 50px;
    color: #ffffff;
    text-align: center;
  }
  
  .avaliacao {
    font-family: "Josefin Sans";
    font-size: 35px;
    color: #ffffff;
    text-align: center;
  }
  
  .confirmar {
    font-family: "Josefin Sans";
    font-size: 30px;
    color: #ffffff;
    text-align: center;
  }
  
  .botoes {
    display: flex;
    justify-content: center;
  }
  
  button {
    font-weight: 700;
    color: #fff;
    background: #e3b052;
    border: none;
    border-radius: 10px;
    padding: 2em 4.5em;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e01b1b;
  }
  
`
export { Container }