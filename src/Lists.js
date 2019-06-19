import React from 'react';
import Filtros from './Filtros';
import './datos.js';
import AnimalCard from './AnimalCard';


class Lists extends React.Component {

  render() {
    return (
      <div>
        <section className="products">
          <div className="container">
            <div className="row">
              <Filtros />
              <div className="col col-12 col-sm-8 col-md-8">
                <div className="row">
                  {this.props.animales.map(animal => <AnimalCard goToAnimal={this.props.goToAnimal} animal={animal} key={animal.id} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Lists;