import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../index';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export { Layout };
