import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"

export default function ServicosFem() {
    return (
        <div>
            <Cabecalho/>
        <Container>
            <div class="faixa1">
        <div class="botoes">
            <div class="botao">
                <Link to="/cortes">
                    <button>
                        <img src="/assets/images/feminino.png" alt="" />
                    </button>
                </Link>

            <Link to="/cortes"><div class="titulo"> CORTES </div> </Link>

            <ul class="serv">
                <li> Como você <br /> desejar </li>
            </ul>
            </div>

            <div class="botao">
            <Link to="/penteados">
                <button>
                    <img src="/assets/images/feminino.png" alt="" />
                </button>
            </Link>

            <Link to="/penteados">
                <div class="titulo"> PENTEADOS</div>
            </Link>

            <ul class="serv">
                <li> Como você <br /> desejar </li>
            </ul>
            </div>

            <div class="botao">
            <Link to="/tratamentos">
                <button>
                    <img src="/assets/images/feminino.png" alt="" />
                </button>
            </Link>

            <Link to="/tratamentos">
            <div class="titulo">
                TRATAMENTO <br />
                CAPILAR
            </div>
            </Link>

            <ul class="serv">
                <li> Hidratação </li>
                <li> Nutrição </li>
                <li> Reconstrução </li>
            </ul>
            </div>
        </div>

        <div class="botoes">
            <div class="botao">
            <Link to="/quimicas">
                <button>
                    <img src="/assets/images/feminino.png" alt="" />
                </button>
            </Link>

            <Link to="/quimicas">
            <div class="titulo">
                QUÍMICAS EM <br />
                GERAL
            </div>
            </Link>

            <ul class="serv">
                <li> Coloração </li>
                <li> Luzes </li>
                <li> Reflexos </li>
                <li> Progressiva </li>
            </ul>
            </div>

            <div class="botao">
            <Link to="/serviçosespeciais">
                <button>
                    <img src="/assets/images/feminino.png" alt="" />
                </button>
            </Link>

            <Link to="/serviçosespeciais">
            <div class="titulo">
                SERVIÇOS <br />
                ESPECIAIS
            </div>
            </Link>
            

            <ul class="serv">
                <li> Mega Hair </li>
                <li> Micropigmentação <br /> sobrancelha </li>
                <li> Spa </li>
            </ul>
            </div>

            <div class="botao">
            <Link to="/manicure e pedicure">
                <button>
                    <img src="/assets/images/feminino.png" alt="" />
                </button>
            </Link>


            <Link to="/manicure e pedicure">
            <div class="titulo">
                MANICURE E <br />
                PEDICURE
            </div>
            </Link>
            

            <ul class="serv">
                <li>Alongamento</li>
                <li>Cutilagem</li>
                <li>Banho de gel</li>
                <li>Esmaltação</li>
            </ul>
            </div>
        </div>
        </div>
        </Container>
        <Rodape/>
        </div>
    )
}