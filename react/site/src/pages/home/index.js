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
                    Muito além da beleza, manter as unhas limpas,<br/>
                    saudáveis e bem cuidadas pode prevenir uma<br/>
                    série de infecções de fungos que se alimentam<br/>
                    da queratina e até mesmo a micose.<br/>
                    O nosso salão possui ótimos profissionais<br/>
                    para que você não precise se preocupar quando<br/>
                    tiver algum evento.
                </div>

                    <Link to="/manicure e pedicure">
                        <button>Ver Mais</button>
                    </Link>
              </div>

                <div className="box">
                <img src="/assets/images/cabelo.png" alt="" />

                <div className="des">
                    Os tratamentos capilares devolvem nutrientes<br/>
                    para o nosso cabelo, assim evitando o frizz<br/>
                    e mantendo alinhado. Assim como um bom corte<br/>
                    para retirar pontas finas e duplas e deixar<br/>
                    o cabelo com um aspecto mais volumoso.<br/>
                    Podemos também mudar a cor dos fios para<br/>
                    dar uma mudada no look.<br/> 
                </div>
                
                <Link to="/quimicas">
                    <button>Ver Mais</button>
                </Link>
                </div>

                <div className="box">
                <img src="/assets/images/barbearia1.png" alt="" />

                <div className="des">
                    O Leones Salão de Beleza está de cara nova, e <br />
                    acaba de inaugurar um espaço masculino, moderno e <br />
                    equipado, para atender homens de bom gosto. Com <br />
                    atendimento diferenciado, os profissionais da Leones <br />
                    Barbershop estão antenados com as tendências atuais <br />
                    em barba e cortes de cabelo, além de oferecer <br />
                    serviços como Barboterapia.
                </div>

                <Link to="/cortesmas">
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