import './global.css';
// import Background from './Background';
// import Home from './Home';
// import { Nav } from './Nav';
import { Intro } from './Intro';

const App = () => {
  return (
    <>
      <Intro />
      {/* <Background /> */}
      {/* <Nav /> */}
      {/* <Home /> */}
    </>
  );
};

document.querySelector<HTMLDivElement>('body')!.append(<App />);
