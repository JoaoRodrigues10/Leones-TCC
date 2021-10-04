import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

import { Link } from "react-router-dom";




export default function Cortes() {

    
      
    return(
        <div>
            <Cabecalho/>
                <ContainerCortes>
                            <div class="faixa">
                    <div class="titulo">
                        CORTES
                    </div>

                    <div class="slider">
                        <div class="seta">
                        <button><img src="/assets/images/arrow.svg" alt="" /></button>
                        </div>

                        <div class="cabelo">
                        <img src="/assets/images/cabelo3.png" alt="" />
                        <img src="/assets/images/cabelo2.png" alt="" />
                        <img src="/assets/images/cabelo4.png" alt="" />
                        </div>

                        <div class="seta2">
                        <button><img src="/assets/images/arrow.svg" alt="" /></button>
                        </div>
                    </div>

                    <div class="info">
                        <div class="texto">.
                        <div class="text2">
                            Um bom corte de cabelo é essencial <br />
                            para que o rosto tenha harmonia. Além <br />
                            de acentuar os traços do rosto e <br />
                            revelar um pouco da personalidade de <br />
                            cada mulher, o corte também tem forte <br />
                            influência na beleza do rosto.
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
                </ContainerCortes>
                <Rodape/>
        </div>
    )
}