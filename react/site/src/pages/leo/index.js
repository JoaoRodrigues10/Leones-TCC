import { Container } from "./styled"
import { Box } from "./box"
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'


export default function Leo() {
    return (
       <Container>
            <Cabecalho/>
            <div className="hair">
                <div className="titulo"> Cuidados diários com seu cabelo </div>
            </div>

            <div className="fazer">
                <div className="tit">
                    O que fazer?
                </div>

                <div className="box">
                    <Box>
                        Lavar o cabelo <br/> com água fria.
                    </Box>

                    <Box>
                        Lavar o cabelo duas <br/> vezes com shampoo.
                    </Box>

                    <Box>
                        Manter uma alimentação <br/> saúdavel e equilibrada.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Cortar as pontas <br/> a cada 6 meses.
                    </Box>

                    <Box>
                        Fazer tratamentos semanalmente.
                    </Box>

                    <Box>
                        Sempre use protetor térmico.
                    </Box>
                </div>  
            </div>

            <div className="fazer">
                <div className="tit">
                    O que não fazer?
                </div>

                <div className="box">
                    <Box>
                        Pentear o cabelo seco, <br/> principalmente cacheado.
                    </Box>

                    <Box>
                        Usar secador e chapinha <br/> todos os dias.
                    </Box>

                    <Box>
                        Químicas em excesso.
                    </Box>
                </div>   

                <div className="box">
                    <Box>
                        Dormir com o cabelo <br/> molhado.
                    </Box>

                    <Box>
                        Prender o cabelo com <br/> elásticos muito apertados.
                    </Box>

                    <Box>
                       Passar condicionador <br/> no couro cabeludo.
                    </Box>
                </div>  
            </div>

            <Rodape/>

       </Container>
    )
}