import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig"

export default function ManicureMas() {
	return (
        <div>
            <Cabecalho/>
            <Container>
                <div class="faixa">
                <div class="titulo">
                    MANICURE E PEDICURE
                </div>

                <div className="carrosel">
                      <Carousel 
                        responsive={CarouselConfig}
                        infinite={true}
                        >
                                
            
                                <div class="cabelo">
                                  <img src="./assets/images/manicure2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure3.png" alt="" />
                                </div>

                                
                        </Carousel>
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
                    <Link to="/calendario">
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