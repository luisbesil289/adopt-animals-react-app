import React from 'react';

class AnimalCarrusel extends React.Component {
    
    render() {
        return (
            <React.Fragment>
            <div className="carousel-item">
                <img src={this.props.foto.fotito} className="d-block w-100" alt="..."></img>
            </div>
            </React.Fragment>
        )
    }
  
}
export default AnimalCarrusel;