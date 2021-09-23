import React from 'react';
import Routes from './routes';
import Cabecalho from './pages/components/cabecalho'
import Servicos from './pages/servicos-fem';
import Cortes from './pages/servicos-fem/cortes';
import Quimicas from './pages/servicos-fem/quimicas'
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <Quimicas/>
  </React.StrictMode>,
  document.getElementById('root')
);
