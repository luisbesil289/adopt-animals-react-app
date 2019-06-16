import React from 'react';
import './App.css';
import Navegacion from './Navegacion.js';
import Logo from './Logo.js';
import Filtros from './Filtros.js';
import NewAnimal from './NewAnimal.js';
import Footer from './Footer.js';
import Animal from './Animal';



class App extends React.Component {
  render() {
    return (
      <div>
        <Navegacion />
        
        <Logo />
        <hr />
        <div className="container">
          <div className="row">            
            <Animal />         
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App;

