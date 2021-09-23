import { Container } from './styled';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './css.css'
import 'react-calendar/dist/Calendar.css';

export default function Calendariooo() {
    
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
            case 11: return 'Dezembro'
        }
    }

    return (
        <Container>
            <div className="titulo"> Escoha uma Data </div>
            <div className="calendario">
                <Calendar onChange={onChange} value={date} minDate={new Date()}  />
               
            </div>
            <div className="titulo2"> Horários disponiveis para o dia {date.getDate()} de {mes(date)} </div>
            <div className="horarios-dipo"> </div>
        </Container>
    )
}
