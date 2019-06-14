import React from 'react';
import './App.css';
import Navegacion from './Navegacion.js';
import Logo from './Logo.js';
import Filtros from './Filtros.js';
import List from './List.js';
import Footer from './Footer.js';



class App extends React.Component {
  render() {
    return (
      <div>
        <Navegacion />
        <Logo />
        <div className="container">
          <div className="row">
            <Filtros />
            <List />            
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;

