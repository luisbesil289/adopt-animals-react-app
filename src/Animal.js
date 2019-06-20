import React from 'react';

class Animal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
/* name: this.state.name,
            tipo: this.state.tipo,
            raza: this.state.raza,
            barrio: this.state.barrio,
            sexo: this.state.sexo,
            fecha: this.state.fecha,
            ojos: this.state.ojos,
            pelo: this.state.pelo,
            nombreContacto: this.state.nombreContacto,    
            telefonoContacto: this.state.telefonoContacto,
            emailContacto: this.state.emailContacto,
            descripcion: this.state.descripcion */

    handleSubmit = (event) => {
        var animal = [];
        event.preventDefault();
        console.log(this.props.animal);
        animal = [{name: "Yoyii"/* this.state.nombre */,
            tipo: this.state.tipo,
            raza: this.state.raza,
            barrio: this.state.barrio,
            sexo: this.state.sexo,
            fecha: this.state.fecha,
            ojos: this.state.ojos,
            pelo: this.state.pelo,
            nombreContacto: this.state.nombreContacto,    
            telefonoContacto: this.state.telefonoContacto,
            emailContacto: this.state.emailContacto,
            descripcion: this.state.descripcion}];

        this.props.addToWishlist(animal);
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-6">
                        <div className="card cardAnimal card-body">
                            <div className="cardFicha">
                                <h4 className="card-title font-weight-bold">{this.props.nombre}</h4>
                                <h4 className="card-title">{this.props.raza}</h4>
                            </div>
                            <hr />
                            <h4 className="card-text">Características</h4>
                            <ul className="card-text">
                                <li>
                                    <p>Nació el: {this.props.fecha}</p>
                                </li>
                                <li>
                                    <p>Color de pelo: {this.props.pelo}</p>
                                </li>
                                <li>
                                    <p>Color de ojos: {this.props.ojos}</p>
                                </li>
                            </ul>
                            <hr />
                            <p>{this.props.descripcion}</p>
                            <button type="button" className="btn btn-secondary btn-block shadow p-1 rounded" onClick={this.handleSubmit}>Agregar a la Wishlist</button>
                            <hr />

                            <h4 className="card-text">Datos del Contacto</h4>
                            <ul className="card-text">
                                <li>
                                    <p>Nombre: Luis Besil</p>
                                </li>
                                <li>
                                    <p>Telefono / Celular: 094 236 444</p>
                                </li>
                                <li>
                                    <p>Email: l.besil@gmail.com</p>
                                </li>
                                <li>
                                    <p>Barrio: Parque Batlle</p>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-info btn-block shadow p-2 rounded">Contactar</button>
                            <hr />

                            <button type="button" className="btn btn-success btn-block shadow p-3 rounded">Adoptar</button>
                        </div>
                    </div>

                    <div className="col col-sm-12 col-md-6">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/carr_01.jpg" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/carr_02.jpg" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/carr_03.jpg" className="d-block w-100" alt="..."></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/carr_04.jpg" className="d-block w-100" alt="..."></img>
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