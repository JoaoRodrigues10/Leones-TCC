import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cookies from 'js-cookie'
import { useHistory } from "react-router";
import { CarouselConfig } from "./carouselconfig";
import { useEffect, useState } from "react"

export default function Penteados() {
    const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Manicure e Pedicure",
      id: 7
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
                                    <img src="./assets/images/unha.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/unha2.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/unharoxa.png.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/unha3.png" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/unhabranca.jpg" alt="" />
                                </div>

                                <div class="cabelo">
                                    <img src="./assets/images/maobranca.jpg" alt="" />
                                </div>

                                
                        </Carousel>
                </div>
            

            <div class="info">
                <div class="texto">.
                <div class="text2">
                Ter as nossas unhas saud??veis e <br />
                bonitas ?? muito importante, pois <br />
                quando cuidamos de n??s mesmas isso <br />
                faz nossa autoestima crescer ainda <br />
                mais, e lembre-se procure sempre <br />
                manicure e pedicure profissionais, pois <br /> 
                s??o esses que saber??o cuidar das <br />
                nossas unhas da maneira correta.
                </div>

                <div class="text2">
                    Por esse motivo o Leones tem pre??os a  <br />
                    partir de R$40.
                </div>
                </div>

                <div class="botao" onClick={logadoouNao}>
                <Link to={{
                          pathname: '/calendario',
                          state: servico
                        }}>
                        <button>Agendar ida ao sal??o</button>
                        </Link>
                </div>
            </div>
            </div>
        </ContainerCortes>
        <Rodape/>
        </div>
    )
}