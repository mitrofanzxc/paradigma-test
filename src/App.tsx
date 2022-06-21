import { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './shared/routes';

import { Layout, NotFound, Main } from './pages';

const App: FC = () => {
  const { main, notFound } = PATHS;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleIsModalOpen = (data: boolean) => {
    setIsModalOpen(data);
  };

  const useModalOpen = () => {
    useEffect(() => {
      const BODY = document.querySelector('.body');
      if (isModalOpen) {
        BODY?.classList.add('body__overflow');
      } else {
        BODY?.classList.remove('body__overflow');
      }
    }, [isModalOpen]);
  };

  useModalOpen();

  return (
    <Routes>
      <Route
        path={main}
        element={
          <Layout
            isModalOpen={isModalOpen}
            handleIsModalOpen={handleIsModalOpen}
            useModalOpen={useModalOpen}
          />
        }
      >
        <Route index element={<Main />} />
        <Route path={notFound} element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { App };
