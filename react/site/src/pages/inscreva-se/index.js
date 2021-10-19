import { Container } from './styled'
import CabecalhoImagem from '../../components/img-cabecalho'
import Rodape from '../../components/rodape'

export default function InscreverFun() {
  return (
    <Container>
        <div class="box">
          <div class="container"></div>
          <CabecalhoImagem/>
      
          <div class="inscreva-se">
            <div class="titulo"> <h1>Inscreva-se</h1> </div>
            <div class="faixa2">
              <div class="f2-nome">
                <input type="text" placeholder="Nome" />
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
          </div>

        <div class="botao">
          <a href="#">INSCREVER-SE</a>
        </div>

        <div class="inscreva-se">
          <div class="cadrastro">Já tem cadastro? Faça o LOGIN</div>
        </div>

    <Rodape/>

    </Container>
    
  )
}
    
  