import styled from "styled-components";

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

thead{
  background-color: #3B70A2;
}

table {
  margin-top: 10px;
}

tbody {
   background-color: #DDDDDD;
}

td {
  text-align: left;
  color: black;
  font-weight: 600;

  padding: 2em;

  padding-left: 3em;
  padding-right: 3.5em;

}

th {
  text-align: center;
  color: #ffff;
  font-weight: 600;

  padding: 2em;

  padding-left: 3.5em;
  padding-right: 3.5em;
} 

button {
  background-color: #E3B052;
  border-radius: 50px;
  border: none;
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
  

`
export { Container }