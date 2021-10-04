import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async Agendar(idfuncionario, idcliente, idservico, data, situacao) {
        let r = await api.post('/agendamento', {})
    }
    
}