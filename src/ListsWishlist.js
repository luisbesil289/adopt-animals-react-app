import React from 'react';
import './datos.js';
import Wishlist from './Wishlist';


class ListsWishlist extends React.Component {

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="serchVerticalL col col-2 d-none d-md-block">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_02.jpg" class="card-img-top" alt="... "></img></a>
            <hr />
          </div>
          <div class="col col-12 col-sm-8 col-md-8">
            <div class="row">
              {this.props.wishlist.map(animal => <Wishlist goToWishlist={this.props.goToWishlist} animal={animal} key={animal.id} />)}
            </div>
          </div>
          <aside class="serchVerticalR col col-12 col-sm-4 col-md-2 col-lg-2">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_01.jpg" class="card-img-top" alt="... "></img></a>
            <hr />
          </aside>
        </div>
      </div>
    );
  }
}

export default ListsWishlist;