import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";

export default function Procedimentos() {
    return (
    <div>
        <Cabecalho/>
            
            <Container>
                <div className="titulo">
                    PROCEDIMENTO ESCOLHIDO
                </div>

                <div className="box">
                    <div className="box1">
                        <img src="/assets/images/quimica2.png" alt="" />
                    </div>
                    <div className="box2">
                        <div className="tit">
                            Você escolheu o procedimento Luzes.
                        </div>
                        <div className="tit2">
                            O procedimento escolhido custa a partir de R$ XX
                        </div>
                        <button> Voltar e escolher mais </button>
                        <button> Agendar ida ao salão </button>
                    </div>
                </div>
            </Container>

        <Rodape/>
    </div>
    )

}