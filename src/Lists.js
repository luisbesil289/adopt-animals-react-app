import React from 'react';
import AnimalCard from './AnimalCard';
import './lists.css'

class Lists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tipo: null,
      name: null,
      barr: null,
      raza: null,
      sexo: null,
      fech: null,
      pelo: null,
      ojos: null
    };
  }
  changeTipoFilter = (event) => {
    this.setState({ tipo: event.target.value });
  }
  changeNameFilter = (event) => {
    this.setState({ name: event.target.value });
  }
  changeBarrioFilter = (event) => {
    this.setState({ barr: event.target.value });
  }
  changeRazaFilter = (event) => {
    this.setState({ raza: event.target.value });
  }
  changeSexoFilter = (event) => {
    this.setState({ sexo: event.target.value });
  }
  changeFechaFilter = (event) => {
    this.setState({ fech: event.target.value });   
  }
  changePeloFilter = (event) => {
    this.setState({ pelo: event.target.value });
  }
  changeOjosFilter = (event) => {
    this.setState({ ojos: event.target.value });
  }

  calcularEdad = (a) => { //calcula la edad en numeros enteros
    var b = new Date()
    a = new Date(a)
    return b.getFullYear() - a.getFullYear()
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log(this.state.isToggleOn);
  }


  render() {

    var filteredList = this.props.animales
      .filter(item => this.state.tipo === null || this.state.tipo === '*' || this.state.tipo === item.tipo)
      .filter(item => this.state.name === null || this.state.name === '' || this.state.name.toLowerCase() === item.nombre.toLowerCase())
      .filter(item => this.state.barr === null || this.state.barr === '' || this.state.barr.toLowerCase() === item.barrio.toLowerCase())
      .filter(item => this.state.raza === null || this.state.raza === '' || this.state.raza === item.raza)
      .filter(item => this.state.sexo === null || this.state.sexo === '*' || this.state.sexo === item.sexo)
      .filter(item => this.state.fech === null || this.state.fech === '*' || this.state.fech >= this.calcularEdad(item.fecha))
      .filter(item => this.state.pelo === null || this.state.pelo === '*' || this.state.pelo === item.pelo)
      .filter(item => this.state.ojos === null || this.state.ojos === '*' || this.state.ojos === item.ojos)
      .sort()

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="serchVerticalL col col-12 col-sm-2 col-md-2 d-md-block">

          <nav className="navbar sticky-top">              
          <button className="btn btn-secondary btn-block shadow p-1 rounded" type="button" onClick={this.handleClick} value={this.state.isToggleOn ? 'ON' : 'OFF'} data-toggle="collapse" data-target="#navbarText">click</button>
                <div className="collapse navbar-collapse show" id="navbarText">


            <form className="form">
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
                  <option value="M">Macho</option>
                  <option value="H">Hembra</option>
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
              </nav>


          </div>
          <div className="col col-12 col-sm-8 col-md-8">
            <div className="row">
              {filteredList.map(animal => <AnimalCard goToAnimal={this.props.goToAnimal} animal={animal} key={animal.id} />)}
            </div>
          </div>
          <aside className="serchVerticalR col col-12 col-sm-4 col-md-2 d-none d-md-block">
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_01.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
            <a href="https://freshpet.com/"><img src="assets/publicidad_02.jpg" className="card-img-top" alt="... "></img></a>
            <hr />
          </aside>
        </div>
      </div>
    );
  }
}

export default Lists;