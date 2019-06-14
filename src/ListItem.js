import React from 'react';


class ListItem extends React.Component {
    render() {
        return (
            <div>
                <div class="col col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="card cardLista">
                        <img src="assets/dog_10.jpg" className="card-img-top" alt="... "></img>
                        <div className="card-body">
                            <h5 className="card-title">Max</h5>
                            <p className="card-text">
                                Some quicktitle and make up the bulk of the card's content.
                                        </p>
                            <a href="animal.html" className="btn btn-primary btn-block">Ver</a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default ListItem;