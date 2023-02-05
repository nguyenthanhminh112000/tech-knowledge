import React from 'react';

const MainEffectHook = () => {
  const [counter, setCounter] = React.useState(0);
  const [hovers, setHovers] = React.useState(0);
  React.useEffect(() => {
    console.log('useEffect1');
    document.title = `${hovers} times`;
  }, [counter]);
  // React.useEffect(() => {
  //   console.log('useEffect2');
  // });
  // React.useEffect(() => {
  //   console.log('useEffect3');
  // });
  return (
    <div>
      <button
        onClick={() => {
          setHovers(hovers + 1);
        }}
      >
        {hovers} times
      </button>
    </div>
  );
};

export default MainEffectHook;
