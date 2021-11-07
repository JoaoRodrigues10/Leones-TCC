import { ContainerCortes } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cookies from 'js-cookie'
import { useHistory } from "react-router";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { CarouselConfig } from "./carouselconfig";


export default function Cortes() {
  const [servico, setServico] = useState([])

  useEffect(() => {
    setServico({
      nome: "Cortes"
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
                          <img src="/assets/images/cabelo3.png" alt="" />
                          </div>

                          <div class="cabelo">
                        <img src="/assets/images/cabelo2.png" alt="" />
                        </div>

                        <div class="cabelo">
                        <img src="/assets/images/corte1.jpg" alt="" />
                        </div>

                        <div class="cabelo">
                        <img src="/assets/images/cabelo4.png" alt="" />
                        </div>

                        <div class="cabelo">
                        <img src="/assets/images/corte2.jpg" alt="" />
                        </div>

                        <div class="cabelo">
                        <img src="/assets/images/corte3.jpg" alt="" />
                        </div>

                        </Carousel>
              </div>           

                    <div class="info">
                        <div class="texto">.
                        <div class="text2">
                            Um bom corte de cabelo é essencial <br />
                            para que o rosto tenha harmonia. Além <br />
                            de acentuar os traços do rosto e <br />
                            revelar um pouco da personalidade de <br />
                            cada mulher, o corte também tem forte <br />
                            influência na beleza do rosto.
                        </div>

                        <div class="text2">
                            Por esse motivo o Leones tem preços a <br />
                            partir de R$100.
                        </div>
                        </div>

                        <div class="botao" onClick={logadoouNao}>
                        <Link to={{
                          pathname: '/calendario',
                          state: servico
                        }}>
                        <button >Agendar ida ao salão</button>
                        </Link>
                        </div>
                    </div>
                    </div>
                </ContainerCortes>
                <Rodape/>
        </div>
    )
}