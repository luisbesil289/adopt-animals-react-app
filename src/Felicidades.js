import React from 'react';


class Felicidades extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-6 col-md-6">
            <h2>Felicidades, Adopción completada</h2>
            <hr />
            <h1>{this.props.animal.nombre} </h1>
            <img src={this.props.animal.foto[0].fotito} className="d-block w-100" alt="..."></img>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Felicidades;
