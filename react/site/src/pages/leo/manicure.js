import { Container } from "./styled"
import { Box } from "./box"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'


export default function Manicure() {
    return (
       <Container>
            <Cabecalho/>
            <div className="nails">
                <div className="titulo"> Cuidados diários com suas unhas </div>
            </div>

            <div className="fazer">
                <div className="tit">
                    O que fazer?
                </div>

                <div className="box">
                    <Box>
                        Procure uma boa base <br/> fortalecedora, com vitamina E.
                    </Box>

                    <Box>
                        Lixar com frequência.
                    </Box>

                    <Box>
                        Manter uma alimentação <br/> saúdavel e equilibrada.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Manter o formato natural.
                    </Box>

                    <Box>
                        Hidratar unhas e cutículas.
                    </Box>

                    <Box>
                        Tirar a cutícula superficialmente.
                    </Box>
                </div>  
            </div>

            <div className="fazer">
                <div className="tit">
                    O que não fazer?
                </div>

                <div className="box">
                    <Box>
                        Roer as unhas.
                    </Box>

                    <Box>
                        Tirar o esmalte com o dente.
                    </Box>

                    <Box>
                        Usar acetona.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Cutucar os cantos.
                    </Box>

                    <Box>
                        Abrir latinha com as unhas.
                    </Box>

                    <Box>
                       Utilizar produtos químicos sem luvas.
                    </Box>
                </div>  
            </div>

            <Rodape/>

       </Container>
    )
}