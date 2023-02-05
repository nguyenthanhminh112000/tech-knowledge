import React from 'react';
import withCounter from './withCounter';

const ClickCounter = ({ time, increaseTime, name }) => {
  return (
    <button onClick={increaseTime}>
      {name} Clicked {time} times
    </button>
  );
};

export default withCounter(ClickCounter, 5);
