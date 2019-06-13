import React, { Component } from 'react'
import {Container, Button} from 'semantic-ui-react'
import mensaje from './mensaje' 
/* import root from './root.js' */

class App extends Component {
  render () {
    return (
      <Container textAlign='center'>
        <mensaje size='30px' color='#ff0000' contenido='AHORA' />
        <mensaje size='40px' color='#00ff00' contenido='ENTIENDO' />
        <mensaje size='60px' color='#0000ff' contenido='LOS PROPS :D' />
        <Button content='Boton Cool' color='blue' />        
      </Container>
    )
  }
}
export default App

