import React from 'react';
import Filtros from './Filtros';
import ListItem from './ListItem.1';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.animales = [
            {
              id: 1,
              name: 'Car',
              description: 'This is the awesome red car you always wanted to buy.'
            },
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
            }
        ];
    }

    
    render() {
        return (
            <div className="container">
            <div className="row">    
            <Filtros />
            <div className="col col-12 col-sm-10 col-md-10">               
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="card cardLista">
                            <ListItem animales={this.props.animales} />
                            <img src="assets/dog_10.jpg" className="card-img-top" alt="... "></img>
                            <div className="card-body">
                                <h5 className="card-title">Max</h5>
                                <p className="card-text">
                                    Some quicktitle and make up the bulk of the card's content.Some quicktitle and make up the bulk of the card's content.Some quicktitle and make up the bulk of the card's content.
                                        </p>
                                <a href="#Animal" className="btn btn-primary btn-block">Ver</a>
                            </div>
                        </div>
                    </div>                                       
                </div>                
                </div></div></div>
            

           

        )
    }
}
export default List;