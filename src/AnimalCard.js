import React from 'react';
import './animalCard.css';

class AnimalCard extends React.Component { 
   
  onClick() {
    this.refs.List.goToAnimal() // undefined
  }

  
  render() {
    return (
      <React.Fragment>
        <div className="col col-12 col-sm-12 col-md-6 col-lg-4">
          <div className="card cardLista">
            <img src={this.props.animal.foto} className="card-img-top" alt="... "></img>
            <div className="card-body">
              <h5 className="card-title">{this.props.animal.nombre}</h5>
              <p className="card-text">{this.props.animal.descripcion}</p>              
              <button className="btn btn-primary" onClick={this.onClick.bind(this)}>Ver</button>
            </div>
          </div>          
        </div>       
      </React.Fragment>
    );
  }
}

export default AnimalCard;