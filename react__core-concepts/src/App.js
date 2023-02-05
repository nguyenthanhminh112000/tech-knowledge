import React from 'react';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import Header from './components/Header';
import Main from './components/LifeCycle/Main';
import Footer from './components/Footer';
import MainClass from './components/LifeCycle/MainClass';
import MainHook from './components/LifeCycle/MainHook';
import MainEffectHook from './components/LifeCycle/MainEffectHook';
console.log('App.js outside');
const App = () => {
  console.log('App.js inside');
  return (
    <>
      {/*/////////////////////////// HOC Examples */}
      <ClickCounter name={'Minh'} />
      <HoverCounter name={'Dat'} />

      {/*/////////////////////////// Nothing */}
      {/* <Header />
      <Footer /> */}

      {/*/////////////////////////// LifeCycle FC and CC Examples */}
      {/* <Main />
      <MainClass />
      <MainHook />
      <MainEffectHook /> */}
    </>
  );
};

export default App;
