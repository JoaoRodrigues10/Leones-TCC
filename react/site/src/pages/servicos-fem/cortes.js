import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function Cortes() {
    return(
        <div>
            <Cabecalho/>



                <ContainerCortes>
                            <div class="faixa">
                    <div class="titulo">
                        CORTES
                    </div>

                    <Carousel responsive={responsive}>
                        <div class="slider">
                        

                            <div class="cabelo">
                            <img src="/assets/images/cabelo3.png" alt="" />
                            <img src="/assets/images/cabelo2.png" alt="" />
                            <img src="/assets/images/cabelo4.png" alt="" />
                            </div>

                            
                        </div>
                    </Carousel>                                   

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
                        <button>Agendar ida ao salão</button>
                        </div>
                    </div>
                    </div>
                </ContainerCortes>
                <Rodape/>
        </div>
    )
}