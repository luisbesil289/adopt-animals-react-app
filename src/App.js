import React from 'react';
import './App.css';
import Navegacion from './Navegacion.js';
import Logo from './Logo.js';



class App extends React.Component {
  render() {
    return (
      <div>      
        <Navegacion />
        <Logo />
      </div>
    )
  }
}
export default App;

