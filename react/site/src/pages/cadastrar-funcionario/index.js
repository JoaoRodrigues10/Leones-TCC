import { Container } from "./styled"
import CabecalhoImagem from '../../components/img-cabecalho'
import Rodape from '../../components/rodape'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

import Api from '../../services/api'
const api = new Api();

export default function CadrastoFun() {
  const navigation = useHistory();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    let b = await api.login(nome, cargo, email, telefone, senha)
    if (b.erro) {
      toast.error(`${b.erro}`)

    } else {
      Cookies.set('usuario-logado', JSON.stringify(b));
      navigation.push('/home')
    }
  }


  return (
    <Container>
    <ToastContainer/>
      <div class="box">
      <CabecalhoImagem/>
      <div class="container">

        <div class="inscreva-se">
          <div class="titulo"> <h1>Cadastrar funcionário</h1> </div>
          <div class="faixa2">
            <div class="f2-nome">
              <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
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

        <div class="botao">
         <button onClick={logar}>ENTRAR</button>
        </div>
      </div>
    </div>
    <Rodape/>

    </Container>
    
  )
}
    
  