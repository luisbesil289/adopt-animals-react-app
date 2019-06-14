import React from 'react'
class Mensaje extends React.Component {
    render() {
        const styles = {
            color: this.props.color,
            fontSize: this.props.size
        }
        return (
            <div>
                <h3 style={styles}>{this.props.contenido}</h3>
            </div>
        )
    }
}
export default Mensaje;
