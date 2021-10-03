import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Link } from "react-router-dom"

export default function aprovacao() {
    return (
        <div>
            <Cabecalho/>
        <Container>
        <div class="aprovacao">
        <div class="eba">EBAAA!</div>
        <div class="avaliacao">
            Sua avaliação foi marcada! <br />
            Te esperamos aqui!
        </div>
        <div class="imprevisto">
            Caso ocorra algum imprevisto entre <br />
            no seu perfil e remarque ou desmarque.
        </div>
        <div class="remarcar">
            Poderá remarcar ou desmarcar seu horário com <br />
            até 5 horas de antecedêndia, sem custo, <br />
            após isso será cobrado o valor do serviço.
        </div>
        </div>
        </Container>
        <Rodape/>
        </div>
    )
}