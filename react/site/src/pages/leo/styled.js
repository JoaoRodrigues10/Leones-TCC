import styled from "styled-components";

const Container = styled.div`

    .hair{
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/images/curly2.jpg");
        background-repeat: repeat;
        background-size: 240px;
        height: 400px;
    }


    .nails{
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/images/nails.jpg");
        background-repeat: repeat;
        background-size: 270px;
        height: 400px;
    }

    .barba{
        display: flex;
        align-items: center;
        justify-content: center;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/images/barba.jpg");
        background-repeat: repeat;
        background-size: 600px;
        height: 400px;
    }

    .titulo{
        color: white;
        font-size: 50px;
    }

    .fazer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #0c1526;
        padding: 50px 0px;
    }

    .tit{
        color: white;
        font-size: 30px;
        text-decoration: underline;
    }

    .box {
        display: flex;
        flex-direction: row;
    }
`
export { Container }