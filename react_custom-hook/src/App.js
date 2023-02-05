import React from 'react';
const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button
        onClick={() => {
          console.log('first', count);

          setCount(count + 1);
          console.log('second', count);

          // setCount(count + 1);
          // console.log('third', count);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
