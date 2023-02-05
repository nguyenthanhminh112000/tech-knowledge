import React from 'react';

console.log('Main.js outside');
const Main = () => {
  console.log('Main.js inside');
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    console.log(counter);
    document.title = `${counter} times`;
  });
  return (
    <div>
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Click {counter} times
      </button>
    </div>
  );
};

export default Main;
