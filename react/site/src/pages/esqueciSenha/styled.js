import styled from 'styled-components';

const Container = styled.div`
  .container{
    padding: 5em;
  }

  body {
    margin: 0px;
    font-family: 'Josefin Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  .alinhar {
    display: flex;
    flex-direction: column;
    background-color: #0c1526;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 300px);
  }
  
  h1 {
    color: white;
  }

  .email{
    font-size: 15px;
    margin: 10px;
    font-family: "Josefin Sans", sans-serif;
    border: none;
    color: white;
    
  }

  .email input{
    background-color: #0c1526;
    border: none;
    border-bottom: 3px solid #e3b052;
    width: 300px;
    height: 30px;
    color: white;
    font-family: "Josefin Sans",sans-serif;
  }

  input::placeholder {
    text-align: center;
    color: white;
  }

  .alinhar button{
      color: #ffffff;
      background-color: #e3b052;
      font-family: "Josefin Sans", sans-serif;
      
      border-radius: 10px;
      text-decoration: none;
      font-size: 14px;
      width: 300px;
      height: 40px;
      align-items: center;
      border: none;
      cursor: pointer;
  }

 
`

export { Container };