import React from 'react';
import './datos.js';
import Wishlist from './Wishlist';


class ListsWishlist extends React.Component {

  render() {
    return (
      <div>
        <section className="wishlist">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col col-12 col-sm-4 col-md-4">
                <div className="card card-wishlist">
                  {this.props.wishlist.map(animal => <Wishlist goToWishlist={this.props.goToWishlist} animal={animal} key={animal.id} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ListsWishlist;