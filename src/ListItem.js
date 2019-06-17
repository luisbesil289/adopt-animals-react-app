import React from 'react';
import './listItem.css';

class ListItem extends React.Component {
    render() {
      return (
        <React.Fragment>
          <img src={this.props.product.foto} className="card-img-top" alt="... "></img>
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.description}</p>
        </React.Fragment>
      );
    }
  }

export default ListItem;

/* <div className="col col-12 col-sm-10 col-md-10">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4">
                        <ListItem name></ListItem>
                        <div className="card cardLista">
                            <img src="assets/dog_10.jpg" className="card-img-top" alt="... "></img>
                            <div className="card-body">
                                <h5 className="card-title">Max</h5>
                                <p className="card-text">
                                    Some quicktitle and make up the bulk of the card's content.Some quicktitle and make up the bulk of the card's content.Some quicktitle and make up the bulk of the card's content.
                                        </p>
                                <a href="animal.html" className="btn btn-primary btn-block">Ver</a>
                            </div>
                        </div>
                    </div>
                                      
                </div>                
            </div> */