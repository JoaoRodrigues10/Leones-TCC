import axios from 'axios'
import { useState } from 'react'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";


import { UseState, useEffect, useRef } from 'react';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../services/api'
const api = new Api();

export default function MeuPerfil() {

    const [cliente, setCliente] = useState('');
    //const [agendamento, setAgendamento] = useState('');
    //const [nomeCliente, setNomeCliente] = useState('');
    //const [idCliente, setIdCliente] = useState('');

    let loading = useRef(null);
 
    async function listar() {
        loading.current.continuousStart();
        let b = await api.listar();
        setCliente(b);
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
        loading.current.complete();
    }

    async function editar(item) {
       
    }

    useEffect(() => {
        listar();
    }, [])


export default function MeuPerfil(){
    const [arquivo, setArquivo] = useState();

    async function cadastrar() {

        let formData = new FormData();
        formData.append('arquivo', arquivo);

        let resp = await axios.post('https://943zj.sse.codesandbox.io/produto', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }});
    
        console.log(resp.data);
      }


      function previewImage() {
        if (arquivo) {
          return URL.createObjectURL(arquivo);
        }
      }
    
      function selectFile() {
        let input = document.getElementById("arquivo-input-file");
        input.click();
      }
    }

    return(
    <div>
    <Cabecalho/>
        <Container>
        <ToastContainer />
        <LoadingBar color='#f11946' ref={loading} />
            <div className="containerperfil"> 
          
                <div className="faixa1">
                    <div className="fotoperfil" onClick={selectFile}> <input id="arquivo-input-file" type="file" onChange={e => setArquivo(e.target.files[0])} />
                    <img src={previewImage()} alt="" /></div>
                    
                    
                    
                    <div className="dadosperfil">
                        <div className="dados">Nome do Cliente {cliente} </div>
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
                            {cliente.map((item) =>   
                                <tr >
                                    <td> {item.id_agendamento} </td>
                                    <td title={item.nm_cliente}>
                                        {item.nm_cliente != null && item.nm_cliente.length >= 15
                                                ? item.nm_cliente.substr(0, 15) + "..." 
                                                : item.nm_cliente} 
                                    </td>
                                    <td> {item.nm_servico} </td>
                                    <td> {item.nm_funcionario} </td>
                                    <td> {item.dt_agendamento} </td>
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