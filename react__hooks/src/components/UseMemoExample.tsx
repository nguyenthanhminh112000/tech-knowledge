import React from 'react';
const calculateDoubleValueSlow = (number: number): number => {
  for (let i = 0; i < 50000; i++) {
    console.log(i);
  }
  return number * 2;
};

const UseMemoExample = () => {
  ////////////////// Recalculate something take times
  const [number, setNumber] = React.useState<number>(1);
  // const doubleValue = calculateDoubleValueSlow(number);
  const doubleValue = React.useMemo(() => {
    return calculateDoubleValueSlow(number);
  }, [number]);
  ////////////////// Referential equality
  const [dark, setDark] = React.useState<boolean>(false);
  // const themeStyles = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // };
  ////// VU solution => re-render twice when update dark
  // const [themeStyles, setThemeStyles] = React.useState({
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black',
  // });
  // console.log('render');

  // React.useEffect(() => {
  //   setThemeStyles({
  //     backgroundColor: dark ? 'black' : 'white',
  //     color: dark ? 'white' : 'black',
  //   });
  // }, [dark]);

  ////// Minh solution

  const themeStyles = React.useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);
  React.useEffect(() => {
    console.log('Theme changed');
  }, [themeStyles]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Change theme
      </button>
      <div style={themeStyles}>{doubleValue}</div>
    </div>
  );
};

export default UseMemoExample;
