import pokemons from "./data";
import React from "react";
import PokeDiv from "./Pokemon"

export default class RenderingPokemon extends React.Component {
    render() {
        return (
            <div className="pokemon-list">
                <PokeDiv pokeData={pokemons}/>
            </div>
        )
    }
}