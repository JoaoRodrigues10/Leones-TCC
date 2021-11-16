import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CarouselConfig } from "./carouselconfig";
import { useEffect, useState } from "react"

import Cookies from 'js-cookie'
import { useHistory } from "react-router";

export default function Quimicas() {
    const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Químicas em Geral",
      id: 5
    })
  }, []);

  const navegation = useHistory()
  

    async function logadoouNao () {
      let usuarioLogado = Cookies.get('usuario-logado')
      if(usuarioLogado == null)
      navegation.push('/entrar')
      
  }

    return(
        <div>
        <Cabecalho/>
        <ContainerCortes>
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
                                <img src="./assets/images/quimica2.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/quimica.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/quimica3.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/desc.jpg" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/desc2.jpg" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/desc3.jpg" alt="" />
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
                    partir de R$350.
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
        </ContainerCortes>
        <Rodape/>
        </div>
    )
}