import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { UpperNavbar } from './components/layout/UpperNavbar';
import './global.css';
import { CustomCursor, Stars } from './lib';

const App = () => {
  useEffect(() => {
    const effects = [new Stars({ elId: "stars", rendererOptions: { alpha: true, antialias: true, precision: 'lowp' }, clearColor: "#ffffff" }), new CustomCursor()];
    for(const effect of effects) {
      effect.init();
    }
  }, []);

  return (
    <>
      <UpperNavbar content="Disponível para contratação" />
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default App;
