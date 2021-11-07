
import { Link } from 'react-router-dom'
import { Cabecalho } from './styled'
import Cookies from 'js-cookie'
// import { useState } from 'react'
import { useHistory } from 'react-router-dom';


export default function Cabecalhooo() {
    // const [logado, setLogado] = useState(false)
    const nav = useHistory()

    const logoof = () => {
        Cookies.remove('usuario-logado')
        nav.push('/')
    }

    // const logadoOUnao = () => {
       
    //     let usuarioLogado = Cookies.get('usuario-logado')
    //     if (usuarioLogado == null) {
    //         setLogado(false)
    //     } else {
    //         setLogado(true);
    //     }
    // }

    return (
            <Cabecalho>
                <div className="logo-cab">
                    <div className="imagem-cab"> <img src="/assets/images/logo.png" alt="" /> </div>
                </div>
                <div className="paginas-cab">
                <Link to="/home"> <div className="opcoes" > Home </div> </Link>
                <Link to="/serviços"> <div className="opcoes"> Serviços </div> </Link>         
                <Link to="/home"> <div className="opcoes"> LEO </div> </Link>     
                </div>
                <div>
                    
                        
                            <Link to="/entrar"><button onClick={logoof}>SAIR</button> </Link>
                        

                    
                    <Link to="/meuPerfil"><div className="imagem-cab2"> <img src="/assets/images/fotousu.png" alt=""  /> </div></Link>
                </div>
            </Cabecalho> 
                 
    )
}