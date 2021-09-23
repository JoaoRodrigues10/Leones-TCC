import { Container } from "./styled"

export default function Home() {

    return (
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
                O Leones Salão de Beleza está de cara nova, e <br />
                acaba de inaugurar um espaço masculino, moderno e <br />
                equipado, para atender homens de bom gosto. Com <br />
                atendimento diferenciado, os profissionais da Leones <br />
                Barbershop estão antenados com as tendências atuais <br />
                em barba e cortes de cabelo, além de oferecer <br />
                serviços como Barboterapia.
            </div>

            <button>Ver Mais</button>
            </div>

            <div className="box">
            <img src="/assets/images/cabelo.png" alt="" />

            <div className="des">
                O Leones Salão de Beleza está de cara nova, e <br />
                acaba de inaugurar um espaço masculino, moderno e <br />
                equipado, para atender homens de bom gosto. Com <br />
                atendimento diferenciado, os profissionais da Leones <br />
                Barbershop estão antenados com as tendências atuais <br />
                em barba e cortes de cabelo, além de oferecer <br />
                serviços como Barboterapia.
            </div>

            <button>Ver Mais</button>
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

            <button>Ver Mais</button>
            </div>
        </div>

        <div className="marcas">
            <img src="/assets/images/sebastian.png" alt="" />
            <img src="/assets/images/joico.png" alt="" />
            <img src="/assets/images/wella.png" alt="" />
            <img src="/assets/images/cadiveu.png" alt="" />
            <img src="/assets/images/truss.png" alt="" />
        </div>
        </div>

        <div className="faixa5">
        <div className="rodape">
            <div className="tit">
            HORÁRIO DE FUNCIONAMENTO
            </div>

            <div className="info">
            SEGUNDA À SÁBADO: 10h às 22h <br />
            DOMINDOS E FERIADOS: 14h às 20h
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
    )
}