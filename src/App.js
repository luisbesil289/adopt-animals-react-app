import React from 'react';
import './App.css';
import Logo from './Logo.js';
import NewAnimal from './NewAnimal.js';
import Footer from './Footer.js';
import Lists from './Lists';
import ListsWishlist from './ListsWishlist';
import Animal from './Animal';
import Test from './Test';

class App extends React.Component {
  constructor(props) {
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
        nombre: 'Rogelio',
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

    this.wishlist=[];

    this.state = {
      section: 1
    };

  }


  goToHome = () => {
    this.setState({
      section: 1
    });
  }

  goToNew = () => {
    this.setState({
      section: 2
    });
  }

  goToAnimal = (unAnimal) => {          
    this.setState({
      section: 3,
      unAnimal : unAnimal
    });
  }

  goToWishlist = () => {
    this.setState({
      section: 4
    });
  }

  goToTest = () => {
    this.setState({
      section: 5
    });
  }

  currentSection() {
    /* alert(this.state.section); */

    if (this.state.section === 1) {
      return <Lists goToAnimal={this.goToAnimal} animales={this.animales} />;
    }

    if (this.state.section === 2) {
      return <NewAnimal newAnimal={this.newAnimal} />;
    }

    if (this.state.section === 3) {            
      return <Animal addToWishlist={this.addToWishlist} unAnimal={this.state.unAnimal} />;
    }

    if (this.state.section === 4) {
     return <ListsWishlist goToWishlist={this.goToWishlist} wishlist={this.wishlist} />;
    }

    if (this.state.section === 5) {
      return <Test />;
    }

  }

  getNextAnimalId() {    
    var productWithHighestId = this.animales.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {     
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }

  }
  newAnimal = (newAnimal) => {   
    this.animales.push({ id: this.getNextAnimalId(),
       nombre: newAnimal.name,
        tipo: newAnimal.tipo,
        raza: newAnimal.raza,
        barrio: newAnimal.barrio,
        sexo: newAnimal.sexo,
        fecha: newAnimal.fecha,
        ojos: newAnimal.ojos,
        pelo: newAnimal.pelo,
        nombreContacto: newAnimal.nombreContacto,    
        telefonoContacto: newAnimal.telefonoContacto,
        emailContacto: newAnimal.emailContacto,
        descripcion: newAnimal.descripcion
        
      })    
      console.log(this.animales);
  }

  addToWishlist = (animal) => {    
    this.wishlist.push(animal)
    console.log(this.wishlist);
  }
  
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="/Lists"><img src="assets/Logo-02.png" alt="Smiley face" height={53} width={70}></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#Lists" onClick={this.goToHome}>Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#NewAnimal" onClick={this.goToNew}>Nuevo Animal</a>
              </li>
              <li className="nav-item active">
                {/* <a className="nav-link" href="#Animal" onClick={this.goToAnimal}>Animal</a> */}
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#Wishlist" onClick={this.goToWishlist}>Wishlist <span className="sr-only"></span></a>
              </li>
              <li className="nav-item active">
                {/* <a className="nav-link" href="#Test" onClick={this.goToTest}>Test <span className="sr-only"></span></a> */}
              </li>
            </ul>
            <button className="LogIn btn btn-outline-light" type="submit"> LogIn - Register</button>
          </div>
        </nav>

        <Logo />
        <hr />
        {this.currentSection()}
        <Footer />
      </div>
    )
  }
}
export default App;



