import { Container } from "./styled"
import Rodape from '../../components/rodape'

export default function CadrastoFun() {
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
          <div class="titulo"> <h1>Inscreva-se Funcionário</h1> </div>
          <div class="faixa2">
            <div class="f2-nome">
              <input type="text" placeholder="Nome" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Cargo" />
            </div>
            <div class="f2-nome">
              <input type="text"  placeholder="Email" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Telefone" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Senha" />
            </div>
          </div>
        </div>

        <div class="botao">
         <button>ENTRAR</button>
        </div>
      </div>
    </div>
    <Rodape/>

    </Container>
    
  )
}
    
  