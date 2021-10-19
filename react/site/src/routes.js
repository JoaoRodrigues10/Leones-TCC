import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calendario from './pages/calendario/index'
import Home from './pages/home';
import CadrastrarFuncionário from './pages/cadastrar-funcionario'
import Inscrevase from './pages/inscreva-se'
import Servicos from './pages/servicos-fem';
import Penteados from './pages/servicos-fem/penteados';
import Cortes from './pages/servicos-fem/cortes';
import Quimicas from './pages/servicos-fem/quimicas'
import Especiais from './pages/servicos-fem/especiais'
import Tratamentos from './pages/servicos-fem/tratamentos'
import Manicure from './pages/servicos-fem/manicure'
import Escolha from './pages/servicos'
import Confirmar from './pages/confirmar'
import Aprovacao from './pages/aprovacao'
import ServicosMas from './pages/servicos-mas';
import CortesMas from './pages/servicos-mas/cortes';
import QuimicasMas from './pages/servicos-mas/quimica'
import EspeciaisMas from './pages/servicos-mas/especiais'
import TratamentosMas from './pages/servicos-mas/tratamentos'
import ManicureMas from './pages/servicos-mas/manicure'
import PigmentacaoMas from './pages/servicos-mas/pigmentacao'
import Entrar from './pages/entrar'
import meuPerfil from './pages/meuPerfil'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Entrar}/>
                <Route path="/home" exact={true} component={Home} />
                <Route path="/cadastrar-funcionario" exact={true} component={CadrastrarFuncionário} />
                <Route path="/inscreva-se" exact={true} component={Inscrevase} />
                <Route path="/calendario" exact={true} component={Calendario} />
                <Route path="/serviços" exact={true} component={Escolha} />
                <Route path="/aprovacao" exact={true} component={Aprovacao} />
                <Route path="/confirmar" exact={true} component={Confirmar} />
                <Route path="/serviçosfem" exact={true} component={Servicos} />
                <Route path="/serviçosmas" exact={true} component={ServicosMas} />
                <Route path="/cortes" exact={true} component={Cortes} />
                <Route path="/quimicas" exact={true} component={Quimicas} />
                <Route path="/penteados" exact={true} component={Penteados} />
                <Route path="/serviçosespeciais" exact={true} component={Especiais} />
                <Route path="/tratamentos" exact={true} component={Tratamentos} />
                <Route path="/manicure e pedicure" exact={true} component={Manicure} />
                <Route path="/cortesmas" exact={true} component={CortesMas} />
                <Route path="/quimicamas" exact={true} component={QuimicasMas} />
                <Route path="/pigmentacaomas" exact={true} component={PigmentacaoMas} />
                <Route path="/serviçosespeciaismas" exact={true} component={EspeciaisMas} />
                <Route path="/tratamentosmas" exact={true} component={TratamentosMas} />
                <Route path="/manicure e pedicure masculino" exact={true} component={ManicureMas} />
                <Route path="/meuPerfil" exact={true} component={meuPerfil}/>
            </Switch>
        </BrowserRouter>
    )
}