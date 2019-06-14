import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Mensaje from './Mensaje'
import MiPrimerComponente from './Root'

class App extends React.Component {
  render() {
    return (
      <div>
        <Container textAlign='center'>
          <Mensaje size='16px' color='#ff0000' contenido='AHORA' />
          <Mensaje size='14px' color='#00ff00' contenido='ENTIENDO' />
          <Mensaje size='10px' color='#0000ff' contenido='LOS PROPS :D' />
          <Button content='Boton Coooool' color='blue' />
          <MiPrimerComponente />
        </Container>
      </div>
    )
  }
}
export default App

