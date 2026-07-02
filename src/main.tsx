import './global.css';
import Background from './Background';
import Home from './Home';
import { Nav } from './Nav';

const App = () => {
  return (
    <>
      {/* <Background /> */}
      <Nav />
      {/* <Home /> */}
    </>
  );
};

document.querySelector<HTMLDivElement>('body')!.append(<App />);
