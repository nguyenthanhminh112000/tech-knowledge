import React from 'react';

const LexicalEnvironmentFunctionComponent = () => {
  const [row, setRow] = React.useState<number>(1);
  const [row2, setRow2] = React.useState<number>(1);

  const callback = React.useCallback(() => {
    console.log(row);
  }, [row2]);
  console.log('render', row);
  return (
    <div>
      <button onClick={callback}>log row</button>
      <button
        onClick={() => {
          setRow((r) => r + 1);
        }}
      >
        set row
      </button>
    </div>
  );
};

export default LexicalEnvironmentFunctionComponent;
