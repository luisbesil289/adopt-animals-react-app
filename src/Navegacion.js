import React from 'react';


class Navegacion extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a class="navbar-brand" href="list.html"><img src="assets/Logo-02.png" alt="Smiley face" height="53" width="70"></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="list.html">Inicio <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="newAnimal.html">Nuevo <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="blog.html">Blog <span class="sr-only"></span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="wishlist.html">Lista de deseos <span class="sr-only"></span></a>
                            </li>
                        </ul>
                        <button class="LogIn btn btn-outline-light" type="submit"> LogIn - Register</button>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navegacion;
