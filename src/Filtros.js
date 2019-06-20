import React from 'react';
import './filtros.css';

class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }


    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }


    render() {
        return (
            <div className="serchVerticalL col col-2 d-none d-md-block">
                <form className="form" action="">

                    <h4>Filtros</h4>

                    <hr />
                    <div className="form-group">
                        <label htmlFor="tipo">
                            <h6>Tipo</h6>
                        </label>
                        <select className="custom-select custom-select-md">
                            <option value="1">dog</option>
                            <option value="2">cat</option>
                            <option defaultValue="3">todos</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" onChange={this.handleNameChange} value={this.state.value} placeholder="Nombre ..."></input>
                        <span>{this.state.value}s</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="barrio">Barrio</label>
                        <input type="barrio" className="form-control" id="barrio"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="raza">Raza</label>
                        <input type="raza" className="form-control" id="raza"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexo">Sexo</label>
                        <select className="custom-select custom-select-md">
                            <option value="1">M</option>
                            <option value="2">H</option>
                            <option defaultValue="3">todos</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="edad">Edad</label>
                        <input type="edad" className="form-control" id="edad"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pelo">Color de pelo</label>
                        <input type="pelo" className="form-control" id="pelo"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ojos">Color de ojos</label>
                        <input type="ojos" className="form-control" id="ojos"></input>
                    </div>

                </form>
            </div>

        )
    }
}
export default Filtros;