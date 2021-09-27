import { Container } from "./styled"

export default function CadrastoFun() {
  return (
    <Container>
      <div class="box">
      <div class="container">
        <div class="faixa1">
          <div class="f1-logo">
            <img src="/assets/images/logo.png" alt="" /> 
          </div>
        </div>

        <div class="inscreva-se">
          <div class="titulo"> <h1>Inscreva-se Funcionário</h1> </div>
          <div class="faixa2">
            <div class="f2-nome">
              <input type="text" placeholder="Nome" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Cargo" />
            </div>
            <div class="f2-nome">
              <input type="text"  placeholder="Email" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Telefone" />
            </div>
            <div class="f2-nome">
              <input type="text" placeholder="Senha" />
            </div>
          </div>
        </div>

        <div class="botao">
         <button>ENTRAR</button>
        </div>
      </div>

      <div class="rodape">
        <div class="sobre">
          <div class="rodape-nome"><h1>Sobre</h1></div>
          <div class="rodape-text">
            Leones é um salão de beleza premiado e <br />
            conceituado, criado em 2021. <br />
            Conta com profissionais renomados e o <br />
            que de melhor existe em produtos no <br />
            mercado.
          </div>
        </div>

        <div class="contato">
          <div class="rodape-nome"><h1>Contato</h1></div>
          <div class="rodape-text">
            <div class="rodape-text">
              (11) 1111.1111 | (11) 1111.1111 | (11) 11111.1111
            </div>
            <div class="rodape-text">Shopping Jardim Sul | Piso Térreo</div>
            <div class="rodape-text">
              Praça Nossa Senhora, 120 - Loja 127 A/B
            </div>
            <div class="rodape-text">Jardim da Paz | São Paulo, Brasil</div>
          </div>
        </div>

        <div class="localizacao">
          <div class="rodape-nome"><h1>Localização</h1></div>
          <div class="img-local">
            <a href="https://www.google.com/search?q=loreal&oq=lore&aqs=chrome.0.69i59j69i57j69i59l2.2499j0j1&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=AOaemvLtYmal6KJlVCrlnFZ6x1dIqj_k9Q:1632776225990&rflfq=1&num=10&rldimm=17400208395917912221&lqi=CgZsb3JlYWwiA4gBAVoOIgZsb3JlYWwqBAgCEACSAQVraW9za6oBDhABKgoiBmxvcmVhbCgM&ved=2ahUKEwi_88m3haDzAhVJqpUCHU60DFcQvS56BAgHEBk&rlst=f#rlfi=hd:;si:;mv:[[-22.8545576,-45.8109689],[-23.7355472,-47.128889099999995]]">
            <img src="/assets/images/localizacao.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>

    </Container>
    
  )
}
    
  