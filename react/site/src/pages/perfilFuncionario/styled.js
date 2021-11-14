import styled from 'styled-components';

const Container = styled.div`
background-color: #3B70A2;

  padding-top: 2em;

.faixa1{
  display: flex;
  flex-direction: row;    
  
  background-color: #174580;
  color: white;

  padding: 2.5em;
  margin: 0em 2em 2em;
  border-radius: 20px;
  
  display: flex;
  align-items: center;
}

.dadosperfil{     
    padding-left: 2.5em;

    
  }

.dados{
    font-size: 35px;

}

.dados2{
  font-size: 30px;
}

.fotoperfil{
    padding-left: 0.5em;
}
.fotoperfil img{
  border-radius: 50%;
  width: 12em;
  height: 12em;
}

.faixa2{
  background-color: #174580;
  color: white;

  border-radius: 20px;

  padding: 2.5em;
  margin: 2em;
}

.textaviso{
  font-size: 30px;
}

.avisos{
    background-color: white;
    color: black;
    font-size: 20px;

    margin: 0.1em;
    padding: 0.5em;

    justify-content: center;
    align-items: center;
}

.faixa3{
  background-color: #174580;
  color: white; 

  border-radius: 20px;

  margin: 2.5em;
  padding: 2em;
}

.minhaagenda{
    font-size: 30px;

    padding-left: 10px;
}

.table-user{
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 1em;

}   

.table-dispo{
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 1em;

}

.faixa4{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  background-color: #174580;
  color: white; 

  border-radius: 20px;

  margin: 2.5em;
  padding: 2em;
}

thead{
  background-color: #3B70A2;
}

table {
  margin-top: 10px;
}

tbody {
   background-color: #DDDDDD;
}

.dipo tr{
  
}


td {
  text-align: left;
  color: black;
  font-weight: 600;

  
  padding: 2em;

  padding-left: 3em;
  padding-right: 3em;

}

.serv {
  color: white;
  font-size: 30px;
}

.table-dispo td {
  text-align: left;
  color: black;
  font-weight: 600;

  
  padding: 2em;

  padding-left: 3em;
  padding-right: 3.3em;

}

th {
  text-align: center;
  color: #ffff;
  font-weight: 600;

  padding: 2em;

  padding-left: 3.7em;
  padding-right: 3.77em;
} 

.faixa1 button {
  background: none;
  border: none;
  text-decoration: underline;
  color: white;
  cursor: pointer;
}

.acao > button {
  background-color: #E3B052;
  border-radius: 50px;
  border: none;
    }

    .input-file {
    position: relative;
  }
  .input-file div {
    padding: .2em 1em;
    border-radius: 1em;
    border: none;
    outline: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
  input[type=file] {
    visibility: hidden;
    position: absolute;
  }

  .usuario{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 500px){
    .fotoperfil img{
      width: 5em;
      height: 5em;
    }

    .dados{
      font-size: 20px;
    }

    .avisotext{
      font-size: 10px;
      margin: 10px 0px 0px 0px;
    }

    .textaviso{
      font-size: 20px;
    }

    .minhaagenda{
      font-size: 15px;
      margin: 0px;
      padding: 0px;
    }

    th {
      font-size: 9px;
      font-weight: 600;
    
      padding: 1em;
    
      padding-left: 0.8em;
      padding-right: 1.1em;
    }
    
    td {
      font-weight: 600;
    
      padding: 0px;
    
      padding-left: 10.4px;
      padding-right: 11.5px;

      font-size: 10px;
    
    }

    td img{
      width: 10px;
      height: 10px;
    }

    td button{
      width: 20px;
      height: 20px;
    }

    .table-user{
      padding: 0px;
    }
    
  }
    
`
export { Container }