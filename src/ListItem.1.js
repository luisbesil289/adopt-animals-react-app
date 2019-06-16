import React from 'react';


class ListItem extends React.Component {
    render() {
        return (
            <div>
                <p className="card-text">
                {this.props.animales}
                </p>                    
            </div >
        )
    }
}
export default ListItem;