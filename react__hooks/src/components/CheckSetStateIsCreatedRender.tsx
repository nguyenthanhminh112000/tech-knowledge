import React from 'react';

const CheckSetStateIsCreatedRender = () => {
  const [state1, setState1] = React.useState<string>('');
  const [state2, setState2] = React.useState<string>('');
  console.log('render');
  React.useEffect(() => {
    console.log('setState is created');
  }, [setState1, setState2]);
  const clickMe = () => {
    setState2('a');
  };
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

export default CheckSetStateIsCreatedRender;
