import React from 'react';
import './filtros.css';

class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pName: '',
            pBarrio: ''
        };
    }


    changeNameFilter = (event) => {
        this.setState({ pName: event.target.value });
    }
    changeBarrioFilter = (event) => {
        this.setState({ pBarrio: event.target.value });
    }

    render() {
        console.log("Estoy en filtros");
        var filteredList = this.props.animales
            .filter(item => this.state.pName !== '' || this.state.pName !== null || item.nombre === this.state.pName)
            .filter(item => this.state.pBarrio !== '' || this.state.pBarrio !== null || item.barrio === this.state.pBarrio)
            .sort()
        this.props.retornarAnimalesFiltrados(filteredList);

        return (
            <div className="serchVerticalL col col-2 d-none d-md-block">
                <form className="form" action="">
              <h4>Filtros</h4>
              <hr />
              <div className="form-group">
                <label htmlFor="tipo">
                  <h6>Tipo</h6>
                </label>
                <select className="custom-select custom-select-md" onChange={this.changeTipoFilter}>
                  <option defaultValue="all">*</option>
                  <option value="dog">Perros</option>
                  <option value="cat">Gatos</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" onChange={this.changeNameFilter} value={this.props.animales.nombre} id="nombre"></input>
              </div>
              <div className="form-group">
                <label htmlFor="barrio">Barrio</label>
                <input type="text" className="form-control" onChange={this.changeBarrioFilter} value={this.props.animales.barrio} id="barrio"></input>
              </div>
              <div className="form-group">
                <label htmlFor="raza">Raza</label>
                <input type="raza" className="form-control" onChange={this.changeRazaFilter} value={this.props.animales.raza} id="raza"></input>
              </div>
              <div className="form-group">
                <label htmlFor="sexo">Sexo</label>
                <select className="custom-select custom-select-md" onChange={this.changeSexoFilter}>
                  <option defaultValue="all">*</option>
                  <option value="M">M</option>
                  <option value="H">H</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edad">Edad</label>
                <select className="custom-select custom-select-md" onChange={this.changeFechaFilter} value={this.props.animales.fecha}>
                  <option defaultValue="all">*</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">mayor de 10</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="pelo">Color de pelo</label>
                <select className="custom-select custom-select-md" onChange={this.changePeloFilter} value={this.props.animales.pelo}>
                  <option defaultValue="all">*</option>
                  <option value="Blanco">Blanco</option>
                  <option value="Crema">Crema</option>
                  <option value="Beige">Beige</option>
                  <option value="Marrón">Marrón</option>
                  <option value="Gris">Gris</option>
                  <option value="Negro">Negro</option>
                  <option value="Manchas">Manchas</option>
                  <option value="Atigrado">Atigrado</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="ojos">Color de ojos</label>
                <select className="custom-select custom-select-md mb-3" onChange={this.changeOjosFilter} value={this.props.animales.ojos}>
                  <option defaultValue="all">*</option>
                  <option value="Verdes">Verdes</option>
                  <option value="Azules">Azules</option>
                  <option value="Castaños">Castaños</option>
                  <option value="Marrones">Marrones</option>
                  <option value="Grises">Grises</option>
                  <option value="Negros">Negros</option>
                </select>
              </div>
            </form>
            </div>

        )
    }
}
export default Filtros;