import { Container } from './styled'
import CabecalhoImagem from '../../components/img-cabecalho'
import Rodape from '../../components/rodape'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { useState } from 'react'

import Api from '../../services/api'
const api = new Api()


export default function InscreverFun() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useHistory();

  const criarConta = async () => {
    let r = await api.InserirCliente(nome, email, telefone, senha)
    if (r.erro)
    toast.error(`❌ ${r.erro}`)
    else { 
    toast.dark('✔️ Sua Conta Foi Criada com Sucesso');
    navigation.push('/login')
    }
  }
  
  return (
    <Container>
      <ToastContainer/>
      <div class="box">
      <CabecalhoImagem/>
      <div class="container">
      
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
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
              </div>
            </div>
          </div>

          <div class="botao">
            <button onClick={criarConta}>INSCREVER-SE</button>
          </div>

          <div class="inscreva-se">
            <div class="cadrastro">Já tem cadastro? Faça o  <Link to="/"> <a> login </a> </Link> </div>
          </div>
        </div>
      </div>

    <Rodape/>

    </Container>
    
  )
}
    
  