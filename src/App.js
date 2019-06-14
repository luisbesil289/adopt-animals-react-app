import React from 'react';
import './App.css';
import Navegacion from './Navegacion.js';
import Logo from './Logo.js';
import Footer from './Footer.js';


class App extends React.Component {
  render() {
    return (
      <div>      
        <Navegacion />
        <Logo />
        <Footer />
      </div>
    )
  }
}
export default App;

