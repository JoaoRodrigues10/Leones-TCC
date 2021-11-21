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
    const { horas, dia, nomeser, idagen } = props.location.state
    
    let usuarioLogado = lerUsuarioLogado() || {} ;
    const [usu] = useState(usuarioLogado.id_cliente)
    const [diaconsulta] = useState(dia.toISOString().substr(0, 10) + ' ' + horas + ':00')
    const [situacao] = useState('Em análise')
    
    

    const marcarHorario = async () => {
        let b = await api.AlterarAgendamento(idagen, diaconsulta, situacao)
        if (b.erro) {
            toast.error(`${b.erro}`)
          } 
        else {
            navigation.push('/aprovacao')
          }
          console.log(idagen)
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
                    Confirmar a alteração do serviço {nomeser} para dia {dia.toLocaleDateString()} às {horas.toString()}? 
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