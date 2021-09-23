import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calendario from './pages/calendario/index'
import Home from './pages/home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/calendario" exact={true} component={Calendario} />
            </Switch>
        </BrowserRouter>
    )
}