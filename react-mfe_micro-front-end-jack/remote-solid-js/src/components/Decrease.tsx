import { createSignal } from 'solid-js';

const DecreaseCounter = () => {
  const [count, setCount] = createSignal<number>(0);
  return (
    <div className="bg-green-900">
      <p>Hello from remote-solid-js App</p>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() - 1)}>Decrease</button>
    </div>
  );
};

export default DecreaseCounter;
