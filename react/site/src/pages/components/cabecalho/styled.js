import styled from 'styled-components'

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    background: #242424;
    padding: 0.6em;
    align-items: center;
    justify-content: space-between;

    .paginas-cab {
        display: flex;
        flex-direction: row;
        color: #FFFFFF;
    }

    .opcoes {
        padding-right: 1em;
        padding-left: 1em;
        font-size: 1em;
    }

    .imagem-cab img {
        width: 130px;
    }
    .imagem-cab2 img {
        width: 60px;
    }
`





export { Cabecalho }