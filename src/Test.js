import React from 'react';



class Test extends React.Component {   
  render() {
    return (
      <div>
        <Parent />
    </div>
    );
  }
}

export default Test;

 class Parent extends React.Component {
  onClick() {
    this.refs.child.getAlert() // undefined
  }

  render() {   
   return (
     <div>
       <Child ref="child" />
       <h1 ref="hello">Dios</h1>
       <button onClick={this.onClick.bind(this)}>Click</button>
     </div>
   );
  }
 }

 class Child extends React.Component {
  getAlert() {
     alert('clicked');
  }
  render() {
   return (
     <h1 ref="hello">Hello</h1>
   );
  }
 }