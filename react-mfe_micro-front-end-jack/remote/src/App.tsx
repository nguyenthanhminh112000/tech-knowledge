import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter/Pure';

import './index.scss';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl bg-blue-600 h-96">
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
