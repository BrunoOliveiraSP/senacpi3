import './App.css';
import Aluno from './Aluno';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> Alunos </h1>

        <Aluno nome="Bruno de Oliveira" formacao="Analista de Sistemas" />
        <Aluno nome="João José" formacao="Engenheiro de Software" />
        
      </header>
      
    </div>
  );

}

