
import { Link } from 'react-router-dom'
import { Cabecalho } from './styled'


export default function Cabecalhooo() {
    
    return (
            <Cabecalho>
                <div className="logo-cab">
                    <div className="imagem-cab"> <img src="/assets/images/logo.png" alt="" /> </div>
                </div>
                <div className="paginas-cab">
                    <div className="opcoes" onClick={<Link to="/calendario" />}> Home </div> 
                    <div className="opcoes"> Serviços </div>
                    <div className="opcoes"> Reservas </div>
                    <div className="opcoes"> LEO </div>
                </div>
                <div>
                    <div className="imagem-cab2"> <img src="/assets/images/fotousu.png" alt=""  /> </div>
                </div>
            </Cabecalho> 
                 
    )
}