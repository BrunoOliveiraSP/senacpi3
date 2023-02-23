

export default function Aluno(props) {

  return (
    <div>
      <hr />
      <h1>Aluno:</h1>
      <p> {props.nome}  </p>

      <h1> Formação:</h1>
      <p> {props.formacao}</p>
      <hr />
    </div>
  )
}

