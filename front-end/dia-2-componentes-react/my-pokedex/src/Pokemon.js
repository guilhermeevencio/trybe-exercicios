import React from "react";

export default class PokeDiv extends React.Component {
    render() {
        const arr = this.props.pokeData;
        const MappingPokemons = arr.map(({ id, name, type, averageWeight, image }) => {
            return (
                <section className="pokemons" key={id}>
                    <div>
                        <p>{name}</p>
                        <p>{type}</p>
                        <p>Average weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
                    </div>
                    <img src={image} alt={`imagem do pokemon ${name}`}></img>
                </section>
            )
        })

        return (
            MappingPokemons
        )
    }
}