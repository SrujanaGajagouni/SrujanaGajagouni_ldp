import React, { Component } from 'react';

interface MyComponentProps {
  name: string;
}

class MyClassComponent extends Component<MyComponentProps> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default MyClassComponent;
