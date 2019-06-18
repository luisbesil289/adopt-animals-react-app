import React from 'react';
import AnimalCard from './AnimalCard';


class List extends React.Component {
    render() {
        
        return (           
            <AnimalCard animal={this.props.animal} />          
            
        );        
    }
    
}

export default List;