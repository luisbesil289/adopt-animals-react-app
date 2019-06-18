import React from 'react';
import List from './List';
import Filtros from './Filtros';
import './datos.js';


class Lists extends React.Component {
 constructor(props){
  super(props);
  this.animales = [
    {
      id: 1,
      nombre: 'Misha',
      tipo: 'Roberto',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/cat_03.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    },
    {
      id: 2,
      nombre: 'Roberto',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_11.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'

    },
    {
      id: 3,
      nombre: 'Alf',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_06.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    },
    {
      id: 4,
      nombre: 'Alf',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_07.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    },
    {
      id: 5,
      nombre: 'Alf',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_08.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    },
    {
      id: 6,
      nombre: 'Alf',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_09.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    },
    {
      id: 7,
      nombre: 'Alf',
      tipo: 'dog',
      raza: 'Caniche',
      barrio: 'Cordón',
      sexo: 'M',
      fecha: '16/06/2014',
      ojos: 'Marrones',
      pelo: 'Marrón',
      nombreContacto: 'Juan Carlos Rodriguez',
      telefonoContacto: '094 236 444',
      emailContacto: 'l.besil@hotmail.com',
      foto: 'assets/dog_10.jpg',
      descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
    }
  ];
 }

 addNewProduct = (newAnimal) => {
  this.setState({
    animales: [...this.state.animales, {
      id: this.getNextProductId(),
      name: newAnimal.name
    }]
  });
}

  render() {
    return (
      <div>
        <section className="products">
          <div className="container">
            <div className="row">
              <Filtros />
              <div className="col col-12 col-sm-8 col-md-8">
                <div className="row">
                  {this.animales.map(animal => <List animal={animal} key={animal.id} />)}
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