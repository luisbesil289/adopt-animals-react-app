import React from 'react';
import ListItem from './ListItem';


class List extends React.Component {
    render() {
        return (
          <div className="card">
            <img className="card-img-top" width={100} height={180} src="prod.svg" alt="Card cap" />
            <div className="card-body">
              <ListItem product={this.props.product} />
              <a href="#." className="btn btn-primary">Buy</a>
            </div>
          </div>
        );
    }
}

export default List;