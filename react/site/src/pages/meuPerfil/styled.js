import styled from "styled-components";

const Container = styled.div`
  background-color: #3B50A2;

  padding-top: 2em;

  .remarcar{
    
  }

  .containerperfil{
    padding: 10px 0px;
  }

.faixa1{
  display: flex;
  flex-direction: row;    
  
  background-color: #154580;
  color: white;

  padding: 2.5em;
  margin: 0em 2em 2em;
  border-radius: 20px;
  
  display: flex;
  align-items: center;
}


.dadosperfil{     
  margin: 0px 0px 0px 20px;
    
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #154580;
  color: white;

  border-radius: 20px;

  padding: 2.5em;
  margin: 2em;
}

.textaviso{
  font-size: 30px;

  padding: 0px 0px 15px 0px;
}

.avisos{
    background-color: white;
    color: black;
    font-size: 20px;

    margin: 10px 0px;
    padding: 1em;

    justify-content: center;
    align-items: center;
    width: 900px;
    height: 300px; 
}

.faixa3{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #154580;
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

  padding: 1.1em;

}   

thead{
  background-color: #3B50A2;
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

  padding-left: 3.5em;
  padding-right: 3.5em;

}

th {
  text-align: center;
  color: #ffff;
  font-weight: 600;

  padding: 2em;

  
} 

th:nth-child(1){
  padding-right: 5em;
  padding-left: 2em;

}
th:nth-child(2){
  padding-right: 10em;
  padding-left: 2em;

}
th:nth-child(3){
  padding-right: 5em;
  padding-left: 0em;

}
th:nth-child(4){
  padding-right: 4em;
  padding-left: 2em;

}
th:nth-child(5){
  padding-right: 15em;
  padding-left: 2em;

}


.horarios-dispo {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    .horarios-dispo button {
        font-size: 1em;
        margin: 1em;
        background-color: #e3b052;
        color: #ffffff;
        height: 2em;
        width: 6em;
        border: none;
        cursor: pointer;
        border-radius: 11px;
    }



 .faixa1 button {
  background: none;
  border: none;
  text-decoration: underline;
  color: white;
  cursor: pointer;
}

.acao > button {
  visibility: hidden;
}

tr:hover {
  .acao > button {
    visibility: visible;
  }
}

.acao img{
  width: 20px;
}


.acao > button {
  display: flex;
  align-items: center;
  background-color: #E3B052;
  border-radius: 50px;
  border: none;
  width: 30px;
  height: 30px;
}

    .input-file {
    position: relative;
  }
  .input-file div {
    padding: .2em 1.1em;
    border-radius: 1.1em;
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
    }

    th:nth-child(1){
      padding-right: 1em;
      padding-left: 1em;
    
    }
    th:nth-child(2){
      padding-right: 1em;
      padding-left: 0em;
    
    }
    th:nth-child(3){
      padding-right: 1em;
      padding-left: 1em;
    
    }
    th:nth-child(4){
      padding-right: 1em;
      padding-left: 2em;
    
    }
    th:nth-child(5){
      padding-right: 1.5em;
      padding-left: 1em;
    
    }

    td:nth-child(1){
      padding-right: 1em;
      padding-left: 1em;
    
    }
    td:nth-child(2){
      padding-right: 1em;
      padding-left: 0em;
    
    }
    td:nth-child(3){
      padding-right: 1em;
      padding-left: 0em;
    
    }
    td:nth-child(4){
      padding-right: 1em;
      padding-left: 0em;
    
    }
    td:nth-child(5){
      padding-right: 1em;
      padding-left: 1.8em;
    
    }
    
    
    td {
      font-weight: 600;
    
      padding: 0px;
    
    
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
    
  

    .react-calendar {
      width: 300px !important;
      height: auto;
      max-width: 100% !important;
      font-family: Arial, Helvetica, sans-serif !important;
      
  }

  .react-calendar__tile {
      padding: 1em 0.5em !important;
  }

  .data {
    margin: 10px 0px;
  }

  .avisos{
    width: 300px;
    height: 200px; 
  }

  .acao > button {
    visibility: visible;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
  }

  td {
    padding: 10px;
  }

  .Box-1 {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 10px;
  }

  .Box-2{
    padding: 1em; 
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;   
}
.Alterar{
  
  width: 700px;
  height: 500px;
  margin-left: 0px;
}

.Alterar h1{
  font-size: 15px;
  padding: 0px 30px;
  text-align: center;
}

h1{
        
  padding: 0em;
}
}
  

`
export { Container }