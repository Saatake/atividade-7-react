import './App.css';
import { useState } from 'react';

function App() {
  const [contatos] = useState(['Edson', 'Rafael', 'Felipe']);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Listas de Contatos</h1>
      </header>
      <main>
        <ul className="lista-contatos">
          {contatos.map((contato, index) => (
            <li key={index}>{contato}</li>
          ))}
        </ul>
      </main>
      <footer style={{ marginTop: '50px', color: '#666' }}>
        <p>Atividade 7</p>
      </footer>
    </div>
  );
}

export default App;