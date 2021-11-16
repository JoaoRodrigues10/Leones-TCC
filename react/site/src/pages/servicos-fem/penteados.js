import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router'
import { useEffect, useState } from "react"
import { CarouselConfig } from "./carouselconfig";

export default function Penteados() {
    const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Penteados",
      id: 3
    })
  }, []);

  const navegation = useHistory()

  async function logadoouNao(){
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
                                <img src="./assets/images/penteado1.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado2.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/penteado3.png" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/coque1.jpg" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/coque12.jpg" alt="" />
                            </div>

                            <div class="cabelo">
                                <img src="./assets/images/coque3.jpg" alt="" />
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