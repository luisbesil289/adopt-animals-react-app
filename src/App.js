import React from 'react';
import './App.css';
import Logo from './Logo.js';
import Filtros from './Filtros';
import NewAnimal from './NewAnimal.js';
import Footer from './Footer.js';

import List from './List';


class App extends React.Component {
  constructor(props) {
    super(props);
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

  goToContactUs = () => {
    this.setState({
      section: 3
    });
  }

currentSection() {
    if (this.state.section === 1) {
      return <List />;
    }

    if (this.state.section === 2) {
      return <NewAnimal />;
    }

    if (this.state.section === 3) {
      return <NewAnimal />;
    }
  }


  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                 <a className="navbar-brand" href="/List"><img src="assets/Logo-02.png" alt="Smiley face" height={53} width={70}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#List" onClick={this.goToHome}>Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#NewAnimal" onClick={this.goToNew}>Nuevo Animal</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/List">Blog <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/List">Lista de deseos <span className="sr-only"></span></a>
                        </li>
                    </ul>
                    <button className="LogIn btn btn-outline-light" type="submit"> LogIn - Register</button>
                </div>
            </nav>   
                 
        <Logo />
        <hr />
        {this.currentSection()}
             
               
          </div>
        </div>
        <Footer /> 
      </div>
    )
  }
}
export default App;

