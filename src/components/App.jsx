import React, { Component } from "react";

import PokemonList from "./PokemonList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "1",
      pokemonList: [],
    };
    //----dont repeat this again ----\\
    this.onSelectTypeChange = this.onSelectTypeChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  //------ function of the class ------ \\
  onSelectTypeChange = (e) => {
    //console.log("EVENT HANDLER", e.target.value);
    this.setState({ type: e.target.value });
  };

  onButtonClick = (e) => {
    e.preventDefault();

    const API_URL = ` https://pokeapi.co/api/v2/type/${this.state.type}`;
    fetch(API_URL)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        //console.log("THIS DATA", data.pokemon);
        this.setState({ pokemonList: data.pokemon });
      })
      .catch((err) => console.log("ERR", err));

    //console.log(this.state.type + "type of pokemon");
  };

  render() {
    //console.log("THE STATE", this.state);
    return (
      <div className="container">
        <div>
          <h5>Pokémon App</h5>
          <form>
            <label>Choose your pokémon type</label>
            <br />
            <select onChange={this.onSelectTypeChange}>
              <option value="1">Normal</option>
              <option value="2 ">Fighting</option>
              <option value="3 ">Flying</option>
              <option value="4 ">Poison</option>
            </select>

            <br />
            <button onClick={this.onButtonClick} className="btn btn-success">
              Search
            </button>
          </form>
          <br />

          <PokemonList pokemonResult={this.state.pokemonList} />
        </div>
      </div>
    );
  }
}

export default App;
