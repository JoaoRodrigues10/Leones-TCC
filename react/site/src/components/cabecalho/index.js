
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
    const [logadoUsu, setLogadoUsu] = useState(false)
    const [logadoFunc, setLogadoFunc] = useState(false)
    const navigation = useHistory()
    let usuarioLogado = lerUsuarioLogado(navigation) || {} ;
    const [imgusu] = useState(usuarioLogado.img_cliente)
    const [imgfunc] = useState(usuarioLogado.img_funcionario)
    const [usu] = useState(`https://leones20.herokuapp.com/imagemPerfil?imagem=${imgusu}`)
    const [usufuncionario] = useState(`https://leones20.herokuapp.com/imagemPerfil?imagem=${imgfunc}`)

    
    function logadoOUnao() {
       
        let usuarioLogado = Cookies.get('usuario-logado')
        if (usuarioLogado == null) {
            setLogado(false)
        } else {
            setLogado(true);
        }
    }

    function logadoUSU() {
        
        if (imgusu == null) {
            setLogadoUsu(false)
        } else {
            setLogadoUsu(true);
        }
    }
    function logadoFUNC() {
        if (imgfunc == null) {
            setLogadoFunc(false)
        } else {
            setLogadoFunc(true);
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
    useEffect(logadoUSU, []);
    useEffect(logadoFUNC, []);



    async function sairdaConta() {
        confirmAlert({
            title: 'Deseja sair?',
            message: `Tem certeza que deseja sair de sua conta?`,
            buttons: [
              {
                label: 'Sim', 
                onClick: async () => {
                    Cookies.remove('usuario-logado'); 
                    toast.dark('???? At?? a proxima!')
                    navigation.push('/entrar')
                        
                    
                }  
              },
              {
                label: 'N??o'
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
                    <Link to="/servi??os"> <div className="opcoes"> Servi??os </div> </Link>              
                </div>
               
                {logado &&
                    <div className="ft" >
                        

                        
                        <div className="imagem-cab2"> 
                        {logadoUsu &&
                           <Link to="/meuPerfil">
                           <img src={usu} alt=""  /> 
                           </Link>
                        }
                        {logadoFunc &&
                           <Link to="/perfilFuncionario">
                           <img src={usufuncionario} alt=""  /> 
                           </Link>
                        }
                        
                            
                        </div>
                        
                             
                        <button onClick={() => sairdaConta()}> Sair </button> 
                        
                    </div>
                }

                {naologado &&
                
                    <div className="login">
                         <Link to="/entrar"> <button> Fazer login  </button> </Link>
                    </div>

                }
                
            </Cabecalho> 
        </div>
                 
    )
}