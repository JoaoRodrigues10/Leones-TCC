import { Container } from './styled'
import CabecalhoImagem from '../../components/img-cabecalho'
import Rodape from '../../components/rodape'

import { useState } from 'react'

export default function InscreverFun() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  
  return (
    <Container>
        <div class="box">
          <div class="container"></div>
          <CabecalhoImagem/>
      
          <div class="inscreva-se">
            <div class="titulo"> <h1>Inscreva-se</h1> </div>
            <div class="faixa2">
              <div class="f2-nome">
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
              </div>
              <div class="f2-nome">
                <input type="text"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div class="f2-nome">
                <input type="text" placeholder="Telefone" value={telefone} onChange={e => setTelefone(e.target.value)} />
              </div>
              <div class="f2-nome">
                <input type="text" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
              </div>
            </div>
          </div>
          </div>

        <div class="botao">
          <button>INSCREVER-SE</button>
        </div>

        <div class="inscreva-se">
          <div class="cadrastro">Já tem cadastro? Faça o LOGIN</div>
        </div>

    <Rodape/>

    </Container>
    
  )
}
    
  