import React from 'react';
import List from './List';


class Lists extends React.Component {
    constructor(props) {
      super(props);
      this.products = [
        {
          id: 1,
          name: 'Car',
          description: 'This is the awesome red car you always wanted to buy.',
          foto: 'assets/dog_01.jpg'
        }/* ,
        {
          id: 2,
          name: 'House',
          description: 'Buy this house now and you will get 50% off.'
          
        },
        {
          id: 3,
          name: 'Pencil',
          description: 'You can also buy the pack of 10 colors for the price of 5.'
        },
        {
          id: 4,
          name: 'Camera',
          description: 'This brand new 50MP camera with x30 zoom is awesome!'
        },
        {
          id: 5,
          name: 'Mobile Phone',
          description: 'Now you can receive messages from far away!'
        },
        {
          id: 6,
          name: 'Torch',
          description: 'Now you can see at night. Warning do not use indoors!'
        },
        {
          id: 7,
          name: 'Coke',
          description: 'My coke'
        } */
      ];
    }
  
    render() {
      return (
        <section className="products">
          {this.products.map(product => <List product={product} key={product.id} />)}
        </section>
      );
    }
  }
  
export default Lists;