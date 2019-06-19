import React from 'react';
import AnimalCard from './AnimalCard';
import Animal from './Animal'


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 0
    };
  }

  goToAnimal = () => {
    alert('clicked');
    this.setState({
      section: 1
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Animal />;
    }
  }

  render() {
    return (
      <AnimalCard animal={this.props.animal} />
    );
  }

}

export default List;