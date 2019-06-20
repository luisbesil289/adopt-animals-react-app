import React from 'react'
import './Wishlist.css';


class Wishlist extends React.Component {

    render() {
        return (
            <div className="card-body">
                <img src="assets/dog_10.jpg" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"></img>
                <h4 className="card-title">{this.props.animal.nombre}</h4>
                <p className="card-text">{this.props.animal.fecha}</p>
                <h4 className="card-title">{this.props.animal.raza}</h4>
                <hr />
                <p className="lead">Datos del Contacto</p>
                <ul className=".bg-light">
                    <li className=".bg-light">{this.props.animal.nombreContacto}</li>
                    <li className=".bg-light">{this.props.animal.telefonoContacto}</li>
                    <li className=".bg-light">{this.props.animal.emailContacto}</li>
                </ul>
                <hr />
                <button type="button" className="btn btn-warning">Quitar</button>
                <hr />
                <button type="button" className="btn btn-success btn-block btn">Adoptar</button>

            </div>
        );
    }
}

export default Wishlist