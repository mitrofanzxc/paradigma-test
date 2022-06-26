import { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared/routes';

import { Layout, NotFound, Main } from './pages';

const App: FC = () => {
  const { main, notFound } = PATHS;

  // const useBodyOverflow = () => {
  //   useEffect(() => {
  //     const BODY = document.querySelector('.body');
  //     if (isModalOpen || isBurgerOpen) {
  //       BODY?.classList.add('body__overflow');
  //     } else {
  //       BODY?.classList.remove('body__overflow');
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [isModalOpen, isBurgerOpen]);
  // };

  // useBodyOverflow();

  return (
    <Routes>
      <Route path={main} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
