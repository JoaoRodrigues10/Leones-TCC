import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import { CarouselConfig } from "./carouselconfig"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react"

export default function Tratamentos() {
    const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Tratamento Capilar"
    })
  }, []);
    return(
    <div>
        <Cabecalho/>
        <ContainerCortes>
            <div class="faixa">
                <div class="titulo">
                    TRATAMENTO CAPILAR 
                </div>

                <div className="carrosel">

                        <Carousel 
                        responsive={CarouselConfig}
                        infinite={true}
                        >
                                
                                

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento4.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento5.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento6.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento7.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/tratamento8.png" alt="" />
                                </div>

                                
                        </Carousel>
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
                <Link to={{
                 pathname: '/calendario',
                 state: servico
                 }}>              
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