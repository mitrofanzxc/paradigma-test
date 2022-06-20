import { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared/routes';

import { Layout, NotFound, Main, About, Portfolio, Certificates, Contacts } from './pages';

const App: FC = () => {
  const { main, about, portfolio, certificates, contacts, notFound } = PATHS;

  const [isEn, setIsEn] = useState<string>('en');
  const [isDark, setIsDark] = useState<string>('dark');

  const setLanguage = () => {
    if (isEn === 'en') {
      setIsEn('ru');
    } else {
      setIsEn('en');
    }
  };

  const setTheme = () => {
    if (isDark === 'dark') {
      setIsDark('light');
    } else {
      setIsDark('dark');
    }
  };

  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  useScrollToTop();

  const useSwitchTheme = () => {
    useEffect(() => {
      const BODY = document.querySelector('.body');
      const H3 = document.querySelectorAll('.h3');
      if (isDark !== 'dark') {
        BODY?.classList.add('body-light');
        H3?.forEach((element) => {
          element.classList.add('h3-light');
        });
      } else {
        BODY?.classList.remove('body-light');
        H3?.forEach((element) => {
          element.classList.remove('h3-light');
        });
      }
    }, [isDark]);
  };

  useSwitchTheme();

  return (
    <Routes>
      <Route
        path={main}
        element={
          <Layout
            useScrollToTop={useScrollToTop}
            useSwitchTheme={useSwitchTheme}
            language={isEn}
            theme={isDark}
            setLanguage={setLanguage}
            setTheme={setTheme}
          />
        }
      >
        <Route
          index
          element={
            <Main
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={about}
          element={
            <About
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={portfolio}
          element={
            <Portfolio
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={certificates}
          element={
            <Certificates
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={contacts}
          element={
            <Contacts
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
        <Route
          path={notFound}
          element={
            <NotFound
              useScrollToTop={useScrollToTop}
              useSwitchTheme={useSwitchTheme}
              language={isEn}
              theme={isDark}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export { App };
