import { render } from 'solid-js/web';
// import decreaseCounterWrapper from './decreaseCounterWrapper';
import DecreaseCounter from './components/Decrease';
import './index.scss';

const App = () => (
  <div>
    <DecreaseCounter />
  </div>
);
render(App, document.getElementById('app'));
