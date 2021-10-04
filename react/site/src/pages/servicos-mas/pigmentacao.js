import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";
export default function Pigmentacao() {
	return (
        <div>
            <Cabecalho/>
            <Container>
                <div class="faixa">
                <div class="titulo">
                    PIGMENTAÇÃO
                </div>

                <div class="slider">
                    <div class="seta">
                    <button><img src="/assets/images/arrow.svg" alt="" /></button>
                    </div>

                    <div class="cabelo">
                    <img src="/assets/images/pig3.png" alt="" />
                    <img src="/assets/images/pig.png" alt="" />
                    <img src="/assets/images/pig2.png" alt="" />
                    </div>

                    <div class="seta2">
                    <button><img src="/assets/images/arrow.svg" alt="" /></button>
                    </div>
                </div>

                <div class="info">
                    <div class="texto">.
                    <div class="text2">
                        Indicada para quem tem calvície <br/>
                        avançada ou pequenas falhadas no <br/>
                        couro cabeludo, a pigmentação capilar <br/>
                        é o procedimento ideal para quem <br/>
                        busca dar mais volume e densidade <br/>
                        aos cabelos.
                    </div>

                    <div class="text2">
                        Por esse motivo o Leones tem preços a <br />
                        partir de R$100.
                    </div>
                    </div>

                    <div class="botao">
                    <Link to="/calendario">
                        <button>Agendar ida ao salão</button>
                        </Link>
                    </div>
                </div>
                </div>
            </Container>
            <Rodape/>
        </div>
    )
}