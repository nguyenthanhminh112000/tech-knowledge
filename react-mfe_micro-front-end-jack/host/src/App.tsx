import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import './index.scss';
import people from '../../remote-react/src/components/people';
import Counter from 'remote/Counter';

// import Counter from 'remote/Counter';
// // const decreaseCounterWrapper = React.lazy(
// //   () => import('remote_solid_js/decreaseCounterWrapper'),
// // );
// import AAAA from 'remote_react/MicroApp2';

// const Counter = React.lazy(() => import('remote/Counter'));
// const decreaseCounterWrapper = React.lazy(
//   () => import('remote_solid_js/decreaseCounterWrapper'),
// );
// const AAAA = React.lazy(() => import('remote_react/MicroApp2'));
// console.log('aaaaa', people);

const App = () => {
  console.log('bbbbbb', people);
  const solidRef = React.useRef<null | HTMLDivElement>(null);
  const [loadMicroFEs, setLoadMicroFEs] = React.useState<Boolean>(false);
  ///
  React.useEffect(() => {
    if (loadMicroFEs) {
      // decreaseCounterWrapper(solidRef.current);
    }
  });
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {loadMicroFEs && (
        <React.Suspense fallback={<div>Loading</div>}>
          <Counter />
          {/* <AAAA /> */}
        </React.Suspense>
      )}
      {/* <Counter />
      <AAAA /> */}
      <div className="solid-js" ref={solidRef}></div>
      <div className=" bg-pink-600 flex justify-center">
        <button
          onClick={() => {
            setLoadMicroFEs((curLoadMicroFEs) => !curLoadMicroFEs);
          }}
        >
          Load micro frontends
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
