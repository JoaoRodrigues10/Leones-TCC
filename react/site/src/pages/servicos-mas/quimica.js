import { Container } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig";
import { useEffect, useState } from "react"

import Cookies from 'js-cookie'
import { useHistory } from "react-router";

export default function ServicosMas() {

    const [servico, setServico] = useState([])

    useEffect(() => {
        setServico({
        nome: "Químicas em geral",
        id: 5
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
                                  <img src="./assets/images/quimicamasc.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/quimicamasc2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/quimicamasc3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/qim.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/qim2.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/qim3.jpg" alt="" />
                                </div>

                                
                        </Carousel>
                </div>

                <div class="info">
                    <div class="texto">.
                    <div class="text2">
                        Fazer algo diferente pode ser essencial, <br />
                        muda faz parte da vida.
                    </div>

                    <div class="text2">
                        Por esse motivo o Leones tem preços a  <br />
                        partir de R$150.
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