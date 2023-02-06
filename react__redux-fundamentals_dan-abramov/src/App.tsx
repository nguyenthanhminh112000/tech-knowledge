import React from 'react';

const App = ({
  value,
  onIncreasement,
  onDecreasement,
}: {
  value: number;
  onIncreasement: () => void;
  onDecreasement: () => void;
}) => {
  return (
    <div>
      <p>{value}</p>
      <button onClick={onIncreasement}>+</button>
      <button onClick={onDecreasement}>-</button>
    </div>
  );
};

export default App;
