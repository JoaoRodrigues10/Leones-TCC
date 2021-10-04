import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
export default function Tratamentos() {
    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
                TRATAMENTO CAPILAR 
            </div>

            <div class="slider">
                <div class="seta">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>

                <div class="cabelo">
                <img src="/assets/images/tratamento2.png" alt="" />
                <img src="/assets/images/tratamento1.png" alt="" />
                <img src="/assets/images/tratamento3.png" alt="" />
                </div>

                <div class="seta2">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>
            </div>

            <div class="info">
                <div class="texto">.
                <div class="text2">
                 É muito importante manter uma rotina <br />
                 de tratamentos capilares para evitar <br />
                 que seus cabelos fiquem com <br />
                 comprimento e pontas danificados. A <br />
                 ponta é a parte que sofre mais do fio e <br />
                 pode ficar afinada e sem movimento.
                </div>

                <div class="text2">
                 Por esse motivo o Leones tem preços a  <br />
                 partir de R$150.
                </div>
                </div>

                <div class="botao">
                <Link to="/calendario">
                        <button>Agendar ida ao salão</button>
                        </Link>
                </div>
            </div>
            </div>
        </ContainerCortes>
        <Rodape/>
        </div>
    )
}