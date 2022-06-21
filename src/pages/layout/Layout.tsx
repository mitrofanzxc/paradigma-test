import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../index';
import { ILayout } from '../../shared/interface';

const Layout: FC<ILayout> = ({
  isModalOpen,
  handleIsModalOpen,
  useModalOpen,
  isToastOpen,
  handleIsToastOpen,
}) => {
  return (
    <>
      <Header
        isModalOpen={isModalOpen}
        handleIsModalOpen={handleIsModalOpen}
        useModalOpen={useModalOpen}
        isToastOpen={isToastOpen}
        handleIsToastOpen={handleIsToastOpen}
      />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
