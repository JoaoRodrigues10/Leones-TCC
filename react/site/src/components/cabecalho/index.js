
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



export default function Cabecalhooo() {
    const [logado, setLogado] = useState(false)
    const nav = useHistory()

    
    function logadoOUnao() {
       
        let usuarioLogado = Cookies.get('usuario-logado')
        if (usuarioLogado == null) {
            setLogado(false)
        } else {
            setLogado(true);
        }
    }

    useEffect(logadoOUnao, []);


    async function sairdaConta() {
        confirmAlert({
            title: 'Deseja Sair ?',
            message: `Tem certeza que deseja sair de sua conta ?`,
            buttons: [
              {
                label: 'Sim', 
                onClick: async () => {
                    Cookies.remove('usuario-logado'); 
                    toast.dark('Até a proxima ')
                    nav.push('/entrar')
                        
                    
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
                <Link to="/home"> <div className="opcoes" > Home </div> </Link>
                <Link to="/serviços"> <div className="opcoes"> Serviços </div> </Link>         
                <Link to="/home"> <div className="opcoes"> LEO </div> </Link>     
                </div>
                <div className="ft" >
                    {logado &&
                        <button onClick={() => sairdaConta()}> <img src="/assets/images/porta.svg" alt="" /> </button> 
                    }
                        
        
                        

                    
                    <Link to="/meuPerfil"><div className="imagem-cab2"> <img src="/assets/images/fotousu.png" alt=""  /> </div></Link>
                </div>
            </Cabecalho> 
            </div>
                 
    )
}