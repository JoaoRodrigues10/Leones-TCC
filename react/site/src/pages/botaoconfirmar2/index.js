import { Container } from "../meuPerfil/styled"
import { Link } from "react-router-dom"

export default function Horariosdisp(props) {
    return (
      <Container {...props}>
          <button> {props.horas.hora} </button>   
      </Container>
    )
  }