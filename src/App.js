import './App.css';
import { useState } from 'react';

function App() {
  const [atividades, setAtividades] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState('');

  const adicionarAtividade = () => {
    if (novaAtividade.trim() !== '') {
      setAtividades([...atividades, novaAtividade]);
      setNovaAtividade('');
    }
  };

  return (
    <div className="App">
      <header className="main-header">
        <h1>Gestão de Atividades - React</h1>
        <p>Atividade 7 - Desenvolvimento Web</p>
      </header>

      <main className="content-wrapper">
        <section className="activity-card">
          <h2>Lista de Tarefas Acadêmicas</h2>
          <div className="input-box">
            <input 
              type="text" 
              value={novaAtividade} 
              onChange={(e) => setNovaAtividade(e.target.value)} 
              placeholder="Ex: estudar para prova"
            />
            <button onClick={adicionarAtividade}>Adicionar</button>
          </div>
          
          <ul className="activity-list">
            {atividades.length === 0 ? (
              <p className="empty-msg">Nenhuma atividade registrada.</p>
            ) : (
              atividades.map((item, index) => (
                <li key={index} className="list-item">{item}</li>
              ))
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;