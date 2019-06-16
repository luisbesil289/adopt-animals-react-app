import React from 'react';


class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:'John'
        };
     }
     
    render() {
        return (
            <div>
                <p className="card-text">{this.props.userName}</p>                    
            </div >
        )
    }
}
export default ListItem;