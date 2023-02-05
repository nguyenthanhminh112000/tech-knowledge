import React, { useState } from 'react';
const withCounter = (WrappedComponent, increaseParam = 1) => {
  const WithCounter = (props) => {
    const [time, setTime] = useState(0);
    const increaseTime = () => {
      setTime((prevTime) => prevTime + increaseParam);
    };
    return (
      <WrappedComponent time={time} increaseTime={increaseTime} {...props} />
    );
  };
  return WithCounter;
};

export default withCounter;
