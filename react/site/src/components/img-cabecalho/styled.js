import styled from 'styled-components'

const CabecalhoImage = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #0c1526;
    }
    
    .faixa1 {
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: start;
        height: 60px;
    }
    
    .f1-logo img {
        width: 300px;
        height: 144.28px;
    }

    @media(max-width: 500px){
        .faixa1 {
            display: flex;
            flex-direction: row;
            align-items: start;
            justify-content: start;
        }

        .f1-logo img {
            width: 200px;
            height: auto;
        }        
    }
`





export { CabecalhoImage }