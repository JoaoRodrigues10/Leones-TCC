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

    height: 680px;
  }
`

export { Container };