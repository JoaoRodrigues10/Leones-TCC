import axios from 'axios'
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import { Container } from "./styled";
import { Container2 } from "../alterar/styled";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import Botaoconfirmar from '../botaoconfirmar'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'


import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


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



export default function MeuPerfil(props){
    const navigation = useHistory( );
    let usuarioLogado = lerUsuarioLogado(navigation) || {} ;
    const [date, setDate] = useState(new Date())
    const onChange = date => {
      setDate(date)
    }
    const [arquivo, setArquivo] = useState('');
    const [agendamentos, setAgendamentos] = useState([]);
    const [usu] = useState(usuarioLogado.nm_cliente)
    const [imgusu, setImgUsu] = useState(usuarioLogado.img_cliente)
    const [ idAlterando, setIdAlterando ] = useState(0);
    const [ serv, setServico ] = useState('');
    const [ serv2, setServico2 ] = useState('');
    const [ agenda, setAgenda ] = useState('');  
    const [ hora, setHora ] = useState('');  
    const [alteraragen, setAlteraragen] = useState(false);
    const [horario, setHorario] = useState([])
    const [ novahora, setNovahora ] = useState(''); 
    const [idagendamento, setIdagendamento] = useState('')

    function listarHoras() {
        const r = [
            {
              hora: "8:00"
            },
            {
              hora: "9:00"
            },
            
          ]
      
    
        setHorario(r);
      }


    useEffect(listarHoras, []);
    

    async function listar() {
        let b = await api.ListarAgendamento(usuarioLogado.id_cliente);
        setAgendamentos(b);
    }

    async function remover(id) {

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
    }

    async function editar(item) {
        setAgenda(item.dt_agendamento.substr(0, 10));
        setServico(item.id_servico_infod_leo_servico.tp_servico);
        setServico2(item.id_servico_infod_leo_servico.nm_servico);
        setIdAlterando(item.id_agendamento);
        setHora(item.dt_agendamento.substr(11, 5));
        setAlteraragen(true);
        setIdagendamento(item.id_agendamento)
    }

    async function alterarHorario(id) {
        let b = (id, date, novahora)
        console.log(b)
        console.log(hora)
        console.log(date)
        console.log()
    }


    useEffect(() => {
        listar();
    }, [remover])

    async function fazerUpload() {

        let formData = new FormData();
        formData.append('arquivo', arquivo);

        let resp = await axios.put(`http://localhost:3030/criarArquivo?id=${usuarioLogado.id_cliente}`, formData, {
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
            return `http://localhost:3030/imagemPerfil?imagem=${imgusu}`
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


                {alteraragen && 
                    <div>
                    <Container2>
                        <div className="Container">
                            <div className="Box-1">
                                <h1> Editar agendamento </h1>
                                <hr></hr>
                            </div>
                            <div className="Box-2">
                                <div className="Alterar">
                                    <h1> Remarcar serviço {serv} do dia {agenda} ás  {hora} </h1>
                                    <div className="Alterar-Horario">

                                          <div className="data"> 
                                             Selecione a data:  
                                            <div className="react-calendar">
                                                <Calendar onChange={onChange} value={date} minDate={new Date()}  />
                                            </div> 
                                          </div>  

                                        <div className="data"> 


                                        {horario.map(item => 
                                                <Link to={{
                                                    pathname: '/alterar',
                                                    state: {
                                                      horas: item.hora,
                                                      dia: date,
                                                      nomeser: serv,
                                                      idagen: idagendamento
                                                    }
                                                  }}>
                                                <Botaoconfirmar horas={item}  />
                                                </Link>
                                        )
                                        }

                      
                                        </div>    
                                    </div>
                                     
                                </div>
                            </div>
                        </div>
                    </Container2>   
                </div>}

            </Container> 
            <Rodape/> 
        </div>  
    )
}