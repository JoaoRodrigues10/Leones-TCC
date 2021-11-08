import styled from 'styled-components'

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    background: #242424;
    height: 67px;
    font-family: 'Josefin Sans', sans-serif;
    align-items: center;
    justify-content: space-between;
    min-height: calc(10vh - 67px);

    .paginas-cab {
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
        
    }

    .b {
    text-decoration: underline;
  }

    .opcoes {
        padding-right: 1em;
        padding-left: 1em;
        font-size: 1.1em;
        font-family: 'Josefin Sans', sans-serif;
    }

    .opcoes:hover{
        text-decoration: underline;
    }

    .imagem-cab img {
        width: 130px;
    }
    .imagem-cab2 img {
        width: 60px;
        margin: 0px;
    }

    .ft {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ft button {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: none;
        border: none;
    }

    .ft button a:hover{
        box-shadow: inset 0 0 1em gray, 0 0 1em #c4c4c4;
        text-decoration: underline;
        cursor: pointer;
    }

    .ft button img {
        width: 12px;
    }

    .ft img {
        border-radius: 50%;
        width: 3em;
        height: 3em;   
    }

    .login button {
        background: none;
        border: none;
        font-family: 'Josefin Sans', sans-serif;
        margin: 0px 10px;
        cursor: pointer;
    }

    .login button a:hover {
        text-decoration: underline;
    }
`





export { Cabecalho }