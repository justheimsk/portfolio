import { useEffect, useState } from 'react';
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
  FaPlus,
  FaReact,
} from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { TbBrandCpp } from 'react-icons/tb';
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from './components/common/ProjectCard';
import { Tape } from './components/common/Tape';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import langs from './shared/langs';
import * as Orbit from './components/common/Orbit';
import * as Skills from './shared/skills';
import InitObservers from './lib/utils/InitObservers';
import { InitWebWorker } from './lib/utils/InitWebWorker';

const App = () => {
  const { t } = useTranslation();
  const [opIndex, setOpIndex] = useState<number>(0);

  useEffect(() => {
    try {
      const thread = InitWebWorker('stars');
      if(thread) InitObservers(setOpIndex, thread.canvas, thread.worker);

      document.documentElement.lang = Object.keys(langs).includes(
        navigator.language || 'en-US',
      )
        ? navigator.language
        : 'en-US';

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
      <Analytics />
      <SpeedInsights />
      <UpperNavbar id="home" content={t('uppernavbar')} />
      <Navbar />
      <Container>
        <Section
          hero
          className="ignore-nav flex items-center text-white justify-center"
        >
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
            <h2 className="text-4xl md:text-6xl w-auto font-bold bg-gradient-to-r from-blue-800 via-green-500 to-cyan-500 inline-block text-transparent bg-clip-text">
              {t('title')}
            </h2>
            <p className="max-w-[500px] text-sm md:text-md text-gray-300">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Button bsize="big" bstyle="outline">
                {t('buttons.projects')}
              </Button>
              <Button clickEffect="shrink" bsize="big">
                {t('buttons.resume')} <FaDownload />
              </Button>
            </div>
          </div>
        </Section>
      </Container>
      <Tape />
      <Container className="mt-16">
        <Section id="projects" className="text-white">
          <div className="text-center flex flex-col gap-2 max-w-[500px] mx-auto">
            <span className="text-md text-secondary tracking-widest">
              {t('projects.uptitle')}
            </span>
            <h2 className="text-4xl font-bold">{t('projects.title')}</h2>
            <p className="text-gray-300">{t('projects.subtitle')}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ProjectCard
              small
              title="Cordium.js"
              stack="Backend"
              stackIcon={<BiLogoTypescript />}
              description={t('projects.list.cordiumjs.description')}
              githubUrl="https://github.com/justheimsk/cordium.js"
            />
            <ProjectCard
              title="Restman"
              stack="Frontend"
              stackIcon={<FaReact />}
              description={t('projects.list.restman.description')}
              imageUrl="./Restman.webp"
              demoUrl="https://restman.vercel.app"
              githubUrl="https://gitub.com/justheimsk/Restman"
            />
            <ProjectCard
              title={t('projects.list.dentist.title')}
              stack="Frontend"
              stackIcon={<FaReact />}
              description={t('projects.list.dentist.description')}
              imageUrl="./Dentist.webp"
              demoUrl="https://dentist-demo1.vercel.app/"
            />
            <ProjectCard
              small
              title={t('projects.list.all.title')}
              stack={t('projects.list.all.stack')}
              stackIcon={<FaPlus />}
              description=""
              githubUrl="https://github.com/justheimsk"
            />
          </div>
        </Section>
        <Section id="skills" className="mt-8 text-white">
          <div className="text-center flex flex-col gap-2 max-w-[500px] mx-auto">
            <span className="text-md text-secondary tracking-widest">
              FULLSTACK
            </span>
            <h2 className="text-4xl font-bold">Habilidades</h2>
            <p className="text-gray-300">
              As habilidades e tecnologias que aprendi e me aperfeiçoei
              estudando programação
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-12 flex-wrap">
            <Orbit.Container>
              <Orbit.Center />
              {Skills.Backend.map((skill, i) => (
                <Orbit.Child
                  className={`${opIndex >= i ? 'opacity-100' : 'opacity-0'}`}
                  imageUrl={`./skills/${skill.img}`}
                  id={(i + 1).toString()}
                  key={skill.name}
                />
              ))}
            </Orbit.Container>
            <Orbit.Container>
              <Orbit.Center />
              {Skills.Frontend.map((skill, i) => (
                <Orbit.Child
                  className={`${opIndex >= i + 10 ? 'opacity-100' : 'opacity-0'}`}
                  //className={`${window.innerWidth < 889 ? `${opIndex >= i + 10 ? 'opacity-100' : 'opacity-0'}` : `${opIndex >= i ? 'opacity-100' : 'opacity-0'}`}`}
                  imageUrl={`./skills/${skill.img}`}
                  id={(i + 1).toString()}
                  key={skill.name}
                />
              ))}
            </Orbit.Container>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default App;
