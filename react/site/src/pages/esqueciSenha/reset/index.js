import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../styled'

import Cabecalho from '../../../components/cabecalho'
import Rodape from '../../../components/rodape'

export default function Reset(props) {
    const [validado, setValidado] = useState(false);
    const [codigo, setCodigo] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const nav = useHistory();

    async function validarCodigo() {
        const r = await axios.post(`https://943zj.sse.codesandbox.io/validarCodigo`, { email: props.location.state.email, codigo: codigo });
        if (r.data.status === 'ok') {
            setValidado(true);
        } else {
            setValidado(false);
            alert(r.data.mensagem);
        }
    }

    async function alterarSenha() {
        const r = await axios.post(`https://943zj.sse.codesandbox.io/validarCodigo`, { 
          email: props.location.state.email,
          codigo: codigo,
          novaSenha: novaSenha
        });

        if (r.data.state === 'ok') {
            alert('Senha Alterada!');
            nav.push('/page/login');
        } else {
            alert(r.data.mensagem);
        }
    }

    return (
        <Container> 
            <Cabecalho/>
            <h1> Recuperação de Senha </h1>

            <div>
                Código de Recuperação: <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
            </div>

            <button onClick={validarCodigo}> Enviar Código </button>

            <br />
            {validado &&
                <div>
                    <h3> Altere sua senha </h3>

                    <div>
                        Nova senha: <input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />   
                        <div>
                            <button onClick={alterarSenha}> Alterar </button>
                        </div>
                    </div>
                </div>
            }
            <Rodape/>
        </Container>
    )
}