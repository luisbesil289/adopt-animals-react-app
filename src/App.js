import React from 'react';
import './App.css';
import Logo from './Logo.js';
import NewAnimal from './NewAnimal.js';
import Footer from './Footer.js';
import Lists from './Lists';
import ListsWishlist from './ListsWishlist';
import Animal from './Animal';
import Test from './Test';
import ListBlogs from './ListBlogs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.animales = [
      {
        id: 1,
        nombre: 'Misha',
        tipo: 'cat',
        raza: 'Mau Egipcio',
        barrio: 'Cordón',
        sexo: 'H',
        fecha: '2019-5-16',
        ojos: 'Marrones',
        pelo: 'Marrón',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_misha_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_misha_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_misha_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_misha_04.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      },
      {
        id: 2,
        nombre: 'Roberto',
        tipo: 'dog',
        raza: 'Caniche',
        barrio: 'Cordón',
        sexo: 'M',
        fecha: '2019-3-16',
        ojos: 'Marrones',
        pelo: 'Blanco',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_roberto_04.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_roberto_01.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_roberto_02.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_roberto_03.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      },
      {
        id: 3,
        nombre: 'Alf',
        tipo: 'dog',
        raza: 'Golden retriever',
        barrio: 'Centro',
        sexo: 'M',
        fecha: '2017-6-16',
        ojos: 'Marrones',
        pelo: 'Beije',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_alf_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_alf_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_alf_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_alf_04.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      },
      {
        id: 4,
        nombre: 'Burbuja',
        tipo: 'dog',
        raza: 'Boxer',
        barrio: 'Centro',
        sexo: 'H',
        fecha: '2016-6-16',
        ojos: 'Marrones',
        pelo: 'Atigrado',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_burbuja_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_burbuja_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_burbuja_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_burbuja_04.jpg'
          }],
        descripcion: 'Toda si vida intentó ser bueno. Y es cierto que muchas veces falló... Despues de todo él era solo un humano, no era un perro como yo.'
      },
      {
        id: 5,
        nombre: 'Tupac',
        tipo: 'cat',
        raza: 'Siames',
        barrio: 'Pocitos',
        sexo: 'M',
        fecha: '2015-6-16',
        ojos: 'Azules',
        pelo: 'Beige',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_tupac_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_tupac_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_tupac_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_tupac_04.jpg'
          }],
        descripcion: 'es un hermoso y tierno perrito el cual es pequeñito y muy cariñoso, no es agresivo por el contrario es muy juguetón, a pesar de tener un pelaje abultado y blanco disfruta mucho recostarse bajo el sol de la tarde, generalmente cuando tiene hambre llora un poco para llamar la atención y que le den su comida no le gusta quedarse solo muy por el contrario le gusta que lo saquen a pasear sin su correa.'
      },
      {
        id: 6,
        nombre: 'Eminem',
        tipo: 'dog',
        raza: 'Pug',
        barrio: 'Pocitos',
        sexo: 'M',
        fecha: '2014-6-16',
        ojos: 'Marrones',
        pelo: 'Negro',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_eminem_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_eminem_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_eminem_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_eminem_04.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      },
      {
        id: 7,
        nombre: 'Rita',
        tipo: 'dog',
        raza: 'chihuahua',
        barrio: 'Cordón',
        sexo: 'H',
        fecha: '2013-6-16',
        ojos: 'Negros',
        pelo: 'Gris',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            id: 1,
            fotito: 'assets/carrusel_rita_01.jpg'
          },
          {
            id: 2,
            fotito: 'assets/carrusel_rita_02.jpg'
          },
          {
            id: 3,
            fotito: 'assets/carrusel_rita_03.jpg'
          },
          {
            id: 4,
            fotito: 'assets/carrusel_rita_04.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      }

    ];

    this.wishlist = []; //Array que carga cada AnimalCard agregada a la lista Wishlist

    this.blog = [{
      id: 1,
      titulo: 'Hermosos Gatitos',
      familia: 'Rodriguez',
      fecha: '2013-6-16',
      foto: 'assets/gatos_familia_01.jpg',
      comentario: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    }, {
      id: 2,
      titulo: 'Se agrando la familia',
      familia: 'Lopez',
      fecha: '2018-6-16',
      foto: 'assets/perro_familia_01.jpg',
      comentario: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    }];

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
      unAnimal: unAnimal
    });
  }

  goToWishlist = () => {
    this.setState({
      section: 4
    });
  }

  goToBlog = () => {
    this.setState({
      section: 5
    });
  }

  goToTest = () => {
    this.setState({
      section: 6
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
      return <ListsWishlist goToWishlist={this.goToWishlist} wishlist={this.wishlist} removeToWishlist={this.removeToWishlist} />;
    }

    if (this.state.section === 5) {
      return <ListBlogs blog={this.blog} addToBlog={this.addToBlog} />;
    }

    if (this.state.section === 6) {
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

  getNextBlogId() {
    var productWithHighestId = this.blog.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  newAnimal = (newAnimal) => {
    this.animales.push({
      id: this.getNextAnimalId(),
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
    if (this.wishlist.indexOf(animal) === -1) { //este IF evita que el mismo animal se cawrgue mas de una vez al hacer click
      this.wishlist.push(animal)
    }
  }

  removeToWishlist = (animal) => {
    var i = this.wishlist.indexOf(animal);
    this.wishlist.splice(i, 1);
    this.goToWishlist();
  }

  addToBlog = (newBlog) => {
    this.blog.push({
      id: this.getNextBlogId(),
      titulo: newBlog.titulo,
      familia: newBlog.familia,
      fecha: newBlog.fecha,
      foto: newBlog.foto,
      comentario: newBlog.comentario
    }
    )
    return <ListBlogs blog={this.blog} addToBlog={this.addToBlog} />;
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
                <a className="nav-link" href="#Test" onClick={this.goToTest}>Test</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#Wishlist" onClick={this.goToWishlist}>Wishlist <span className="sr-only"></span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#ListBlogs" onClick={this.goToBlog}>Blog <span className="sr-only"></span></a>
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



