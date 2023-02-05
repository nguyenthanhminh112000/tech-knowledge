import React, { Component } from 'react';
import { Context } from '../App';

export class ClassContextComponent extends Component {
  render() {
    return (
      <Context.Consumer>
        {(number) => (
          <div>Read value from Context in Class component {number}</div>
        )}
      </Context.Consumer>
    );
  }
}

export default ClassContextComponent;
