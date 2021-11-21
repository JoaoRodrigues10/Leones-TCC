import { Container } from "./styled"
import Cabecalho from '../../components/cabecalho'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <Cabecalho />
            <Container>
                <div className="faixa1">
            <div className="faixa-cabelo">
                <div className="text-cabelo">
                    Sinta-se incrível
                </div>
            </div>
            </div>

            <div className="faixa2">
                <div className="titulo">
                    Equipe Leones
                </div>

                <div className="equipe">
                    <img src="/assets/images/equipe.png" alt="" />

                    <div className="desc">
                        <div className="desc2">
                            “Além do privilegio de fazer todos os dias <br />
                            um trabalho gratificante e de auto estima, <br />
                            estamos rodeadas de pessoas e parcerias <br />
                            maravilhosas que só acrescentam <br />
                            felicidade aos nossos dias. O maior <br />
                            tesouro da equipe Leones foram as <br />
                            pessoas. Conquistamos clientes, mas <br />
                            também, muitas amizades, que confiam <br />
                            na seriedade do nosso trabalho”
                        </div>

                        <div className="desc2">
                            Amanda Rocha
                        </div>
                    </div>
                </div>
            </div>

            <div className="faixa3">
                <img src="/assets/images/salao.png" alt="" />

                <div className="desc">
                    <div className="titulo">O Salão</div>

                    <div className="desc2">
                        Criado em 2021, o Leones é um salão premiado e conceituado <br />
                        que prima pela qualidade e bom gosto nos seus serviços.
                    </div>

                    <div className="desc2">
                        Um empreendimento de alto padrão, que conta com <br />
                        profissionais renomados e o que de melhor existe em produtos <br />
                        cosméticos, oferecendo mais de 30 serviços para cabelo, <br />
                        barbearia, manicure, pedicure.
                    </div>

                    <div className="desc2">
                        O salão possui uma equipe de profissionais experientes <br />
                        e atualizados abrangendo todas as áreas da beleza. O Leones <br />
                        já é referencia na cidade como um dos salões com <br />
                        atendimento de altíssima qualidade sempre preservando a <br />
                        individualidade de cada cliente.
                    </div>
                </div>
            </div>

            <div className="faixa4">
                <div className="titulo2">
                    Destaques
                </div>

                <div className="destaques">
                    <div className="box">
                        <img src="/assets/images/unha1.png" alt="" />

                        <div className="des">
                            Muito além da beleza, manter as unhas limpas,
                            saudáveis e bem cuidadas pode prevenir uma
                            série de infecções de fungos que se alimentam
                            da queratina e até mesmo a micose.
                            Deixamos algumas dicas pra você que 
                            não consegue manter as unhas grandes e fortes.
                        </div>

                            <Link to="/manicureDicas">
                                <button>Ver Mais</button>
                            </Link>
                    </div>

                    <div className="box">
                        <img src="/assets/images/cabelo.png" alt="" />

                        <div className="des">
                            Os tratamentos capilares devolvem nutrientes
                            para o nosso cabelo, assim evitando o frizz
                            e mantendo alinhado. Assim como um bom corte
                            para retirar pontas finas e duplas e deixar
                            o cabelo com um aspecto mais volumoso.
                            Para saber como manter isso dê uma 
                            nas nossas dicas.
                        </div>
                        
                        <Link to="/leo">
                            <button>Ver Mais</button>
                        </Link>
                    </div>

                    <div className="box">
                        <img src="/assets/images/barbearia1.png" alt="" />

                        <div className="des">
                            O Leones Salão de Beleza está de cara nova, e
                            acaba de inaugurar um espaço masculino, moderno e
                            equipado, para atender homens de bom gosto. 
                            Confira aqui algumas dicas de como manter
                            sua barba em casa.
                        </div>

                        <Link to="/barbearia">
                            <button>Ver Mais</button>
                        </Link>
                    </div>
                </div>

                <div className="marcas">
                    <a href="https://www.sebastianprofessional.com/pt-BR">
                    <img src="/assets/images/sebastian.png" alt="" />
                    </a>
                    <a href="https://www.joico.com.br">
                    <img src="/assets/images/joico.png" alt="" />
                    </a>
                    <a href="https://loja.wella.com.br/">
                    <img src="/assets/images/wella.png" alt="" />
                    </a>
                    <a href="https://cadiveu.com/">
                    <img src="/assets/images/cadiveu.png" alt="" />
                    </a>
                    <a href="https://br.trussprofessional.com/">
                    <img src="/assets/images/truss.png" alt="" />
                    </a>
                </div>
            </div>

            <div className="faixa5">
                <div className="rodape">
                    <div className="tit">
                    HORÁRIO DE FUNCIONAMENTO
                    </div>

                    <div className="info">
                    SEGUNDA À SÁBADO: 08h às 21h30 <br />
                    DOMINDOS E FERIADOS: 08h às 21h30
                    </div>

                    <div className="tit2">
                    CONTATO
                    </div>

                    <div className="info">
                    (11) 1111.1111 | (11) 1111.1111 | (11) 11111.1111 <br />
                    Shopping Jardim Sul | Piso Térreo <br />
                    Praça Nossa Senhora, 120 - Loja 127 A/B <br />
                    Jardim da Paz | São Paulo, Brasil
                    </div>
                </div>

            <div className="logo-rodape">
                <img src="/assets/images/logo2.png" alt="" />
            </div>
            </div>
            </Container>
        </div>
    )
}