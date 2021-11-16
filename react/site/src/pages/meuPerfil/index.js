import axios from 'axios'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";
import { Container2 } from "../alterar/styled";

   

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
    const [ idAlterando, setIdAlterando ] = useState(0);
    const [ servico, setServico ] = useState('');
    const [ agendamento, setAgendamento ] = useState('');
    
    
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
        setAgendamento(item.dt_agendamento);
        setServico(item.id_servico);
        setIdAlterando(item.id_agendamento);
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
                                    <th> Horário</th>
                                    <th> Situação </th>
                                    <th className="a"> </th>
                                    <th className="a"> </th>
                                    
                                </tr>
                            </thead>
            
                            <tbody>
                                {agendamentos.map((item) =>   
                                    <tr>
                                        <td title={item.id_funcionario_infod_leo_funcionario.nm_funcionario}>
                                            {item.id_funcionario_infod_leo_funcionario.nm_funcionario} 
                                        </td>
                                        <td title={item.id_servico_infod_leo_servico.nm_servico}> 
                                        {item.id_servico_infod_leo_servico.nm_servico} 
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
                </div>


                <div>
                    <Container2>
                        <div className="Container">
                            <div className="Box-1">
                                <h1> Editar agendamento </h1>
                                <hr></hr>
                            </div>
                            <div className="Box-2">
                                <div className="Informacoes">
                                    <h1> Informações </h1>
                                    <ul>
                                        <li> {usu} </li>
                                        <li> <input type="text" value={servico} onChange={e => setServico(e.target.value)} class="text-input" disabled="disabled" /> </li>
                                        <li> <input type="text" value={agendamento} onChange={e => setAgendamento(e.target.value)} class="text-input" disabled="disabled"/> </li>
                                    </ul>
                                </div>
                                <div className="Alterar">
                                    <h1> Alterar </h1>
                                    <div className="Alterar-Horario">
                                        <label for=""> Selecione o horário </label>
                                        <select required="" name="horario">
                                            <option selected="selected" value=""> 8:00 </option>
                                            <option value="1"> 8:00 </option>
                                            <option value="2"> 9:00 </option>
                                            <option value="3"> 10:00 </option>
                                            <option value="4"> 11:00 </option>
                                            <option value="5"> 12:00 </option>
                                            <option value="6"> 13:00 </option>
                                            <option value="7"> 14:00 </option>
                                            <option value="8"> 15:00 </option>
                                            <option value="9"> 16:00 </option>
                                            <option value="10"> 17:00 </option>
                                            <option value="11"> 18:00 </option>
                                            <option value="12"> 19:00 </option>
                                            <option value="13"> 20:00 </option>
                                            <option value="14"> 21:00 </option> 
                                        </select>
                                    </div>
                                    <div className="Botao-alterar"><button> Atualizar </button></div> 
                                </div>
                            </div>
                        </div>
                    </Container2>   
                </div>
            </Container> 
            <Rodape/> 
        </div>  
    )
}