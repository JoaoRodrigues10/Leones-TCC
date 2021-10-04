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
            Olá! Seja bem-vindo(a) a <br />
            Leones Studio! <br />
            Qual tipo de serviço você procura?
        </div>
        </div>
        <div class="botoes">
        <Link to="/serviçosfem"><button class="botaoF">Feminino</button> </Link>
        <Link to="/serviçosmas"><button class="botaoM">Masculino</button> </Link>
        </div>
        </div>
        </Container>
        <Rodape/>
        </div>
    )
}