import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #141C48;
    justify-content: center;


    .titulo {
        padding: 1em 0em;
        color: white;
        font-size: 2em ;

    }
    .titulo2 {
        padding: 1em 0em;
        color: white;
        font-size: 2em ;
    }

    .horarios-dispo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .horarios-dispo button {
        font-size: 2em;
        margin: 1em;
        background-color: #e3b052;
        color: #ffffff;
        height: 2em;
        width: 10em;
        border: none;
        cursor: pointer;
        border-radius: 22px;
    }

    @media (max-width: 500px){
        .titulo {
            font-size: 1em ;
        }

        .titulo2 {
            font-size: 1em ;
        }

        .horarios-dispo button {
            font-size: 1em;
            height: 2em;
            width: 5em;
        }
      }
      
`

export{ Container }