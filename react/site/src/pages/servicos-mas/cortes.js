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

export default function CortesMas() {

  const [servico, setServico] = useState([])

    useEffect(() => {
        setServico({
        nome: "Cortes",
        id: 2
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
                                  <img src="./assets/images/corte2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/corte3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/corte1.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/corte4.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/corte5.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/corte6.jpg" alt="" />
                                </div>

                                
                        </Carousel>
                </div>

      <div class="info">
        <div class="texto">.
          <div class="text2">
            Al??m de valorizar os seus melhores <br/>
            tra??os, o corte de cabelo certo pode <br/>
            ajudar a disfar??ar as imperfei????es. Ao <br/>
            mesmo tempo, ele tamb??m ajuda a dar <br/>
            a sensa????o de um rosto mais alongado <br/>
            ou mais largo, de acordo com a sua <br/>
            inten????o.
          </div>

          <div class="text2">
            Por esse motivo o Leones tem pre??os a <br />
            partir de R$50.
          </div>
        </div>

        <div class="botao" onClick={logadoouNao}  >
        <Link to={{
                          pathname: '/calendario',
                          state: servico
                        }}>
                        <button>Agendar ida ao sal??o</button>
                        </Link>
        </div>
      </div>
    </div>
            </Container>
            <Rodape/>
        
    </div>
    )

}