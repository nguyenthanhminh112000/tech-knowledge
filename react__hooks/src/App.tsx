import React from 'react';
// import UseReducerExample from './components/UseReducerExample';
// import UseMemoExample from './components/UseMemoExample';
import ChildComponent from './context/ChildComponent';
// import UseCallbackTriExample from './components/UseCallbackTriExample';
// import CheckSetStateIsCreatedRender from './components/CheckSetStateIsCreatedRender';
import LexicalEnvironmentFunctionComponent from './components/LexicalEnvironmentFunctionComponent';
// import UseEffectWithJack from './components/UseEffectWithJack/UseEffectWithJack';
// import UseMemoExample from './components/UseMemoExample';
// import UseStateExample from './components/UseStateExample';

const App = () => {
  // const [person,setPerson]=React.useState({name:''})
  const [click, setClick] = React.useState(false);
  const person = { name: 'Tin' }; //aaa ///bbb
  React.useEffect(() => {
    console.log('Only run when dependency changes');
  }, [person]);
  ///= = =

  return (
    <>
      <button
        onClick={() => {
          setClick((prevClick) => {
            return !prevClick;
          });
        }}
      >
        Click
      </button>
      {/* <UseReducerExample /> */}
      {/* <UseMemoExample /> */}
      <ChildComponent />
      {/* <UseCallbackTriExample /> */}
      {/* <CheckSetStateIsCreatedRender /> */}
      <LexicalEnvironmentFunctionComponent />
      {/* <UseEffectWithJack /> */}
      {/* <UseStateExample /> */}
    </>
  );
};

export default App;
