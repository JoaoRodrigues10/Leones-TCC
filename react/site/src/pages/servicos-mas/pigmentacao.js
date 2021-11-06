import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig"
import { useEffect, useState } from "react"


export default function Pigmentacao() {

    const [servico, setServico] = useState([])

    useEffect(() => {
        setServico({
        nome: "Pigmentação"
        })
    }, []);

	return (
        <div>
            <Cabecalho/>
            <Container>
                <div class="faixa">
                <div class="titulo">
                    {servico.nome}
                </div>

                <div className="carrosel">
                      <Carousel 
                        responsive={CarouselConfig}
                        infinite={true}
                        showDots={true}
                        >
                                
            
                                <div class="cabelo">
                                  <img src="./assets/images/pig3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/pig.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/pig2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/pig7.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/pig8.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/pig9.jpg" alt="" />
                                </div>

                                
                        </Carousel>
                </div>

                <div class="info">
                    <div class="texto">.
                    <div class="text2">
                        Indicada para quem tem calvície <br/>
                        avançada ou pequenas falhadas no <br/>
                        couro cabeludo, a pigmentação capilar <br/>
                        é o procedimento ideal para quem <br/>
                        busca dar mais volume e densidade <br/>
                        aos cabelos.
                    </div>

                    <div class="text2">
                        Por esse motivo o Leones tem preços a <br />
                        partir de R$100.
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
            </Container>
            <Rodape/>
        </div>
    )
}