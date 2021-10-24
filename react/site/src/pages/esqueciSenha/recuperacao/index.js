import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../styled'

import CabecalhoImagem from '../../../components/img-cabecalho'
import Rodape from '../../../components/rodape'

export default function Recuperacao() {
    const [email, setEmail] = useState('');

    const nav = useHistory();

    async function recuperar() {
        const r = await axios.post('https://943zj.sse.codesandbox.io/esqueciASenha', {email: email});
        if (r.data.status === 'ok') {
            nav.push('/pages/reset', {email: email });
        } else {
            alert(r.data.mensagem);
        }
    }

    return (
            <Container>
                <CabecalhoImagem/>

                <div className="alinhar">
                    <h1> Recuperação de Senha </h1>

                    <div>
                        E-mail: <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <button onClick={recuperar}> Enviar Código </button>
                </div>
                <Rodape/>
            </Container>
            
    )
}