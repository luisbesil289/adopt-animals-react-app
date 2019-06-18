import React from 'react';
import './animalCard.css';
import Animal from './Animal';


class AnimalCard extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      section: 0
    };
  } 


  goToAnimal = () => {
    this.setState({
      section: 1
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Animal />;
    }

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
              <a className="btn btn-primary btn-block" href="#Animal" onClick={this.goToAnimal}>Ver</a>              
            </div>
          </div>          
        </div>
        {this.currentSection()}
      </React.Fragment>
    );
  }
}

export default AnimalCard;