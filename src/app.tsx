import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { UpperNavbar } from './components/layout/UpperNavbar';
import './global.css';
import { CustomCursor, Stars } from './lib';
import { Color } from 'three';
import { Container } from './components/common/Container';
import { Section } from './components/layout/Section';
import { Button } from './components/common/Button';
import { FaDocker, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandCpp } from 'react-icons/tb';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';

const App = () => {
  useEffect(() => {
    const effects = [new Stars({ elId: "stars", maxHeight: 800, rendererOptions: { alpha: true, antialias: true, precision: 'lowp' }, clearColor: new Color(0xffffff) }), new CustomCursor()];
    
    //const effects = [new CustomCursor()];
    for(const effect of effects) {
      effect.init();
    }
  }, []);

  return (
    <>
      <UpperNavbar content="Available for Hire" />
      <Navbar />
      <Container>
        <Section className="ignore-nav flex items-center text-white justify-center">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[500px] text-center">
          <div className="flex items-center justify-center gap-2 text-3xl">
            <BiLogoTypescript />
            <FaReact />
            <RiNextjsFill />
            <FaNodeJs />
            <TbBrandCpp />
            <FaLinux />
            <FaDocker />
            <SiTailwindcss />
            <BiLogoPostgresql />
          </div>
          <h2 className="text-5xl font-bold">A non-standard <span className="text-blue-600">Fullstack</span> developer</h2>
          <p className="max-w-[500px] text-sm text-gray-300">Hello! I’m a fullstack developer passionate about creating innovative and efficient solutions. With expertise in various technologies, I’m always looking for new challenges and opportunities to turn ideas into reality.</p>
          <div className="flex items-center gap-4">
            <Button>Explore my projects</Button>
            <Button>Download resume</Button>
          </div>
        </div>
        </Section>
      </Container>
    </>
  );
};

export default App;
