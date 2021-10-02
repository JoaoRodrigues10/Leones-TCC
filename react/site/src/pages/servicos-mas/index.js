import { ServicosMascu } from "./styled";
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom";


export default function ServicosMas() {
    return (
        <div>
        <Cabecalho/>
        <ServicosMascu>
        <div class="botoes">
        <div class="botao">
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/cortesmas">
          <div class="titulo">
            CORTES
          </div>
          </Link> 

          <ul class="serv">
            <li> Navalha </li>
            <li> Tesoura </li>
            <li> Máquina </li>
          </ul>
        </div>

        <div class="botao">
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/pigmentacaomas">
          <div class="titulo">
            PIGMENTAÇÃO
          </div>
          </Link>

          <ul class="serv">
            <li> Barba </li>
            <li> Cabelo </li>
          </ul>
        </div>

        <div class="botao">
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/tratamentosmas">
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
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/quimicamas">
          <div class="titulo">
            QUÍMICAS EM <br />
            GERAL
          </div>
          </Link>

          <ul class="serv">
            <li> Coloração </li>
            <li> Reflexos </li>
            <li> Relaxamento </li>
            <li> Desondulação </li>
          </ul>
        </div>

        <div class="botao">
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/serviçosespeciaismas"> 
          <div class="titulo">
            SERVIÇOS <br />
            ESPECIAIS
          </div>
          </Link>

          <ul class="serv">
            <li> Mega Hair </li>
            <li> Micropigmentação <br/> sobrancelha </li>
            <li> Barboterapia </li>
          </ul>
        </div>

        <div class="botao">
          <button>
            <img src="/assets/images/masculino.png" alt="" />
          </button>

          <Link to="/manicure e pedicure masculino"> 
          <div class="titulo">
            MANICURE E <br/>
            PEDICURE
          </div>
          </Link>

          <ul class="serv">
            <li>Cutilagem</li>
          </ul>
        </div>
      </div>
        </ServicosMascu >
        <Rodape/>
    </div>
    )

}