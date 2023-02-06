import React from 'react';
import ReactDOM from 'react-dom';
import MicroApp2 from './components/MicroApp2';
import people from './components/people';
console.log('a', people);

import './index.scss';

const App = () => (
  <div>
    <MicroApp2 />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
