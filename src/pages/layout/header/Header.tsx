import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';

import './Header.scss';

const Header: FC = () => {
  const { main } = PATHS;

  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to={main} className="nav-item__link home" />
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Каталог
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Преимущества
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Примеры работ
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Монтаж
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Отзывы
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Ответы на вопросы
            </Link>
          </li>
          <li className="nav-item">
            <Link to={main} className="nav-item__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <ul className="nav contacts">
        <li>
          <p>
            <span className="bold">Кровельные и фасадные материалы</span> в Тюмени и области.
          </p>
          <p>Профессиональный монтаж с 2010 года.</p>
        </li>
        <li className="contacts-item">
          <div className="circle">Pdf</div>
          <p className="semi-bold">Скачать прайс-каталог</p>
        </li>
        <li></li>
        <li>
          <p>
            Отвечаем <span className="bold">онлайн</span>
          </p>
        </li>
        <li>
          <p>
            <span className="bold">Пн-Пт</span> 9:00 - 18:00, <span className="bold">Сб</span> 10:00
            - 18:00
          </p>
        </li>
      </ul>
    </header>
  );
};

export { Header };
