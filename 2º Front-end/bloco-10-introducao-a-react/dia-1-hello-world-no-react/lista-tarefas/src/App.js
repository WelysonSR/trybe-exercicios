import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
function App() {
  return (
    compromissos.map((compromisso) => Task(compromisso))
  );
}

export default App;
