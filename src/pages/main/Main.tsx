import { FC } from 'react';
import { PrimaryButton } from '../../components/buttons';

import './Main.scss';

const Main: FC = () => {
  return (
    <>
      <aside className="aside">
        <ul>
          <li className="aside-item">
            <strong className="bold">Гарантия от 50 лет</strong> на материалы и 5 лет на монтаж
          </li>
          <li className="aside-item">
            <strong className="bold">Замер, монтажный проект</strong> и еще 4 услуги бесплатно
          </li>
          <li className="aside-item">
            <strong className="bold">Сметы точны</strong> до копейки
          </li>
          <li className="aside-item">
            <strong className="bold">Поэтапная оплата,</strong> кредит или рассрочка
          </li>
          <li className="aside-item">
            <strong className="bold">Наши крыши в каждом поселке</strong> и дачном сообществе
            региона
          </li>
        </ul>
      </aside>
      <div className="slider__wrapper">
        <h1 className="h1">
          Продажа <strong className="semi-bold">кровельных материалов</strong> в Тюмени и Тюменской
          области
        </h1>
        <div className="slider-buttons__wrapper">
          <ul className="slider-buttons">
            <li className="slider-button" />
            <li className="slider-button" />
            <li className="slider-button" />
            <li className="slider-button" />
          </ul>
          <h2 className="h2">и монтаж под ключ</h2>
        </div>
        <div className="primary-buttons">
          <PrimaryButton
            description="Рассчитать стоимость материалов и монтажа"
            className="bg-green"
          />
          <PrimaryButton description="Записаться на просмотр объектов" className="bg-orange" />
        </div>
        <div className="click__wrapper">
          <div className="click" />
          <p className="click__description">
            <strong className="semi-bold">Ответьте на несколько вопросов и получите</strong> сметную
            стоимость и 3 подарка за экономию нашего времени
          </p>
        </div>
      </div>
    </>
  );
};

export { Main };
