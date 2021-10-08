import { Container } from "../calendario/styled"
import { Link } from "react-router-dom"

export default function Horariosdisp(props) {
    return (
      <Container>
        <Link to={{
          pathname: '/confirmar',
          state: props.horas
        }}>
          <button> {props.horas.hora} </button>   
        </Link>
      </Container>
    )
  }