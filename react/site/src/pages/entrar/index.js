import { Container } from "./styled"
import CabecalhoImagem from '../../components/img-cabecalho'
import Rodape from '../../components/rodape'
import { Link } from 'react-router-dom'


import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'

import Api from '../../services/api'
const api = new Api();


export default function Entrarr(props) {
  const navigation = useHistory();

  const [emailOuTelefone, setEmailOuTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    let b = await api.login(emailOuTelefone, senha)
    if (b.erro) {
      toast.error(`${b.erro}`)

    } else {
      Cookies.set('usuario-logado', JSON.stringify(b));
      navigation.push('/')
    }
  }

  return (
    <Container>
    <ToastContainer/>
      <div class="box">
      <CabecalhoImagem/>
        <div class="container">
       
        <div class="inscreva-se">
          <div class="titulo"> <h1>Entrar</h1> </div>
          <div class="faixa2">
            <div class="f2-nome">
              <input type="text" placeholder="E-mail ou telefone" value={emailOuTelefone} onChange={e => setEmailOuTelefone(e.target.value)} />
            </div>
            <div class="f2-nome">
              <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
            </div>
          </div>
        </div>

        <div class="botao">
            <button onClick={logar}>ENTRAR</button>
        </div>

          <div className="text">
            <div className="entrar"> Não tem login? <Link to="/inscreva-se"> <b> Inscreva-se </b> </Link> </div>
            <div className="entrar"> <Link to="/recuperacao"> <b> Esqueci minha senha </b> </Link> </div>
          </div>
        </div>
      </div>
    <Rodape/>
 
    </Container>

  )
}
    
