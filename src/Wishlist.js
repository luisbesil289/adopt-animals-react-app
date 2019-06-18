import React from 'react'

class Wishlist extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-12 col-sm-4 col-md-4">
                        <div className="card card-lista">                            
                            <div className="card-body">
                                <img src="assets/dog_10.jpg" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar"></img>
                                <h4 className="card-title">Nombre: Doki</h4>
                                <p className="card-text">Birthday: 21/04/2019</p>
                                <h4 className="card-title"><a>Tipo: Bulldog Francés</a></h4>
                                <hr />
                                <p className="lead">Datos del Contacto</p>
                                <ul className=".bg-light">
                                    <li className=".bg-light">Luis Besil</li>
                                    <li className=".bg-light">094 236 444</li>
                                    <li className=".bg-light">l.besil@observador.com.uy</li>
                                </ul>
                                <button type="button" className="btn btn-warning">Quitar</button>
                                <hr />
                                <button type="button" className="btn btn-success btn-block btn">Adoptar</button>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Wishlist