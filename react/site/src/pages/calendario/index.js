import { Container } from './styled';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './css.css'
import 'react-calendar/dist/Calendar.css';
import Cabecalho from '../../components/cabecalho'


import Botaoconfirmar from '../botaoconfirmar'

export default function Calendariooo(props) {
    const servicocorte = props.location.state;
    const [horario, setHorario] = useState([])

    function listar() {
        const r = [
          {
            hora: "8:00"
          },
          {
            hora: "8:30"
          },
          {
            hora: "9:00"
          },
          {
            hora: "9:30"
          },
          {
            hora: "10:00"
          },
          {
            hora: "10:30"
          },
          {
            hora: "11:00"
          },
          {
            hora: "11:30"
          },
          {
            hora: "12:00"
          },
          {
            hora: "12:30"
          },
          {
            hora: "13:00"
          },
          {
            hora: "13:30"
          },
          {
            hora: "14:00"
          },
          {
            hora: "14:30"
          },
          {
            hora: "15:00"
          },
          {
            hora: "15:30"
          },
          {
            hora: "16:00"
          },
          {
            hora: "16:30"
          },
          {
            hora: "16:00"
          },
          {
            hora: "16:30"
          },
          {
            hora: "17:00"
          },
          {
            hora: "17:30"
          },
          {
            hora: "18:00"
          },
          {
            hora: "18:30"
          },
          {
            hora: "19:00"
          },
          {
            hora: "19:30"
          },
          {
            hora: "20:00"
          },
          {
            hora: "20:30"
          },
          {
            hora: "21:00"
          },
          {
            hora: "21:30"
          }
        ]
    
        setHorario(r);
      }

    useEffect(listar, []);

    const [date, setDate] = useState(new Date())
    const onChange = date => {
        setDate(date)
    }

    function mes(data) {
        switch(data.getMonth()){
            case 0: return 'Janeiro'
            case 1: return 'Fevereiro'
            case 2: return 'Março'
            case 3: return 'Abril'
            case 4: return 'Maio'
            case 5: return 'Junho'
            case 6: return 'Julho'
            case 7: return 'Agosto'
            case 8: return 'Setembro'
            case 9: return 'Outubro'
            case 10: return 'Novembro'
            default: return 'Dezembro'
        }
    }

    return (
        <div>
            <Cabecalho/>
                <Container>
                    <div className="titulo"> Escoha uma Data Para o Serviço {servicocorte}</div>
                    <div className="calendario">
                        <Calendar onChange={onChange} value={date} minDate={new Date()}  />
                    </div>
                    <div className="titulo2"> Horários disponiveis para o dia {date.getDate()} de {mes(date)} </div>
                    <div className="horarios-dispo"> 

                    {horario.map(item => 
                            
                            <Botaoconfirmar horas={item} />
                            
                    )}

                    </div>
                </Container>
        </div>
    )
}
