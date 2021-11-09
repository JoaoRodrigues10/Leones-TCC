
import { Link } from 'react-router-dom'
import { Cabecalho } from './styled'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado');
    if ( logado == null){
        return null;
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function Cabecalhooo() {
    const [logado, setLogado] = useState(false)
    const [naologado, setNao] = useState(false)
    const navigation = useHistory()
    let usuarioLogado = lerUsuarioLogado(navigation) || {} ;
    const [usu] = useState(usuarioLogado.img_cliente)
    const [usufuncionario] = useState(usuarioLogado.img_funcionario)

    
    function logadoOUnao() {
       
        let usuarioLogado = Cookies.get('usuario-logado')
        if (usuarioLogado == null) {
            setLogado(false)
        } else {
            setLogado(true);
        }
    }

    function naoLogado(){
        let usuarioLogado = Cookies.get('usuario-logado')
        if (usuarioLogado == null) {
            setNao(true)
        } else {
            setNao(false);
        }
    }
    

    useEffect(logadoOUnao, []);
    useEffect(naoLogado, []);



    async function sairdaConta() {
        confirmAlert({
            title: 'Deseja sair?',
            message: `Tem certeza que deseja sair de sua conta?`,
            buttons: [
              {
                label: 'Sim', 
                onClick: async () => {
                    Cookies.remove('usuario-logado'); 
                    toast.dark('👋 Até a proxima!')
                    navigation.push('/entrar')
                        
                    
                }  
              },
              {
                label: 'Não'
              }
            ]
        });
    }
    

    return (
        <div>
            <ToastContainer />
            <Cabecalho>
                
                <div className="logo-cab">
                    <div className="imagem-cab"> <img src="/assets/images/logo.png" alt="" /> </div>
                </div>
                <div className="paginas-cab">
                    <Link to="/"> <div className="opcoes" > Home </div> </Link>
                    <Link to="/serviços"> <div className="opcoes"> Serviços </div> </Link>         
                    <Link to="/home"> <div className="opcoes"> LEO </div> </Link>     
                </div>
               
                {logado &&
                    <div className="ft" >
                        <Link to="/meuPerfil"><div className="imagem-cab2"> <img src={usu || usufuncionario} alt=""  /> </div></Link>
                        <button onClick={() => sairdaConta()}> <b> Sair </b>  </button> 
                    </div>
                }

                {naologado &&
                
                    <div className="login">
                         <Link to="/entrar"> <button> <b> Fazer login </b>  </button> </Link>
                    </div>

                }
                
            </Cabecalho> 
        </div>
                 
    )
}