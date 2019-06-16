import React from 'react';
import List from './List';


class Navegacion extends React.Component {
    render() {
        return (            
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                 <a className="navbar-brand" href="/List"><img src="assets/Logo-02.png" alt="Smiley face" height="53" width="70"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="menuHorizontal collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href='/'{...List}>Lista <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/List">Nuevo <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/List">Blog <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/List">Lista de deseos <span className="sr-only"></span></a>
                        </li>
                    </ul>
                    <button className="LogIn btn btn-outline-light" type="submit"> LogIn - Register</button>
                </div>
            </nav>
        )
    }
}
export default Navegacion;

