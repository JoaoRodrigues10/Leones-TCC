import { Container } from "./styled"
import { Link } from "react-router-dom"
import Rodape from '../../components/rodape'


export default function Entrarr() {
  return (
    <Container>
      <div class="box">
      <div class="container">
        <div class="faixa1">
          <div class="f1-logo">
            <img src="/assets/images/logo.png" alt="" /> 
          </div>
        </div>

        <div class="inscreva-se">
          <div class="titulo"> <h1>Entrar</h1> </div>
          <div class="faixa2">
            <div class="f2-nome">
              <input type="text" placeholder="E-mail ou telefone" />
            </div>
            <div class="f2-nome">
              <input type="password" placeholder="Senha" />
            </div>
          </div>
        </div>

        <div class="botao">
          <Link to="/home">
            <button>ENTRAR</button>
          </Link>
        </div>
      </div>
    </div>

    <Rodape/>
 
    </Container>



  )
}
    
