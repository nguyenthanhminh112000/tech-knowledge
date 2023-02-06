import React from 'react';

const UseStateExample = () => {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <div>
      <p style={{ fontSize: '50px' }}>{number}</p>
      <button
        onClick={() => {
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);
          setNumber((curNum) => curNum + 1);
          setNumber((curNum) => curNum + 1);
          setNumber((curNum) => curNum + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // setNumber(number - 1);
          // setNumber(number - 1);
          // setNumber(number - 1);
          setNumber((curNum) => curNum - 1);
          setNumber((curNum) => curNum - 1);
          setNumber((curNum) => curNum - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseStateExample;
