import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig";

export default function Penteados() {
    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
                    <div class="faixa">
            <div class="titulo">
                PENTEADOS
            </div>

            <div className="carrosel">

                    <Carousel 
                    responsive={CarouselConfig}
                    infinite={true}
                    >
                            
                            

                            <div class="cabelo">
                                <img src="./assets/images/penteado1.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado2.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado3.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado3.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado3.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado3.png" alt="" />
                            </div>

                            
                    </Carousel>
             </div>

            <div class="info">
                <div class="texto">.
                <div class="text2">
                    Penteados dos mais básicos aos mais <br />
                    sofisticados, para você nunca mais ficar <br />
                    sem inspirações na hora que aparecer <br />
                    um casamento ou outra festa <br />
                    importante.
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