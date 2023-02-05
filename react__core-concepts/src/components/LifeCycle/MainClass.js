import React, { Component } from 'react';
console.log('MainClass outside');

export class MainClass extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    for (let i = 0; i <= 100000; i++) {
      console.log(i);
    }
  }
  componentDidUpdate() {
    document.getElementById('aaa').style.backgroundColor = 'blue';

    for (let i = 0; i <= 100000; i++) {
      console.log(i);
    }
  }
  render() {
    console.log('MainClass inside');
    return (
      <div
        id="aaa"
        style={{ backgroundColor: 'red' }}
        onMouseOver={() => {
          this.setState({ counter: this.state.counter + 1 });
        }}
      >
        MainClass
      </div>
    );
  }
}

export default MainClass;
