import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
export default function Penteados() {
    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
                SERVIÇOS ESPECIAIS
            </div>

            <div class="slider">
                <div class="seta">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>

                <div class="cabelo">
                <img src="/assets/images/especiais3.png" alt="" />
                <img src="/assets/images/especiais.png" alt="" />
                <img src="/assets/images/especiais2.png" alt="" />
                </div>

                <div class="seta2">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>
            </div>

            <div class="info">
                <div class="texto">.
                <div class="text2">
                Para você que quer algo diferente, <br />
                também temos micropigmentação nas <br />
                sobrancelhas, mega hair e ainda um <br />
                dia no nosso spa relaxante.
                </div>

                <div class="text2">
                    Por esse motivo o Leones tem preços a  <br />
                    partir de R$400.
                </div>
                </div>

                <div class="botao">
                <button>Agendar ida ao salão</button>
                </div>
            </div>
            </div>
        </ContainerCortes>
        <Rodape/>
        </div>
    )
}