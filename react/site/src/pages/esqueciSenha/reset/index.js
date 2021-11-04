import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../styled'

import CabecalhoImagem from '../../../components/img-cabecalho'
import Rodape from '../../../components/rodape'

export default function Reset(props) {
    const [validado, setValidado] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const nav = useHistory();

    async function validarCodigo() {
        const r = await axios.post(`http://localhost:3030/validarCodigo`, { email: props.location.state.email, codigo: codigo });
        if (r.data.status === 'ok') {
            setValidado(true);
        } else {
            setValidado(false);
            alert(r.data.mensagem);
        }
    }

    async function alterarSenha() {
        const r = await axios.post(`http://localhost:3030/validarCodigo`, { 
          email: props.location.state.email,
          codigo: codigo,
          novaSenha: novaSenha
        });

        if (r.data.state === 'ok') {
            alert('Senha Alterada!');
            nav.push('/login');
        } else {
            alert(r.data.mensagem);
        }
    }

    return (
        <Container> 
            <CabecalhoImagem/>

            <div className="alinhar">
                <h1> Recuperação de Senha </h1>

                <div className="email">
                    <input type="text" placeholder="Código de recuperação" value={codigo} onChange={e => setCodigo(e.target.value)} />
                </div>

                <button onClick={validarCodigo}> Enviar Código </button>

                <br />
                {validado &&
                    <div>
                        <h3> Altere sua senha </h3>

                        <div className="email">
                            <input type="text" placeholder="Nova senha" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />   
                            <div>
                                <button onClick={alterarSenha}> Alterar </button>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <Rodape/>
        </Container>
    )
}