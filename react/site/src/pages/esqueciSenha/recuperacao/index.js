import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../styled'
import { Link } from 'react-router-dom';

import CabecalhoImagem from '../../../components/img-cabecalho'
import Rodape from '../../../components/rodape'

export default function Recuperacao() {
    const [email, setEmail] = useState('');

    const nav = useHistory();

    async function recuperar() {
        const r = await axios.post('https://leones20.herokuapp.com/email/esqueciASenha', {email: email});
        if (r.data.status === 'ok') {
            nav.push('/reset', {email: email });
        } else {
            alert(r.data.mensagem);
        }
    }

    return (
            <Container>
                 <Link to="/"> <CabecalhoImagem/> </Link>

                <div className="alinhar">
                    <h1> Recuperação de Senha </h1>

                    <div className="email">
                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <button onClick={recuperar}> <Link to="/reset"> Enviar Código </Link> </button>
                </div>
                <Rodape/>
            </Container>
            
    )
}