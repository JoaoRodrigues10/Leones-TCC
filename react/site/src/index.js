import React from 'react';
import Cabecalho from './pages/components/cabecalho'
import Calendario from './pages/calendario/index'
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Cabecalho/>
    <Calendario/>
  </React.StrictMode>,
  document.getElementById('root')
);
