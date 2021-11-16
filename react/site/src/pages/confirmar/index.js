import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../services/api'
const api = new Api();

function lerUsuarioLogado() {
    let logado = Cookies.get('usuario-logado');
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

function geradorDeNumeros(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
 
export default function Servicos(props) {
    const navigation = useHistory();
    const { horas, dia, nomeser } = props.location.state
    
    let usuarioLogado = lerUsuarioLogado() || {} ;
    const [usu] = useState(usuarioLogado.id_cliente)
    const [diaconsulta] = useState(dia.toISOString().substr(0, 10) + ' ' + horas + ':00')
    const [nomeserID] = useState(nomeser.id)

    const [idfun] = useState(geradorDeNumeros(10, 14))
    
    

    const marcarHorario = async () => {
        let b = await api.InserirAgendamento(idfun, usu, nomeserID, diaconsulta)
        if (b.erro) {
            toast.error(`${b.erro}`)
      
          } else {
            navigation.push('/aprovacao')
          }
          console.log(b)
          console.log(idfun)
          console.log(usu)
          console.log(nomeserID)
          console.log(diaconsulta)
    }



    return (
        <div>
            <Cabecalho />
        <Container>
            <div class="confirmar-horario">
                <div class="antes">
                    Antes que possamos fazer algo <br />
                    precisamos te conhecer.
                </div>
                <div class="avaliacao">
                    Por isso vamos conversar e avaliar <br />
                    o que será melhor para você.
                </div>
                <div class="confirmar">
                    Confirmar avaliação para dia {dia.toLocaleDateString()} às {horas.toString()}? 
                </div>
                <div class="botoes">
                   <button onClick={marcarHorario} class="botaoS">SIM</button>
                   <Link to="/"><button class="botaoN">NÃO</button> </Link>
                </div>
            </div>
            <Rodape/>
        </Container>
        </div>
    )  
}