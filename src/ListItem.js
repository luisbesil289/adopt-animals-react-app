import React from 'react';

class ListItem extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text">{this.props.product.description}</p>
        </React.Fragment>
      );
    }
  }
  
export default ListItem;