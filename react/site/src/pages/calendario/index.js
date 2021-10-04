import { Container } from './styled';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './css.css'
import 'react-calendar/dist/Calendar.css';
import Cabecalho from '../../components/cabecalho'
import { Link } from 'react-router-dom';

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
            default: return 'Dezembro'
        }
    }

    return (
        <div>
            <Cabecalho/>
                <Container>
                    <div className="titulo"> Escoha uma Data </div>
                    <div className="calendario">
                        <Calendar onChange={onChange} value={date} minDate={new Date()}  />
                    </div>
                    <div className="titulo2"> Horários disponiveis para o dia {date.getDate()} de {mes(date)} </div>
                    <div className="horarios-dispo"> 
                    <Link to="/confirmar"> </Link>
                    <Link to="/confirmar"> <button>8:00</button> </Link>
                    <Link to="/confirmar"><button>8:30</button></Link>
                    <Link to="/confirmar"><button>9:00</button></Link>
                    <Link to="/confirmar"><button>9:30</button></Link>
                    <Link to="/confirmar"><button>10:00</button></Link>
                    <Link to="/confirmar"><button>10:30</button></Link>
                    <Link to="/confirmar"><button>11:00</button></Link>
                    <Link to="/confirmar"><button>11:30</button></Link>
                    <Link to="/confirmar"><button>12:00</button></Link>
                    <Link to="/confirmar"><button>12:30</button></Link>
                    <Link to="/confirmar"><button>13:00</button></Link>
                    <Link to="/confirmar"><button>13:30</button></Link>
                    <Link to="/confirmar"><button>14:00</button></Link>
                    <Link to="/confirmar"><button>14:30</button></Link>
                    <Link to="/confirmar"><button>15:00</button></Link>
                    <Link to="/confirmar"><button>15:30</button></Link>
                    <Link to="/confirmar"><button>16:00</button></Link>
                    <Link to="/confirmar"><button>16:30</button></Link>
                    <Link to="/confirmar"><button>17:00</button></Link>
                    <Link to="/confirmar"><button>17:30</button></Link>
                    <Link to="/confirmar"><button>18:00</button></Link>
                    <Link to="/confirmar"><button>18:30</button></Link>
                    <Link to="/confirmar"><button>19:00</button></Link>
                    <Link to="/confirmar"><button>19:30</button></Link>
                    <Link to="/confirmar"><button>20:00</button></Link>
                    <Link to="/confirmar"><button>20:30</button></Link>
                    <Link to="/confirmar"><button>21:00</button></Link>
                    </div>
                </Container>
        </div>
    )
}
