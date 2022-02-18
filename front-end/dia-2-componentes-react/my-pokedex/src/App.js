import './App.css';
import React from 'react'
import RenderingPokemon from "./Pokedex"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RenderingPokemon />
      </div>
    )
  }
}

export default App;
