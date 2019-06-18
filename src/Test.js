import React from 'react';



class Test extends React.Component {   
  render() {
    return (
      <div>
        <Padre />
    </div>
    );
  }
}

export default Test;

class Padre extends React.Component{
  render() {
    return (
      <div>
        <Hija />
    </div>
    );
  }
}

class Hija extends React.Component{
  render() {
    return (
      <div>
        <h3>test</h3>
    </div>
    );
  }
}