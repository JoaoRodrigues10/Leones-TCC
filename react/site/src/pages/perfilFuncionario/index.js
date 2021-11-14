import axios from 'axios'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
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
    const [usu] = useState(usuarioLogado.nm_funcionario)
    const [usufuncionario, setUsufuncionario] = useState(usuarioLogado.img_funcionario)
    
    
    
    

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
        <Link to="/alterar"> </Link>
    }

    useEffect(() => {
        listar();
    }, [])

    async function fazerUpload() {

        let formData = new FormData();
        formData.append('arquivo', arquivo);

        let resp = await axios.put(`https://leones20.herokuapp.com/criarArquivo?id=${usuarioLogado.id_funcionario}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }});

        let usuario = lerUsuarioLogado(navigation);
        usuario.img_funcionario = resp.data.img_funcionario;

        setUsufuncionario(resp.data.img_funcionario);
        Cookies.set('usuario-logado', JSON.stringify(usuario));
    
        console.log(resp.data);
      }


      function previewImage() {
        if (arquivo) {
          return URL.createObjectURL(arquivo);
        } else{
            return `https://leones20.herokuapp.com/imagemPerfil2?imagem=${usufuncionario}`
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
                        <button onClick={fazerUpload}> Salvar Imagem </button>                 
                    </div>
                    
                    
                    <div className="dadosperfil">
                        <div className="dados"> {usu} </div>
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
                                <th> Cliente </th>
                                <th> Serviço </th>
                                <th> Horário agenda </th>
                                <th> Situação </th>
                                <th className="a"> </th>
                                <th className="a"> </th>
                                <th className="a"> </th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {agendamentos.map((item) =>   
                                <tr >
                                    <td title={item.id_cliente_infod_leo_cliente.nm_cliente}>
                                        {item.id_cliente_infod_leo_cliente.nm_cliente != null && item.id_cliente_infod_leo_cliente.nm_cliente.length >= 15
                                                ? item.id_cliente_infod_leo_cliente.nm_cliente.substr(0, 6) + "..." 
                                                : item.id_cliente_infod_leo_cliente.nm_cliente} 
                                    </td>
                                    <td> {item.id_servico_infod_leo_servico.nm_servico} </td>
                                    <td> {item.dt_agendamento.substr(0, 10)} </td>
                                    <td> {item.tp_situacao} </td>
                                    <td></td>
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