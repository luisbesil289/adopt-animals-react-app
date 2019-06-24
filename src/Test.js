import React from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props);

    this.animales = [
      {
        id: 1,
        nombre: 'Misha',
        tipo: 'cat',
        raza: 'Caniche',
        barrio: 'Cordón',
        sexo: 'M',
        fecha: '2019-5-16',
        ojos: 'Azules',
        pelo: 'Marrón',
        nombreContacto: 'Juan Carlos Rodriguez',
        telefonoContacto: '094 236 444',
        emailContacto: 'l.besil@hotmail.com',
        foto: [
          {
            fotito: 'assets/dog_11.jpg'
          },
          {
            fotito: 'assets/dog_11.jpg'
          }],
        descripcion: 'This is the awesome red car you always wanted to buy. This is the awesome red car you always wanted to buy.'
      }]
  }

  test() {  
    
    console.log(this.animales[0].foto[0].fotito);
  }


  render() {
    return (
      <div>
         {this.test()}
       
        <img src={this.animales[0].foto[0].fotito === null ? 'no' : this.animales[0].foto[0].fotito} className="d-block w-100" alt="..." width="20%"></img>
          <br />
      </div>
        );
      }
    }
    
    export default Test;
