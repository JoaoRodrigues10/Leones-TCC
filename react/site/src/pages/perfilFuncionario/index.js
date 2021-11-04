import axios from 'axios'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";

import { useState, useEffect, useRef } from 'react';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../services/api'
const api = new Api();


export default function MeuPerfil(){
    const [arquivo, setArquivo] = useState('');
    const [agendamentos, setAgendamentos] = useState([]);
    
    

    let loading = useRef(null);

    const atualizar = async() => {
        loading.current.continuousStart();
    
        const cliente = await api.listar(1);
        agendamentos(cliente)
    
        loading.current.complete();
    }
 
    async function listar() {
        loading.current.continuousStart();

        let b = await api.ListarAgendamento();
        setAgendamentos(b);

        loading.current.complete();
    }

    async function remover(id) {
        loading.current.continuousStart();

        confirmAlert({
            title: 'Remover agendamento',
            message: `Tem certeza que quer remover o agendamento ${id} ?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.remover(id);
                        if(r.erro){
                            toast.dark(`${r.erro}`);
                        } else {
                            toast.dark('Agendamento removido')
                            listar();
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
        
        listar();
        atualizar();
        loading.current.complete();
    }

    async function editar(item) {
       
    }

    useEffect(() => {
        listar();
    }, [])

    async function fazerUpload() {

        let formData = new FormData();
        formData.append('arquivo', arquivo);

        let resp = await axios.post('http://localhost:3030/criarArquivo', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }});
    
        console.log(resp.data);
      }


      function previewImage() {
        if (arquivo) {
          return URL.createObjectURL(arquivo);
        } else{
            return 
        }
      }
    
      function selectFile() {
        let input = document.getElementById("arquivo-input-file");
        input.click();
      }
    


    return(
    <div>
    <Cabecalho/>
        <Container>
        <ToastContainer />
        <LoadingBar color='#174580' ref={loading} />
            <div className="containerperfil"> 
          
                <div className="faixa1">
                    <div className="fotoperfil" onClick={selectFile}> <input id="arquivo-input-file" type="file" onChange={e => setArquivo(e.target.files[0])} />
                    <img src={previewImage()} alt="" /></div>
                    <button onClick={fazerUpload}> Salvar Imagem </button>                 
                    
                    
                    
                    <div className="dadosperfil">
                        <div className="dados">Nome do Funcionário  </div>
                    </div>
                </div>
        
                <div className="faixa2"> 
                    <div className="textaviso">Avisos</div>
                    <div className="avisos">
                    <div className="avisotext">(11:21:22) Bruno desmarcou o serviço do dia xxxx as xxx horas</div>
                    <div className="avisotext">(11:21:22) Bruno Remarcou o serviço do dia xxxx as xxx para o dia xxxx as xxxx horas</div>
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
                                <th> Horario Agenda </th>
                                <th className="a"> </th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {agendamentos.map((item) =>   
                                <tr >
                                    <td> {item.id_agendamento} </td>
                                    <td title={item.id_cliente_infod_leo_cliente.nm_cliente}>
                                        {item.id_cliente_infod_leo_cliente.nm_cliente != null && item.nm_cliente.length >= 15
                                                ? item.id_cliente_infod_leo_cliente.nm_cliente.substr(0, 15) + "..." 
                                                : item.id_cliente_infod_leo_cliente.nm_cliente} 
                                    </td>
                                    <td> {item.id_servico_infod_leo_servico.nm_servico} </td>
                                    <td> {item.dt_agendamento.substr(0, 10)} </td>
                                    <td> {item.tp_situacao} </td>
                                    <td className="acao"> <button onClick={ () => editar(item) }> <img src="/assets/images/edit.svg" alt="" /> </button> </td>
                                    <td className="acao"> <button onClick={ () => remover(item.id_agendamento) }> <img src="/assets/images/delete.svg" alt="" /> </button> </td>
                                </tr>
                            )}
                        </tbody>  
        
                    </table>
                    
                </div>
                <Rodape/>
        </div>
        </Container>  
        </div>  
    )
}