import React from 'react';
import Wishlist from './Wishlist';



class Test extends React.Component {   
  render() {
    return (
      <div>
        <Padre />
    </div>
    );
  }
}

export default Test;

class Padre extends React.Component{
  render() {
    return (
      <div>
        <Hija />
    </div>
    );
  }
}

class Hija extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0
    };
  }

  goToWishlist = () => {
    this.setState({
      section: 4
    });
  }

  currentSection() {    
    if (this.state.section === 4) {      
      return <Wishlist />;
    }
  }

  render() {
    return (
      <div>
        <h3>Card</h3>
        <a className="nav-link" href="#Wishlist" onClick={this.goToWishlist}>Wishlist <span className="sr-only"></span></a>
              
        <button className="btn btn-primary" onClick={this.goToWishlist}>Ver</button>
        {this.currentSection()}
    </div>
    );
  }
}