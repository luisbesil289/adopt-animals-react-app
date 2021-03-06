import React from 'react';
import AnimalCarrusel from './AnimalCarrusel.js'
import './Animal.css'

class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unAnimal: this.props.unAnimal,
            value: 'enabled'
        };

    }

    handleSubmit = (event) => {
       event.preventDefault();
        this.props.addToWishlist(this.state.unAnimal);
        this.setState({ value: '' });

    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-6">
                        <div className="card cardAnimal card-body">
                            <div className="cardFicha">
                                <h2 className="card-title font-weight-bold">{this.state.unAnimal.nombre}</h2>
                                <h4 className="card-title">{this.state.unAnimal.raza}</h4>
                            </div>
                            <hr />
                            <h4 className="card-text">Características</h4>
                            <ul className="card-text">
                                <li>
                                    <p>Nació el: {this.state.unAnimal.fecha}</p>
                                </li>
                                <li>
                                    <p>Color de pelo: {this.state.unAnimal.pelo}</p>
                                </li>
                                <li>
                                    <p>Color de ojos: {this.state.unAnimal.ojos}</p>
                                </li>
                            </ul>
                            <hr />
                            <p>{this.state.unAnimal.descripcion}</p>
                            <button type="button" disabled={!this.state.value} className="btn btn-secondary btn-block shadow p-1 rounded" onClick={this.handleSubmit.bind(this)}>Agregar a la Wishlist</button>
                            <hr />

                            <h4 className="card-text">Datos del Contacto</h4>
                            <ul className="card-text">
                                <li>
                                    <p>Nombre: {this.state.unAnimal.nombreContacto}</p>
                                </li>
                                <li>
                                    <p>Telefono / Celular: {this.state.unAnimal.telefonoContacto}</p>
                                </li>
                                <li>
                                    <p>Email: {this.state.unAnimal.emailContacto}</p>
                                </li>
                                <li>
                                    <p>Barrio: {this.state.unAnimal.barrio}</p>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-info btn-block shadow p-2 rounded">Contactar</button>
                            <hr />

                            <button type="button" className="btn btn-success btn-block shadow p-3 rounded" onClick={(e) => this.props.removeToAnimales(this.state.unAnimal, e)}>Adoptar</button>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                {this.state.unAnimal.foto.map(foto => <AnimalCarrusel foto={foto} key={foto.id} />)}
                                <div className="carousel-item active">
                                    <img src={this.state.unAnimal.foto[0].fotito} className="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <hr />
                        <a href="https://freshpet.com/ " target="_blank "><img src="assets/publicidad_04.jpg" className="card-img-top " alt="... "></img></a>
                    </div>

                </div>
            </div>
        )
    }
}
export default Animal;