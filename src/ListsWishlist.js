import React from 'react';
import './datos.js';
import Wishlist from './Wishlist';


class ListsWishlist extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="serchVerticalL col col-2 d-none d-md-block">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_02.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
          </div>
          <div className="col col-12 col-sm-8 col-md-8">
            <div className="row">
              {this.props.wishlist.map(animal => <Wishlist goToWishlist={this.props.goToWishlist} removeToWishlist={this.props.removeToWishlist} animal={animal} key={animal.id} />)}
            </div>
          </div>
          <aside className="serchVerticalR col col-12 col-sm-4 col-md-2 col-lg-2">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_01.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
          </aside>
        </div>
      </div>
    );
  }
}

export default ListsWishlist;