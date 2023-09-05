import Styled from './javadevdd.module.css'

const pessoas = [{
    nome: "Felispe",
    nota: 0
},{
    nome: "Pesdro",
    nota: 1
},{
    nome: "Refri Coca cola",
    nota: 0
},{
    nome: "Amanda",
    nota: 1
}];
  
export default function Lista() {
    return (
      <div className={Styled.center}>
      <div className={Styled.dive}>
       <center> <h1>Atividades Concluidas</h1> </center>
        <ul>
          {pessoas.map((pessoa, index) => (
            <li key={index}>
              {pessoa.nota === 1 ? (
                <>
                <h3> <del> {pessoa.nome} </del>  ‎ ‎ ‎ Feito </h3>
                </>
              ) : (
                <h3> {pessoa.nome} </h3>
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  }