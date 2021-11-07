import axios from 'axios'
const api = axios.create({
    baseURL: 'https://leonesltda.herokuapp.com'
})

export default class Api {
    async ListarCliente() {
        let r = await api.get('/cliente', {})
        return r.data;
    }

    async InserirCliente(nome, email, senha, telefone) {
        let r = await api.post('/cliente', { nome, email, senha, telefone});
        return r.data;
    }

    async AlterarCliente(id, nome, email, senha, imagem, telefone) {
        let r = await api.put('/cliente' + id, { nome, email, senha, imagem, telefone });
        return r.data;
    }

    async RemoverCliente(id) {
        let r = await api.delete('/cliente/' + id);
        return r.data;
    }


    async login(email, senha) {
        let b = await api.post('/login', { email, senha })
        return b.data;
    }

    async cadastrar(nome, cargo, email, telefone, senha) {
        let r = await api.post('/cadastro', {nome, cargo, email, telefone, senha })
        return r.data;
    }



    async ListarFuncionario() {
        let r = await api.get('/funcionario', {})
        return r.data;
    }

    async InserirFuncionario(nome, cargo, email, senha, telefone) {
        let r = await api.post('/funcionario', { nome, cargo, email, senha, telefone });
        return r.data;
    }

    async AlterarFuncionario(id, nome, cargo, email, senha, telefone) {
        let r = await api.put('/funcionario' + id, { nome, cargo, email, senha, telefone });
        return r.data;
    }

    async RemoverFuncionario(id) {
        let r = await api.delete('/funcionario/' + id);
        return r.data;
    }



    async ListarServicos() {
        let r = await api.get('/servicos', {})
        return r.data;
    }

    async InserirServicos(tipo, nome, descricao, valor) {
        let r = await api.post('/servicos', { tipo, nome, descricao, valor });
        return r.data;
    }

    async AlterarServicos(id, tipo, nome, descricao, valor) {
        let r = await api.put('/servicos' + id, { tipo, nome, descricao, valor });
        return r.data;
    }

    async RemoverServicos(id) {
        let r = await api.delete('/servicos/' + id);
        return r.data;
    }



    async ListarServicosImg() {
        let r = await api.get('/servicoimg', {})
        return r.data;
    }

    async InserirServicosImg(idservico, imgservico) {
        let r = await api.post('/servicoimg', { idservico, imgservico });
        return r.data;
    }

    async AlterarServicosimg(id, idservico, imgservico) {
        let r = await api.put('/servicos' + id, { idservico, imgservico });
        return r.data;
    }

    async RemoverServicosImg(id) {
        let r = await api.delete('/servicoimg/' + id);
        return r.data;
    }
    
    
    
    async ListarAgendamento() {
        let r = await api.get('/agendamento', {})
        return r.data;
    }

    async InserirAgendamento(funcionario, cliente, servico, agendamento, situacao) {
        let r = await api.post('/agendamento', { funcionario, cliente, servico, agendamento, situacao });
        return r.data;
    }

    async AlterarAgendamento(id, funcionario, servico, agendamento) {
        let r = await api.put('/agendamento' + id, { funcionario, servico, agendamento });
        return r.data;
    }

    async RemoverAgendamento(id) {
        let r = await api.delete('/agendamento/' + id);
        return r.data;
    }

    
    
}