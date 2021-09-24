import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calendario from './pages/calendario/index'
import Home from './pages/home';
import Servicos from './pages/servicos-fem';
import Penteados from './pages/servicos-fem/penteados';
import Cortes from './pages/servicos-fem/cortes';
import Quimicas from './pages/servicos-fem/quimicas'
import Especiais from './pages/servicos-fem/especiais'
import Tratamentos from './pages/servicos-fem/tratamentos'
import Manicure from './pages/servicos-fem/manicure'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/calendario" exact={true} component={Calendario} />
                <Route path="/serviços" exact={true} component={Servicos} />
                <Route path="/cortes" exact={true} component={Cortes} />
                <Route path="/quimicas" exact={true} component={Quimicas} />
                <Route path="/penteados" exact={true} component={Penteados} />
                <Route path="/serviçosespeciais" exact={true} component={Especiais} />
                <Route path="/tratamentos" exact={true} component={Tratamentos} />
                <Route path="/manicure e pedicure" exact={true} component={Manicure} />
                
            </Switch>
        </BrowserRouter>
    )
}