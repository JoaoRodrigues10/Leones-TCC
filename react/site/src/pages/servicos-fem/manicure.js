import { ContainerCortes } from "./styled"

export default function Penteados() {
    return(
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
                MANICURE E PEDICURE
            </div>

            <div class="slider">
                <div class="seta">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>

                <div class="cabelo">
                <img src="/assets/images/unha.png" alt="" />
                <img src="/assets/images/unha2.png" alt="" />
                <img src="/assets/images/unha3.png" alt="" />
                </div>

                <div class="seta2">
                <button><img src="/assets/images/arrow.svg" alt="" /></button>
                </div>
            </div>

            <div class="info">
                <div class="texto">.
                <div class="text2">
                Ter as nossas unhas saudáveis e <br />
                bonitas é muito importante, pois <br />
                quando cuidamos de nós mesmas isso <br />
                faz nossa autoestima crescer ainda <br />
                mais, e lembre-se procure sempre <br />
                manicure e pedicure profissionais, pois <br /> 
                são esses que saberão cuidar das <br />
                nossas unhas da maneira correta.
                </div>

                <div class="text2">
                    Por esse motivo o Leones tem preços a  <br />
                    partir de R$40.
                </div>
                </div>

                <div class="botao">
                <button>Agendar ida ao salão</button>
                </div>
            </div>
            </div>
        </ContainerCortes>
    )
}