import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig"
import { useEffect, useState } from "react"

import Cookies from 'js-cookie'
import { useHistory } from "react-router";

export default function ManicureMas() {

    const [servico, setServico] = useState([])

    useEffect(() => {
        setServico({
        nome: "Manicure e Pedicure"
        })
    }, []);

    const navegation = useHistory()
  

    async function logadoouNao () {
      let usuarioLogado = Cookies.get('usuario-logado')
      if(usuarioLogado == null)
      navegation.push('/entrar')
      
  }

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
                                  <img src="./assets/images/manicure2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/manicure.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/mao3.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/mao.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/mao2.jpg" alt="" />
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

                    <div class="botao" onClick={logadoouNao}>
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