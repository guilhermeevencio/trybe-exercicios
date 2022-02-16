import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';

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
      <Header />
      { ThingsToDo }
    </>
  );
}

export default App;
