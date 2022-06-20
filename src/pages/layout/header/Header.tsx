import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';

import './Header.scss';

const Header: FC = () => {
  const { main } = PATHS;

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink to={main} className="nav__list-item__link home" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
