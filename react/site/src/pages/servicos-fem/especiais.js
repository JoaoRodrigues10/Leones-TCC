import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react"
import { CarouselConfig } from "./carouselconfig";

export default function Penteados() {
    const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Especiais"
    })
  }, []);

    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
               Serviços {servico.nome}
            </div>

                <div className="carrosel">

                    <Carousel 
                    responsive={CarouselConfig}
                    infinite={true}
                    showDots={true}
                    >
                                
                                

                                <div class="cabelo">
                                    <img src="./assets/images/especiais3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/especiais.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/especiais2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spa2.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spa.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spa3.jpg" alt="" />
                                </div>

                                
                        </Carousel>
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