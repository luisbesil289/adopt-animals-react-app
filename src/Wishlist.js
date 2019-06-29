import React from 'react'
import './Wishlist.css';


class Wishlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unAnimal: this.props.animal
        };
    }
    render() {
        return (
            <div className="col col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card cardLista">
                    <div className="card-body">
                        <img src={this.props.animal.foto[0].fotito} className="rounded-circle mr-3" height="70px" width="80px" alt="avatar"></img>
                        <hr />
                        <h3 className="card-title">{this.props.animal.nombre}</h3>
                        <p className="card-text" id="pCardText">{this.props.animal.fecha}</p>
                        <h4 className="card-title">{this.props.animal.raza}</h4>
                        <hr />
                        <h3 className="card-title">Contacto</h3>
                        <p className="card-text">{this.props.animal.nombreContacto}</p>
                        <p className="card-text">{this.props.animal.telefonoContacto}</p>
                        <p className="card-text">{this.props.animal.emailContacto}</p>
                        <hr />
                        <button type="button" onClick={(e) => this.props.removeToWishlist(this.state.unAnimal, e)} className="btn btn-warning">Quitar</button>
                        <hr />
                        <button type="button" className="btn btn-success btn-block btn" onClick={(e) => this.props.removeToAnimales(this.state.unAnimal, e)}>Adoptar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wishlist