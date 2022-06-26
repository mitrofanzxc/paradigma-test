import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '../../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { switchBurgerOff, switchBurgerToggle } from '../../../features/burgerSlice';

import { PATHS } from '../../../shared/routes';
import { Modal } from '../../../components/modal/Modal';
import { Toast } from '../../../components/toast/Toast';

import Logo from '../../../images/logo.png';
import './Header.scss';

const Header: FC = () => {
  const { main } = PATHS;
  const isBurgerOpen = useSelector((state: RootState) => state.burger.isBurgerOpen);
  const dispatchBurger = useDispatch();

  return (
    <>
      <header className="header" data-testid="header">
        <div
          onClick={() => dispatchBurger(switchBurgerOff())}
          className={`burger__shadow ${isBurgerOpen ? 'burger__shadow-active' : ''}`}
        />
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to={main} className="home" />
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
            <li className="nav-item">
              <button className="burger" onClick={() => dispatchBurger(switchBurgerToggle())}>
                <span className={`burger-line ${isBurgerOpen ? 'burger-line-active' : ''}`} />
                <span className={`burger-line ${isBurgerOpen ? 'burger-line-active' : ''}`} />
                <span className={`burger-line ${isBurgerOpen ? 'burger-line-active' : ''}`} />
              </button>
            </li>
          </ul>
        </nav>
        <ul className="nav contacts">
          <li className="contacts-item briefly-info__wrapper">
            <p className="briefly-info__text">
              <strong className="fw-bold">
                Кровельные и фасадные
                <br />
                материалы
              </strong>{' '}
              в Тюмени и области.
            </p>
            <p className="briefly-info__text">
              Профессиональный монтаж
              <br />с 2010 года.
            </p>
          </li>
          <li className="contacts-item pdf__wrapper">
            <div className="circle pdf cursor-pointer">Pdf</div>
            <p className="fw-semi-bold dotted cursor-pointer">Скачать прайс-каталог</p>
          </li>
          <li className="contacts-item">
            <Link to={main}>
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </li>
          <li className="contacts-item contacts-item__socials">
            <div className="socials-info__wrapper">
              <div className="dot" />
              <p className="socials-info">
                Отвечаем <strong className="fw-bold">онлайн</strong>
              </p>
            </div>
            <div className="socials">
              <a
                href="viber://chat?number=%2B788002225460"
                target="_blank"
                rel="noreferrer noopener"
                className="circle viber"
              />
              <a
                href="https://api.whatsapp.com/send/?phone=788002225460"
                target="_blank"
                rel="noreferrer noopener"
                className="circle whatsapp"
              />
              <a
                href="https://t.me/788002225460"
                target="_blank"
                rel="noreferrer noopener"
                className="circle telegram"
              />
            </div>
          </li>
          <li className="contacts-item">
            <div className="tel__wrapper">
              <p>
                <strong className="fw-bold">Пн-Пт</strong> 9:00 - 18:00,{' '}
                <strong className="fw-bold">Сб</strong> 10:00 - 18:00
              </p>
              <a href="tel:+788002225460" className="tel">{`8 (800) 222-54-60`}</a>
              <p className="fw-semi-bold dotted color-green cursor-pointer">Позвоните мне</p>
            </div>
          </li>
        </ul>
      </header>
      <Modal />
      <Toast />
    </>
  );
};

export { Header };
