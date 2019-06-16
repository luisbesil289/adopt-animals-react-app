import React from 'react';

class Animal extends React.Component {
    render() {
        return (
            <div class="container">
        <div class="row">
            <div class="col col-sm-12 col-md-6">
                <div class="card cardAnimal card-body">
                    <div class="cardFicha">
                        <h4 class="card-title font-weight-bold">Doki</h4>
                        <h4 class="card-title">Bulldog Francés</h4>
                    </div>
                    <hr />
                    <h4 class="card-text">Características</h4>
                    <ul class="card-text">
                        <li>
                            <p>Nació el: 21/04/2019</p>
                        </li>
                        <li>
                            <p>Color de pelo: Negro</p>
                        </li>
                        <li>
                            <p>Color de ojos: Marrón</p>
                        </li>
                    </ul>
                    <hr />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Reprehenderit deserunt veniam tempora quibusdam blanditiis sequi sapiente voluptates dolorem fuga, repellendus corrupti dolore. Nostrum quos soluta explicabo, ea vel veniam optio tempore, fuga magnam
                        odio ullam similique rem est? Cupiditate, eos.
                    </p>
                    <a href="/Wishlist"><button type="button" class="btn btn-secondary btn-block shadow p-1 rounded">Agregar a la Wishlist</button></a>
                    <hr />

                    <h4 class="card-text">Datos del Contacto</h4>
                    <ul class="card-text">
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
                    <button type="button" class="btn btn-info btn-block shadow p-2 rounded">Contactar</button>
                    <hr />
                  
                    <button type="button" class="btn btn-success btn-block shadow p-3 rounded">Adoptar</button>
                </div>
            </div>

            <div class="col col-sm-12 col-md-6">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="assets/carr_01.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/carr_02.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/carr_03.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src="assets/carr_04.jpg" class="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <hr />
                <a href="https://freshpet.com/ " target="_blank "><img src="assets/publicidad_04.jpg" class="card-img-top " alt="... "></img></a>
            </div>

        </div>
    </div>
        )
    }
}
export default Animal;