import React from 'react';
import './App.css';
import Navegacion from './Navegacion.js';
import Logo from './Logo.js';
import Filtros from './Filtros.js';
import Footer from './Footer.js';


class App extends React.Component {
  render() {
    return (
      <div>      
        <Navegacion />
        <Logo />
        <Filtros />
        <Footer />
      </div>
    )
  }
}
export default App;

