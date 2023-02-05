import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({ time, increaseTime, name }) => {
  return (
    <h1 onMouseOver={increaseTime}>
      {name} {time}
    </h1>
  );
};

export default withCounter(HoverCounter, 10);
