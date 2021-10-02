import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
export default function CortesMas() {
    return (
        <div>
        <Cabecalho/>
            <Container>
                <div class="faixa">
      <div class="titulo">
        CORTES
      </div>

      <div class="slider">
        <div class="seta">
          <button><img src="/assets/images/arrow.svg" alt="" /></button>
        </div>

        <div class="cabelo">
          <img src="/assets/images/corte2.png" alt="" />
          <img src="/assets/images/corte3.png" alt="" />
          <img src="/assets/images/corte1.png" alt="" />
        </div>

        <div class="seta2">
          <button><img src="/assets/images/arrow.svg" alt="" /></button>
        </div>
      </div>

      <div class="info">
        <div class="texto">.
          <div class="text2">
            Além de valorizar os seus melhores <br/>
            traços, o corte de cabelo certo pode <br/>
            ajudar a disfarçar as imperfeições. Ao <br/>
            mesmo tempo, ele também ajuda a dar <br/>
            a sensação de um rosto mais alongado <br/>
            ou mais largo, de acordo com a sua <br/>
            intenção.
          </div>

          <div class="text2">
            Por esse motivo o Leones tem preços a <br />
            partir de R$50.
          </div>
        </div>

        <div class="botao">
          <button>Agendar ida ao salão</button>
        </div>
      </div>
    </div>
            </Container>
            <Rodape/>
        
    </div>
    )

}