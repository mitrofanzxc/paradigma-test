import { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared/routes';

import { Layout, NotFound, Main } from './pages';

const App: FC = () => {
  const { main, notFound } = PATHS;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const handleIsModalOpen = (data: boolean) => {
    setIsModalOpen(data);
  };

  const handleIsToastOpen = (data: boolean) => {
    setIsToastOpen(data);
  };

  const handleIsBurgerOpen = (data: boolean) => {
    setIsBurgerOpen(data);
  };

  const useBodyOverflow = () => {
    useEffect(() => {
      const BODY = document.querySelector('.body');
      if (isModalOpen || isBurgerOpen) {
        BODY?.classList.add('body__overflow');
      } else {
        BODY?.classList.remove('body__overflow');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen, isBurgerOpen]);
  };

  useBodyOverflow();

  return (
    <Routes>
      <Route
        path={main}
        element={
          <Layout
            isModalOpen={isModalOpen}
            handleIsModalOpen={handleIsModalOpen}
            isToastOpen={isToastOpen}
            handleIsToastOpen={handleIsToastOpen}
            isBurgerOpen={isBurgerOpen}
            handleIsBurgerOpen={handleIsBurgerOpen}
            useBodyOverflow={useBodyOverflow}
          />
        }
      >
        <Route
          index
          element={
            <Main
              isModalOpen={isModalOpen}
              handleIsModalOpen={handleIsModalOpen}
              isToastOpen={isToastOpen}
              handleIsToastOpen={handleIsToastOpen}
              isBurgerOpen={isBurgerOpen}
              handleIsBurgerOpen={handleIsBurgerOpen}
              useBodyOverflow={useBodyOverflow}
            />
          }
        />
        <Route path={notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
