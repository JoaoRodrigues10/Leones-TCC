import { useState } from "react";

export default function Email() {
    const [para, setPara] = useState('');
    const [assunto, setAssunto] = useState('');
    const [msg, setMsg] = useState('');

    function enviar() {
        
    }

    return (
      <div>
        <div>
          Para:
          <input type="text" value={para} onChange={e=> setPara(e.target.value)} />
        </div>
        <div>
          Assunto:
          <input type="text" value={assunto} onChange={e=> setAssunto(e.target.value)} />
        </div>
        <div>
          Mensagem:
          <input type="text" value={msg} onChange={e=> setMsg(e.target.value)} />
        </div>
        <div>
          <button onClick={enviar}> Enviar </button>
        </div>
        
      </div>
    )
    
}