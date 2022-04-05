import './App.css';

const Task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}
const compromissos = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
function App() {
  return (
    <ul>{compromissos.map((compromisso, index) => Task(compromisso, index))}</ul>
  );
}

export default App;
