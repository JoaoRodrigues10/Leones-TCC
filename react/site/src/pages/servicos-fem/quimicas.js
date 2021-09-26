import { ContainerCortes } from "./styled"
import Cabecalho from '../components/cabecalho'

export default function Penteados() {
    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
                QUÍMICAS EM GERAL
            </div>

            <div class="slider">
                <div class="seta">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>

                <div class="cabelo">
                <img src="/assets/images/quimica.png" alt="" />
                <img src="/assets/images/quimica2.png" alt="" />
                <img src="/assets/images/quimica3.png" alt="" />
                </div>

                <div class="seta2">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>
            </div>

            <div class="info">
                <div class="texto">.
                <div class="text2">
                Fazer algo diferente pode ser essencial, <br />
                muda faz parte da vida.
                </div>

                <div class="text2">
                    Por esse motivo o Leones tem preços a  <br />
                    partir de R$350.
                </div>
                </div>

                <div class="botao">
                <button>Agendar ida ao salão</button>
                </div>
            </div>
            </div>
        </ContainerCortes>
        </div>
    )
}