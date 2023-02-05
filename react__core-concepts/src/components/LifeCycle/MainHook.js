import React from 'react';
console.log('MainHook outside');
const MainHook = () => {
  console.log('MainHook inside');
  const [times, setTimes] = React.useState(1);
  React.useEffect(() => {
    console.log('useEffect MainHook');
    if (times === 1) {
      for (let i = 0; i < 100000; i++) {
        console.log(i);
      }
      return;
    }
    // document.getElementById('aaa').style.backgroundColor = 'blue';
    // for (let i = 0; i < 100000; i++) {
    //   console.log(i);
    // }
  });
  return (
    <div
      id="aaa"
      onMouseOver={() => {
        setTimes(times + 1);
      }}
      style={{ backgroundColor: 'pink' }}
    >
      MainHook
    </div>
  );
};

export default MainHook;
