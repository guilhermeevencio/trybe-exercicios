import logo from './logo.svg';
import './App.css';

const Task = (value) => {

  return (
    <li>{value}</li>
  );
}
const tasks = ['estudar', 'trabalhar', 'fazer exercicios'];
const ThingsToDo = tasks.map((e) => Task(e));
function App() {
  return (
    <>
      { ThingsToDo }
    </>
  );
}

export default App;
