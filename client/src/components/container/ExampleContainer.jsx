import React, { Component } from 'react';
import ExampleElement from '@presentational/ExampleElement';

class ExampleContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: 'The Start of it All',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <ExampleElement
        title={title}
        text="Hello World!"
      />
    );
  }
}
export default ExampleContainer;
