import { Container2 } from "./styled"
import { Link } from "react-router-dom"

export default function Horariosdisp(props) {
    return (
      <Container2 {...props}>
        <div className="remarcar">
          <button> {props.horas.hora} </button>   
        </div>  
      </Container2>
    )
  }