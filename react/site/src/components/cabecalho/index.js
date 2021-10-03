
import { Link } from 'react-router-dom'
import { Cabecalho } from './styled'


export default function Cabecalhooo() {
    
    return (
            <Cabecalho>
                <div className="logo-cab">
                    <div className="imagem-cab"> <img src="/assets/images/logo.png" alt="" /> </div>
                </div>
                <div className="paginas-cab">
                <Link to="/"> <div className="opcoes" > Home </div> </Link>
                <Link to="/serviçosmas"> <div className="opcoes"> Serviços </div> </Link>    
                <Link to="/calendario">  <div className="opcoes"> Reservas </div> </Link>     
                <Link to="/"> <div className="opcoes"> LEO </div> </Link>     
                </div>
                <div>
                    <div className="imagem-cab2"> <img src="/assets/images/fotousu.png" alt=""  /> </div>
                </div>
            </Cabecalho> 
                 
    )
}