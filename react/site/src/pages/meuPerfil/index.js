import axios from 'axios'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";

import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'

import { Link } from "react-router-dom"


import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import LoadingBar from 'react-top-loading-bar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie'

import Api from '../../services/api'
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado');
    if ( logado == null){
        
        return null;
    }

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function MeuPerfil(){
    const navigation = useHistory( );
    let usuarioLogado = lerUsuarioLogado(navigation) || {} ;

    const [arquivo, setArquivo] = useState('');
    const [agendamentos, setAgendamentos] = useState([]);
    const [usu] = useState(usuarioLogado.nm_cliente)
    const [imgusu, setImgUsu] = useState(usuarioLogado.img_cliente)
    
    
    let loading = useRef(null);

    
 
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
                        let r = await api.RemoverAgendamento(id);
                        if(r.erro){
                            toast.dark(`${r.erro}`);
                        } else {
                            toast.dark('Agendamento removido')
                            
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
        <Link to="/alterar"> </Link>
    }

    useEffect(() => {
        listar();
    }, [])

    async function fazerUpload() {

        let formData = new FormData();
        formData.append('arquivo', arquivo);

        let resp = await axios.put(`https://leones20.herokuapp.com/criarArquivo?id=${usuarioLogado.id_cliente}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }});

        let usuario = lerUsuarioLogado(navigation);
        usuario.img_cliente = resp.data.img_cliente;

        setImgUsu(resp.data.img_cliente);
        Cookies.set('usuario-logado', JSON.stringify(usuario));
    
        console.log(resp.data);
      }


      function previewImage() {
        if (arquivo) {
          return URL.createObjectURL(arquivo);
        } else{
            return `https://leones20.herokuapp.com/imagemPerfil?imagem=${imgusu}`
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
                    <div className="usuario">
                        <div className="fotoperfil" onClick={selectFile}> <input id="arquivo-input-file" type="file" onChange={e => setArquivo(e.target.files[0])} />
                            <img src={previewImage()} alt="" /></div>
                            <button onClick={fazerUpload}>  Salvar foto  </button>                 
                    </div>
                    
                    
                        <div className="dadosperfil">
                            <div className="dados"> {usu}  </div>
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
                    <div className="minhaagenda">Minha agenda</div>
                    <table className="table-user">
                        <thead>
                            <tr>
                                <th> Profissional </th>
                                <th> Serviço </th>
                                <th> Dia </th>
                                <th> Horário </th>
                                <th> Situação </th>
                                <th className="a"> </th>
                                <th className="a"> </th>
                                
                            </tr>
                        </thead>
        
                        <tbody>
                            {agendamentos.map((item) =>   
                                <tr>
                                    <td title={item.id_funcionario_infod_leo_funcionario.nm_funcionario}>
                                        {item.id_funcionario_infod_leo_funcionario.nm_funcionario != null && item.id_funcionario_infod_leo_funcionario.nm_funcionario.length >= 15
                                                ? item.id_funcionario_infod_leo_funcionario.nm_funcionario.substr(0, 6) + "..." 
                                                : item.id_funcionario_infod_leo_funcionario.nm_funcionario} 
                                    </td>
                                    <td title={item.id_servico_infod_leo_servico.nm_servico}> 
                                    {item.id_servico_infod_leo_servico.nm_servico != null && item.id_servico_infod_leo_servico.nm_servico.length >= 15
                                                ? item.id_servico_infod_leo_servico.nm_servico.substr(0, 6) + "..." 
                                                : item.id_servico_infod_leo_servico.nm_servico} 
                                    </td>
                                    <td> {item.dt_agendamento.substr(0, 10)} </td>
                                    <td> {item.dt_agendamento.substr(11, 5)} </td>
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