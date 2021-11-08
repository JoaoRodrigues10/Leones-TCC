import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import Inscrevase from './pages/inscreva-se';
import CadrastrarFuncionário from './pages/cadastrar-funcionario';
import Entrar from './pages/entrar';
import Entrarfuncionario from './pages/entrar-funcionario';

import meuPerfil from './pages/meuPerfil';
import perfilFuncionario from './pages/perfilFuncionario';

import Escolha from './pages/servicos';

import ServicosFem from './pages/servicos-fem';
import Penteados from './pages/servicos-fem/penteados';
import Cortes from './pages/servicos-fem/cortes';
import Quimicas from './pages/servicos-fem/quimicas';
import Especiais from './pages/servicos-fem/especiais';
import Tratamentos from './pages/servicos-fem/tratamentos';
import Manicure from './pages/servicos-fem/manicure';

import ServicosMas from './pages/servicos-mas';
import CortesMas from './pages/servicos-mas/cortes';
import QuimicasMas from './pages/servicos-mas/quimica';
import EspeciaisMas from './pages/servicos-mas/especiais';
import TratamentosMas from './pages/servicos-mas/tratamentos';
import ManicureMas from './pages/servicos-mas/manicure';
import PigmentacaoMas from './pages/servicos-mas/pigmentacao';

import Calendario from './pages/calendario/index';

import Aprovacao from './pages/aprovacao';
import Confirmar from './pages/confirmar';
import Alterar from './pages/alterar';

import Recuperacao from './pages/esqueciSenha/recuperacao';
import Reset from './pages/esqueciSenha/reset';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/inscreva-se" exact={true} component={Inscrevase} />
                <Route path="/cadastrar-funcionario" exact={true} component={CadrastrarFuncionário} />
                <Route path="/entrar" exact={true} component={Entrar}/>
                <Route path="/entrar-funcionario" exact={true} component={Entrarfuncionario} />

                <Route path="/meuPerfil" exact={true} component={meuPerfil}/>
                <Route path="/perfilFuncionario" exact={true} component={perfilFuncionario}/>               

                <Route path="/serviços" exact={true} component={Escolha} />
               
                <Route path="/serviçosfem" exact={true} component={ServicosFem} />
                <Route path="/penteados" exact={true} component={Penteados} />
                <Route path="/cortes" exact={true} component={Cortes} />
                <Route path="/quimicas" exact={true} component={Quimicas} />
                <Route path="/serviçosespeciais" exact={true} component={Especiais} />
                <Route path="/tratamentos" exact={true} component={Tratamentos} />
                <Route path="/manicure e pedicure" exact={true} component={Manicure} />

                <Route path="/serviçosmas" exact={true} component={ServicosMas} />
                <Route path="/cortesmas" exact={true} component={CortesMas} />
                <Route path="/quimicamas" exact={true} component={QuimicasMas} />
                <Route path="/serviçosespeciaismas" exact={true} component={EspeciaisMas} />
                <Route path="/tratamentosmas" exact={true} component={TratamentosMas} />
                <Route path="/manicure e pedicure masculino" exact={true} component={ManicureMas} />
                <Route path="/pigmentacaomas" exact={true} component={PigmentacaoMas} />
                
                <Route path="/calendario" exact={true} component={Calendario} />
                
                <Route path="/aprovacao" exact={true} component={Aprovacao} />
                <Route path="/confirmar" exact={true} component={Confirmar} />
                <Route path="/alterar" exact={true} component={Alterar}/>

                <Route path="/recuperacao" exact={true} component={Recuperacao}/>
                <Route path="/reset" exact={true} component={Reset}/>
                
            </Switch>
        </BrowserRouter>
    )
}