import React from 'react';

const UseCallbackTriExample = () => {
  const [state1, setState1] = React.useState<string>('');
  const [state2, setState2] = React.useState<string>('');
  console.log('render');
  const doSomething2222 = () => {};
  const doSomething = React.useCallback(() => {
    console.log('this is inside useCallback');
  }, [state1]);
  React.useEffect(() => {
    console.log('callback is created');
  }, [doSomething]);
  return (
    <div>
      <button
        onClick={() => {
          setState2('a');
        }}
      >
        click me baby
      </button>
    </div>
  );
};

export default UseCallbackTriExample;
