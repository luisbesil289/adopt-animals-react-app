import React from 'react';
import './NewAnimal.css';



class NewAnimal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ''
        };
      }

      handleNameChange = (event) => {        
        this.setState({ name: event.target.value});
      }    
    
      handleSubmit = (event) => {
        event.preventDefault(); // Ignore default browser action.
        // Send form data.
        this.props.addNewProduct({
          name: this.state.name
        });
        // Reset form.
        this.setState({
          name: ''
        });
      }

    render() {
        return (           
            <div className="container formNuevoAnimal p-3 mb-5 bg-white rounded">
                <div className="row justify-content-center">
                    <div className="col col-sm-12 borderless">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputNombre">Nombre</label>
                                    <input type="text" className="form-control" onChange={this.handleNameChange} placeholder="Nombre ..."></input>

                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputTipo">Tipo</label>
                                    <select onChange={this.handleTipoChange} className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">todos...</option>
                                        <option value="1">Perro</option>
                                        <option value="2">Gato</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputRaza">Raza</label>
                                    <select onChange={this.handleRazaChange} className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">Raza</option>
                                        <option value="1">Alano</option>
                                        <option value="2">Alaskan Malamute</option>
                                        <option value="3">American Staffordshire Terrier</option>
                                        <option value="4">American Water Spaniel</option>
                                        <option value="5">Antiguo Pastor Inglés</option>
                                        <option value="6">Basset Azul de Gaseogne</option>
                                        <option value="7">Basset Hound</option>
                                        <option value="8">Basset leonado de Bretaña</option>
                                        <option value="9">Beagle</option>
                                        <option value="10">Bearded Collie</option>
                                        <option value="11">Bichón Maltés</option>
                                        <option value="12">Bobtail</option>
                                        <option value="13">Border Collie</option>
                                        <option value="14">Boston Terrier</option>
                                        <option value="15">Boxer</option>
                                        <option value="16">Bull Terrier</option>
                                        <option value="17">Bulldog Americano</option>
                                        <option value="18">Bulldog Francés</option>
                                        <option value="19">Bulldog Inglés</option>
                                        <option value="20">Caniche</option>
                                        <option value="21">Carlino</option>
                                        <option value="22">Chihuahua</option>
                                        <option value="23">Cirneco del Etna</option>
                                        <option value="24">Chow Chow</option>
                                        <option value="25">Cocker Spaniel Americano</option>
                                        <option value="26">Cocker Spaniel Inglés</option>
                                        <option value="27">Dálmata</option>
                                        <option value="28">Dobermann</option>
                                        <option value="29">Dogo Alemán</option>
                                        <option value="30">Dogo Argentino</option>
                                        <option value="31">Dogo de Burdeos</option>
                                        <option value="32">Finlandés</option>
                                        <option value="33">Fox Terrier de pelo liso</option>
                                        <option value="34">Fox Terrier</option>
                                        <option value="35">Foxhound Americano</option>
                                        <option value="36">Foxhound Inglés</option>
                                        <option value="37">Galgo Afgano</option>
                                        <option value="38">Gigante de los Pirineos</option>
                                        <option value="39">Golden Retriever</option>
                                        <option value="40">Gos d'Atura</option>
                                        <option value="41">Gran Danés</option>
                                        <option value="42">Husky Siberiano</option>
                                        <option value="43">Laika de Siberia Occidental</option>
                                        <option value="44">Laika Ruso-europeo</option>
                                        <option value="45">Labrador Retriever</option>
                                        <option value="46">Mastín del Pirineo</option>
                                        <option value="47">Mastin del Tibet</option>
                                        <option value="48">Mastín Español</option>
                                        <option value="49">Mastín Napolitano</option>
                                        <option value="50">Pastor Alemán</option>
                                        <option value="51">Pastor Australiano</option>
                                        <option value="52">Pastor Belga</option>
                                        <option value="53">Pastor de Brie</option>
                                        <option value="54">Pastor de los Pirineos de Cara Rosa</option>
                                        <option value="55">Pekinés</option>
                                        <option value="56">Perdiguero Chesapeake Bay</option>
                                        <option value="57">Perdiguero de Drentse</option>
                                        <option value="58">Perdiguero de Pelo lido</option>
                                        <option value="59">Perdiguero de pelo rizado</option>
                                        <option value="60">Perdiguero Portugués</option>
                                        <option value="61">Pitbull</option>
                                        <option value="62">Podenco Ibicenco</option>
                                        <option value="63">Podenco Portugués</option>
                                        <option value="64">presa canario</option>
                                        <option value="65">Presa Mallorquin</option>
                                        <option value="66">Rottweiler</option>
                                        <option value="67">Rough Collie</option>
                                        <option value="68">Sabueso Español</option>
                                        <option value="69">Sabueso Hélenico</option>
                                        <option value="70">Sabueso Italiano</option>
                                        <option value="71">Sabueso Suizo</option>
                                        <option value="72">Samoyedo</option>
                                        <option value="73">San Bernardo</option>
                                        <option value="74">Scottish Terrier</option>
                                        <option value="75">Setter Irlandés</option>
                                        <option value="76">Shar Pei</option>
                                        <option value="77">Shiba Inu</option>
                                        <option value="78">Siberian Husky</option>
                                        <option value="79">Staffordshire Bull Terrier</option>
                                        <option value="80">Teckel</option>
                                        <option value="81">Terranova</option>
                                        <option value="82">Terrier Australiano</option>
                                        <option value="83">Terrier Escocés</option>
                                        <option value="84">Terrier Irlandés</option>
                                        <option value="85">Terrier Japonés</option>
                                        <option value="86">Terrier Negro Ruso</option>
                                        <option value="87">Terrier Norfolk</option>
                                        <option value="88">Terrier Norwich</option>
                                        <option value="89">Yorkshire Terrier</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputEmail4">Barrio</label>
                                    <select className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">Barrio ...</option>
                                        <option value="1">Pocitos</option>
                                        <option value="2">Parque Batlle</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress2">Sexo</label>
                                    <select className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">Sexo ...</option>
                                        <option value="1">Macho</option>
                                        <option value="2">hembra</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress2 col-md-4">Fecha de nacimiento</label>
                                    <input type="date" className="custom-select custom-select-md mb-3" name="bday"></input>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress2 col-md-4">Color de ojos</label>
                                    <select className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">Color ...</option>
                                        <option value="1">Verdes</option>
                                        <option value="2">Azules</option>
                                        <option value="3">Castaños</option>
                                        <option value="4">Diferente tonalidad</option>
                                        <option value="5">Marrón oscuro</option>
                                        <option value="6">Grises</option>
                                        <option value="7">Negro</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label htmlFor="inputAddress2 col-md-4">Color de pelo</label>
                                    <select className="custom-select custom-select-md mb-3">
                                        <option defaultValue="3">Color ...</option>
                                        <option value="1">Blanco</option>
                                        <option value="2">Crema</option>
                                        <option value="3">Beige</option>
                                        <option value="4">Marrón</option>
                                        <option value="5">Gris</option>
                                        <option value="6">Negro</option>
                                        <option value="7">Manchas</option>
                                        <option value="7">Atigrado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity">Nombre de contacto</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Nombre ..."></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">Teléfono de contacto</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Teléfono ..."></input>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputZip">Email de contacto</label>
                                    <input type="email" className="form-control" id="inputZip" placeholder="Email ..."></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea">Descripción</label>
                                    <textarea className="form-control" id="validationTextarea" placeholder="Descripción ..."></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a message in the textarea.
                                </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Registar</button>
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}
export default NewAnimal;