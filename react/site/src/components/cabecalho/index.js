
import { Link } from 'react-router-dom'
import { Cabecalho } from './styled'


export default function Cabecalhooo() {
    
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
                    <div className="imagem-cab2"> <img src="/assets/images/fotousu.png" alt=""  /> </div>
                </div>
            </Cabecalho> 
                 
    )
}