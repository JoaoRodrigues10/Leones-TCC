import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"

export default function servicos() {
    return (
        <div>
            <Cabecalho />
        <Container>
            <div class="confirmar-horario">
                <div class="antes">
                    Antes que possamos fazer algo <br />
                    precisamos te conhecer.
                </div>
                <div class="avaliacao">
                    Por isso vamos conversar e avaliar <br />
                    o que será melhor para você.
                </div>
                <div class="confirmar">
                    Confirmar avaliação às 9:30? 
                </div>
                <div class="botoes">
                    <button class="botaoS">SIM</button>
                    <button class="botaoN">NÃO</button>
                </div>
            </div>
        </Container>
        </div>
    )  
}