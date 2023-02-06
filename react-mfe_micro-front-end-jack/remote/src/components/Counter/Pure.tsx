import React from 'react';

const Pure = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <div className="flex flex-col align-middle bg-yellow-900">
      <p>Hello from remote</p>
      <p>Remote</p>p
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((curCount) => ++curCount);
        }}
        className="bg-red-700"
      >
        Click count
      </button>
    </div>
  );
};

export default Pure;
