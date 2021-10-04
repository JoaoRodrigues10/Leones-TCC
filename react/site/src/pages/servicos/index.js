import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"

export default function ServicosFem() {
    return (
        <div>
            <Cabecalho/>
        <Container>
        <div class="geral">
        <div class="servicos">
        <div class="boas-vindas">
            Olá! Seja bem-vindo(a) <br />
            a Leones Studio!
        </div>
        <div className="boas-vindas2">
            Qual tipo de serviço você procura?
        </div>
        <div class="botoes">
        <Link to="/serviçosfem"><button class="botaoF">Feminino</button> </Link>
        <Link to="/serviçosmas"><button class="botaoM">Masculino</button> </Link>
        </div>
        
        </div>
        
        </div>
        </Container>
        <Rodape/>
        </div>
    )
}