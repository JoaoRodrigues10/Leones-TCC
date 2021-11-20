import { Container } from "./styled"
import { Box } from "./box"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'


export default function Barbearia() {
    return (
       <Container>
            <Cabecalho/>
            <div className="barba">
                <div className="titulo"> Cuidados diários com sua barba </div>
            </div>

            <div className="fazer">
                <div className="tit">
                    O que fazer?
                </div>

                <div className="box">
                    <Box>
                        Lavar a barba com produtos específicos.
                    </Box>

                    <Box>
                        Condicionar a barba.
                    </Box>

                    <Box>
                        Secar os fios, caso seja <br/> longa use o secador.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Utilizar um balm ou um <br/> óleo essencial para hidratar.
                    </Box>

                    <Box>
                        Pentear todos os dias.
                    </Box>

                    <Box>
                        Cuidados básicos com a pele.
                    </Box>
                </div>  
            </div>

            <div className="fazer">
                <div className="tit">
                    O que não fazer?
                </div>

                <div className="box">
                    <Box>
                        Passar a lâmina no sentido contrário de crescimento dos pêlos.
                    </Box>

                    <Box>
                        Usar lâminas velhas ao fazer sua barba.
                    </Box>

                    <Box>
                       Não utilizar loções e cremes pós-barba.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Não lavar a lâmina.
                    </Box>

                    <Box>
                        Pressionar o barbeador contra a face.
                    </Box>

                    <Box>
                        Secar o rosto esfregando a toalha.
                    </Box>
                </div>  
            </div>

            <Rodape/>

       </Container>
    )
}