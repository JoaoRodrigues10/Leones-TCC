import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";

export default function meuPerfil(){
    return(
    <div>
    <Cabecalho/>
        <Container>
            <div className="containerperfil"> 
          
                <div className="faixa1">
                    <div className="fotoperfil"> <img src="/assets/images/perfil.jpg" alt="" /></div>
                    <div className="dadosperfil">
                        <div className="dados">Nome do Cliente</div>
                    </div>
                </div>
        
                <div className="faixa2"> 
                    <div className="textaviso">Avisos</div>
                    <div className="avisos">
                    <div className="avisotext">(11:21:22) Carlos desmarcou o serviço do dia xxxx as xxx horas</div>
                    <div className="avisotext">(11:21:22) Carlos Remarcou o serviço do dia xxxx as xxx para o dia xxxx as xxxx horas</div>
                    <div className="avisotext"><br></br></div>
                    <div className="avisotext"><br></br></div>
                    <div className="avisotext"><br></br></div>
                    <div className="avisotext"><br></br></div>
                    <div className="avisotext"><br></br></div>
                    
                    </div>
                </div>
        
                <div className="faixa3"> 
                    <div className="minhaagenda">Minha Agenda</div>
                    <table className="table-user">
                    <thead>
                        <tr>
                            <th> Id </th>
                            <th> Cliente </th>
                            <th> Serviço </th>
                            <th> Profissional </th>
                            <th> Horario Agenda </th>
                            <th className="a"> </th>
                            <th className="a"> </th>
                        </tr>
                        </thead>
        
                        <tbody>
                            <tr >
                                <td> 1 </td>
                                <td> Bruno</td>
                                <td> Pigmentação </td>
                                <td> Carlos </td>
                                <td> 10:10 10/10/2010 </td>
                                <td className="acao"> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                <td className="acao"> <button> <img src="/assets/images/delete.svg" alt="" /> </button></td>
                            </tr>
                        
                            <tr >
                                <td> 1 </td>
                                <td> Bruno</td>
                                <td> Pigmentação </td>
                                <td> Carlos </td>
                                <td> 10:10 10/10/2010 </td>
                                <td className="acao"> <button> <img src="/assets/images/edit.svg" alt=""/> </button> </td>
                                <td className="acao"> <button> <img src="/assets/images/delete.svg" alt=""/> </button></td>
                            </tr>
        
                            <tr >
                                <td> 1 </td>
                                <td> Bruno</td>
                                <td> Pigmentação </td>
                                <td> Carlos </td>
                                <td> 10:10 10/10/2010 </td>
                                <td className="acao"> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                <td className="acao"> <button> <img src="/assets/images/delete.svg" alt="" /> </button></td>
                            </tr>
        
                            <tr >
                                <td> 1 </td>
                                <td> Bruno</td>
                                <td> Pigmentação </td>
                                <td> Carlos </td>
                                <td> 10:10 10/10/2010 </td>
                                <td className="acao"> <button> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                <td className="acao"> <button> <img src="/assets/images/delete.svg" alt="" /> </button></td>
                            </tr>
                        
                        </tbody> 
        
                    </table>
                    
                </div>
                <Rodape/>
        </div>
        </Container>  
        </div>  
    )
}