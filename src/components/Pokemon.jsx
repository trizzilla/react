import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showValue: false,
      imageURL: "",
      height: 0,
      weight: 0,
    };

    this.onPokeClick = this.onPokeClick.bind(this);
    this.onClosePoke = this.onClosePoke.bind(this);
  }
  onPokeClick = () => {
    //console.log(this.props.url);
    fetch(this.props.url)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);

        this.setState({
          showValue: true,
          height: data.height,
          weight: data.weight,
          imageURL: data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log("IMAGE ERR", err);
      });
  };
  onClosePoke = () => {
    this.setState({ showValue: false });
  };

  render() {
    //console.log(this.state);
    if (!this.state.showValue) {
      return (
        <li onClick={this.onPokeClick} className="card">
          name : {this.props.name}
        </li>
      );
    } else if (this.state.showValue) {
      return (
        <li className="card" onClick={this.onClosePoke}>
          <div className="row">
            <div className="col-6">
              <p>name : {this.props.name}</p>
              <p>height: {this.state.height}</p>
              <p>weight :{this.state.weight}</p>
            </div>
            <div className="col-6">
              <img src={this.state.imageURL} />
            </div>
          </div>
        </li>
      );
    } else {
      <div>LOADING. . . . . </div>;
    }
  }
}

export default Pokemon;
