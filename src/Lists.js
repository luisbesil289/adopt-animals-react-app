import React from 'react';
import AnimalCard from './AnimalCard';



class Lists extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tipo: null,
      name: null,
      barr: null,
      raza: null,
      sexo: null
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
  render() {
  
    var filteredList = this.props.animales
    .filter(item => this.state.tipo === null || this.state.tipo === '*' || this.state.tipo === item.tipo)
    .filter(item => this.state.name === null || this.state.name === '' || this.state.name === item.nombre)
    .filter(item => this.state.barr === null || this.state.barr === '' || this.state.barr === item.barrio)
    .filter(item => this.state.raza === null || this.state.raza === '' || this.state.raza === item.raza)
    .filter(item => this.state.sexo === null || this.state.sexo === '*' || this.state.sexo === item.sexo)    
    .sort()
 
    return (      
      <div className="container-fluid">
        <div className="row">
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
                        <input type="raza" className="form-control"  onChange={this.changeRazaFilter} value={this.props.animales.raza} id="raza"></input>
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
            <div className="col col-12 col-sm-8 col-md-8">
            <div className="row">               
             {filteredList.map(animal => <AnimalCard goToAnimal={this.props.goToAnimal} animal={animal} key={animal.id} />)}
            </div>
          </div>
          <aside className="serchVerticalR col col-12 col-sm-4 col-md-2 col-lg-2">
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