import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #141C48;

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
        padding-left: 5.2em;
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
`

export{ Container }