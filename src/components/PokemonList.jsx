import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonList extends Component {
  constructor(props) {
    super(props);
  }

  //-------\\
  renderPokemons = () => {
    let counter = 0;

    return this.props.pokemonResult.map((pokemons) => {
      //console.log(pokemons);
      counter = counter + 1;
      /*return (
        <li key={counter} className="card">
          name:{pokemons.pokemon.name}
        </li>
      );*/
      return (
        <Pokemon
          key={counter}
          url={pokemons.pokemon.url}
          name={pokemons.pokemon.name}
        />
      );
    });
  };
  //-------\\

  render() {
    //console.log(this.props);

    if (this.props.pokemonResult.length > 0) {
      return <ul>{this.renderPokemons()}</ul>;
    }

    return <div>LOADING.....</div>;
  }
}

export default PokemonList;
