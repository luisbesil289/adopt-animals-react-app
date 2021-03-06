import React from 'react';
import './App.css';
import Logo from './Logo.js';
import NewAnimal from './NewAnimal.js';
import Footer from './Footer.js';
import Lists from './Lists';
import ListsWishlist from './ListsWishlist';
import Animal from './Animal';
import BlogsList from './BlogsList';
import Felicidades from './Felicidades';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      section: 1, // Seccion que inicia el listado de animales
      wishlist: [], //Array que carga cada AnimalCard agregada a la lista Wishlist,
      blog: [{ //Array con 2 blog de ejemplo
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
      }],
      animales: [
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
          descripcion: 'Toda su vida intentó ser bueno. Y es cierto que muchas veces falló... Despues de todo él era solo un humano, no era un perro como yo.'
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
          descripcion: 'Es un hermoso y tierno gatito el cual es pequeñito y muy cariñoso, no es agresivo por el contrario es muy juguetón.'
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
          descripcion: 'Perro amante de las flores sobre todo, las que se fuman. Amistoso por demás, se pasa las horas buscando con quien jugar.'
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

      ]
    });
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

  goToFelicidades = (animal) => {
    this.setState({
      section: 6,
      animal: animal
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Lists goToAnimal={this.goToAnimal} animales={this.state.animales} />;
    }

    if (this.state.section === 2) {
      return <NewAnimal newAnimal={this.newAnimal} />;
    }

    if (this.state.section === 3) {
      return <Animal addToWishlist={this.addToWishlist} unAnimal={this.state.unAnimal} removeToAnimales={this.removeToAnimales} />;
    }

    if (this.state.section === 4) {
      return <ListsWishlist goToWishlist={this.goToWishlist} wishlist={this.state.wishlist} removeToWishlist={this.removeToWishlist} removeToAnimales={this.removeToAnimales} />;
    }

    if (this.state.section === 5) {
      return <BlogsList blog={this.state.blog} addToBlog={this.addToBlog} />;
    }

    if (this.state.section === 6) {
      return <Felicidades animal={this.state.animal} />;
    }

  }

  getNextAnimalId() {
    var productWithHighestId = this.state.animales.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  getNextBlogId() {
    var productWithHighestId = this.state.blog.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  newAnimal = (newAnimal) => {
    this.setState({
      animales: [...this.state.animales, {
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
        descripcion: newAnimal.descripcion
      }]
    });
  }

  removeToAnimales = (animal) => {
    var i = this.state.animales.indexOf(animal);
    this.state.animales.splice(i, 1);
    this.goToFelicidades(animal);
  }


  addToWishlist = (animal) => {
    if (this.state.wishlist.indexOf(animal) === -1) { //este IF evita que el mismo animal se cawrgue mas de una vez al hacer click
      this.state.wishlist.push(animal)
    }
  }

  removeToWishlist = (animal) => {
    var i = this.state.wishlist.indexOf(animal);
    this.state.wishlist.splice(i, 1);
    this.goToWishlist();
  }

  addToBlog = (newBlog) => {
    this.setState({
      blog: [...this.state.blog, {
        id: this.getNextBlogId(),
        titulo: newBlog.titulo,
        familia: newBlog.familia,
        fecha: newBlog.fecha,
        foto: 'assets/gatos_familia_01.jpg',
        comentario: newBlog.comentario
      }]
    });
  }


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark" id="menuPrincipal">
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



