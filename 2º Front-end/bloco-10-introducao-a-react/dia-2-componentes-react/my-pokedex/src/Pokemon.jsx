import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <div className="conteudo">
        <p> Nome: {this.props.name} </p>
        <p> Tipo: {this.props.type} </p>
        <p> Peso:
          {this.props.averageWeight.value}{" "}
          {this.props.averageWeight.measurementUnit}
        </p>
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}
export default Pokemon;
