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


export default function EspeciaisMas() {

    const [servico, setServico] = useState([])

    useEffect(() => {
        setServico({
        nome: "Especiais"
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
                   Serviços {servico.nome}
                </div>

                <div className="carrosel">
                      <Carousel 
                        responsive={CarouselConfig}
                        infinite={true}
                        showDots={true}
                        >
                                
            
                                <div class="cabelo">
                                  <img src="./assets/images/especiaismasc.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/especiaismasc2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/especiais2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spamasc.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spamasc2.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/spamasc3.jpg" alt="" />
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