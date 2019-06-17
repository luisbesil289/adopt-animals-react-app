import React from 'react';
import ListItem from './ListItem';


class List extends React.Component {
    render() {
        return (
            <div className="col col-12 col-sm-10 col-md-10">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4">
                        <div className="card cardLista">
                            <div className="card-body">
                            <ListItem product={this.props.product} />
                                <a href="animal.html" className="btn btn-primary btn-block">Ver</a>
                            </div>
                        </div>
                    </div>
                                      
                </div>                
            </div>
          
        );
    }
}

export default List;

/* <div className="col col-12 col-sm-10 col-md-10">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-6 col-lg-4"></div>
          <div className="card">            
            <div className="card-body">
              <ListItem product={this.props.product} />
              <a href="#." className="btn btn-primary">Ver</a>
            </div>
          </div>
          </div>
          </div> */