import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { UpperNavbar } from './components/layout/UpperNavbar';
import './global.css';
import { CustomCursor } from './lib';
import { Container } from './components/common/Container';
import { Section } from './components/layout/Section';
import { Button } from './components/common/Button';
import {
  FaDocker,
  FaDownload,
  FaLinux,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandCpp } from 'react-icons/tb';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    try {
      const canvas = document.getElementById('stars') as HTMLCanvasElement;

      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const offscreen = canvas.transferControlToOffscreen();
        const worker = new Worker(
          new URL('./shared/worker.ts', import.meta.url),
          { type: 'module' },
        );
        worker.postMessage(
          {
            event: 'init',
            canvas: offscreen,
            width: window.innerWidth,
            height: window.innerHeight,
          },
          [offscreen],
        );

        window.addEventListener('resize', () => {
          worker.postMessage({
            event: 'resize',
            width: window.innerWidth,
            height: window.innerHeight,
          });
        });
      }
    } catch (_) {}

    try {
      const effects = [new CustomCursor()];
      for (const effect of effects) {
        effect.init();
      }
    } catch (err) {
      console.log('Could not initialize effects: ', err);
    }
  }, []);

  return (
    <>
      <UpperNavbar content={t('uppernavbar')} />
      <Navbar />
      <Container>
        <Section className="ignore-nav flex items-center text-white justify-center">
          <div className="flex flex-col items-center justify-center gap-4 max-w-[650px] text-center">
            <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl">
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
            <h2 className="text-4xl md:text-6xl font-bold">{t('title')}</h2>
            <p className="max-w-[500px] text-sm md:text-md text-gray-300">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button bsize="big" bstyle="outline">
                {t('buttons.projects')}
              </Button>
              <Button bsize="big">
                {t('buttons.resume')} <FaDownload />
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default App;
