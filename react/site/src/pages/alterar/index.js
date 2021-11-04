import { Container } from "./styled";
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape"

export default function alterar(){
    return(
        <div>
            <Cabecalho/>
                <Container>
                    <div className="Container">
                        <div className="Box-1">
                            <h1> Editar Agendamento </h1>
                            <hr></hr>
                        </div>
                        <div className="Box-2">
                            <div className="Informacoes">
                                <h1> Informações </h1>
                                <ul>
                                    <li> Nome do cliente </li>
                                    <li> Qual serviço será realizado </li>
                                    <li> Data que será marcado </li>
                                    <li> Valor a ser pago </li>
                                </ul>
                            </div>
                            <div className="Alterar">
                                <h1> Alterar </h1>
                                <div className="Alterar-Horario">Horario: <input></input></div>
                                <div className="Botao-alterar"><button> Atualizar </button></div> 
                            </div>
                        </div>
                    </div>
                </Container>
            <Rodape/>    
        </div>
    )
}