import React from 'react';
import Filtros from './Filtros';
import './datos.js';
import AnimalCard from './AnimalCard';


class Lists extends React.Component {
  

  render() {
     /*var filteredList = this.props.animales
      .filter(animal => animal.nombre === null || animal.nombre === this.props.filters.nombre)
      .filter(animal => animal.raza === this.props.filters.raza)
      .filter(animal => animal.raza === this.props.filters.raza)
      .filter(animal => animal.raza === this.props.filters.raza)

      .sort() filteredList*/
    return (
      <div className="container-fluid">
        <div className="row">
          <Filtros pNombre={this.pNombre}/>
          <div className="col col-12 col-sm-8 col-md-8">
            <div className="row">
              {this.props.animales.map(animal => <AnimalCard goToAnimal={this.props.goToAnimal} animal={animal} key={animal.id} />)}
            </div>
          </div>
          <aside className="serchVerticalR col col-12 col-sm-4 col-md-2 col-lg-2">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_01.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_02.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
          </aside>
        </div>
      </div>
    );
  }
}

export default Lists;