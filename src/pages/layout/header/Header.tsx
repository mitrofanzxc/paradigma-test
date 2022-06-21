import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../../shared/routes';
import { IHeader } from '../../../shared/interface';

import Logo from '../../../images/logo.png';
import './Header.scss';

const Header: FC<IHeader> = ({ isModalOpen, handleIsModalOpen, useModalOpen }) => {
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
        <li className="contacts-item briefly-info__wrapper">
          <p className="briefly-info__text">
            <strong className="bold">Кровельные и фасадные материалы</strong> в Тюмени и области.
          </p>
          <p className="briefly-info__text">
            Профессиональный монтаж
            <br />с 2010 года.
          </p>
        </li>
        <li className="contacts-item pdf__wrapper">
          <div className="circle">Pdf</div>
          <p className="semi-bold dotted">Скачать прайс-каталог</p>
        </li>
        <li className="contacts-item">
          <img src={Logo} alt="Logo" className="logo" />
        </li>
        <li className="contacts-item contacts-item__socials">
          <div className="socials-info__wrapper">
            <div className="dot" />
            <p className="socials-info">
              Отвечаем <strong className="bold">онлайн</strong>
            </p>
          </div>
          <ul className="socials">
            <li className="circle viber" />
            <li className="circle whatsapp" />
            <li className="circle telegram" />
          </ul>
        </li>
        <li className="contacts-item">
          <div className="tel__wrapper">
            <p>
              <strong className="bold">Пн-Пт</strong> 9:00 - 18:00,{' '}
              <strong className="bold">Сб</strong> 10:00 - 18:00
            </p>
            <a href="tel:+788002225460" className="tel">{`8 (800) 222-54-60`}</a>
            <p className="semi-bold dotted color-green">Позвоните мне</p>
          </div>
        </li>
      </ul>
    </header>
  );
};

export { Header };
