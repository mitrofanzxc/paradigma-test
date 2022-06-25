import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../index';
import { ILayout } from '../../shared/interface';

const Layout: FC<ILayout> = ({
  isModalOpen,
  handleIsModalOpen,
  isToastOpen,
  handleIsToastOpen,
  isBurgerOpen,
  handleIsBurgerOpen,
  useBodyOverflow,
}) => {
  return (
    <>
      <Header
        isModalOpen={isModalOpen}
        handleIsModalOpen={handleIsModalOpen}
        isToastOpen={isToastOpen}
        handleIsToastOpen={handleIsToastOpen}
        isBurgerOpen={isBurgerOpen}
        handleIsBurgerOpen={handleIsBurgerOpen}
        useBodyOverflow={useBodyOverflow}
      />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
