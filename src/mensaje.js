import React, {Component} from 'react'
class mensaje extends Component {
  render () {     

    const styles = {
      color: this.props.color,
      fontSize: this.props.size
    }
    return (
      <h3 style={styles}>{this.props.contenido}</h3>
    )
    }
}
export default mensaje
