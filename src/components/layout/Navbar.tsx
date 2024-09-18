import { FaDiscord, FaGithub } from 'react-icons/fa6';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import * as Dropdown from '../common/Dropdown';
import langs from '../../shared/langs';

export function Navbar() {
  const [active, setActive] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="sticky w-full md:w-auto h-11 md:h-8 top-4 inline-block left-0 md:right-1/2 md:left-1/2 md:translate-x-[-50%] z-50 px-4 md:px-0">
        <nav className="backdrop-blur rounded-full md:flex md:items-center h-full bg-white/10 border border-white/10">
          <div className="hidden md:flex items-center text-sm gap-2 p-1">
            <NavbarMenu />
          </div>
          <div className="flex md:hidden items-center h-full text-white justify-between px-4">
            <NavbarBrandName />
            <div className="flex items-center gap-2">
              <Button
                clickEffect="shrink"
                rounded="rounded-full"
                className="font-semibold text-[12px] px-2 py-0.5"
              >
                {t('buttons.resume')}
              </Button>
              <RxHamburgerMenu
                onClick={() => setActive(!active)}
                className="cursor-pointer text-xl"
              />
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`fixed transition top-0 z-[51] md:hidden left-0 w-full h-full bg-white/20 backdrop-blur text-lg font-bold flex flex-col items-center gap-4 pt-4 ${active ? 'pointer-events-auto opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}`}
      >
        <NavbarMenu />
        <FaTimes
          onClick={() => setActive(false)}
          className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
        />
      </div>
      <Container className="hidden md:block absolute top-10 w-full left-1/2 translate-x-[-50%]">
        <div className="w-full flex items-center justify-between h-10 text-white">
          <NavbarBrandName />
          <div className="flex gap-4 items-center">
            <Dropdown.Menu>
              <IoLanguage className="nav-icon" />
              <Dropdown.Content>
                {Object.values(langs).map((lang) => (
                  <Dropdown.Item
                    onClick={() => i18n.changeLanguage(lang.meta.code)}
                    key={lang.meta.code}
                  >
                    {lang.meta.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Content>
            </Dropdown.Menu>
            <a
              href="https://github.com/justheimsk"
              target="_blank"
              rel="noreferrer"
              aria-label="Github profile"
            >
              <FaGithub className="nav-icon" />
            </a>
            <FaDiscord className="nav-icon text-[#5865F2]" />
            <Button clickEffect="shrink" rounded="rounded-full">
              {t('buttons.resume')}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export function NavbarBrandName() {
  return (
    <span className="font-semibold text-sm md:text-lg capitalize">
      {process.env.PUBLIC_NAME}
    </span>
  )
}

export function NavbarMenu() {
  const { t } = useTranslation();

  return (
    <>
      <NavbarLink nhref="home" active>
        {t('navbar.home')}
      </NavbarLink>
      <NavbarLink nhref="projects">{t('navbar.projects')}</NavbarLink>
      <NavbarLink nhref="skills">{t('navbar.skills')}</NavbarLink>
      <NavbarLink>{t('navbar.contact')}</NavbarLink>
    </>
  );
}

export interface NavbarLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  nhref?: string;
}

export function NavbarLink(props: NavbarLinkProps) {
  function scrollTo() {
    if (props.nhref) {
      const element = document.getElementById(props.nhref);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <button
      type="button"
      onClick={() => scrollTo()}
      className={`py-0.5 px-3 outline-none rounded-full cursor-pointer transition ${props.active ? 'bg-white text-black' : 'hover:bg-white/10 text-white'} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
