import { FC } from 'react';
import { PrimaryButton } from '../../components/buttons';

import './Main.scss';

const Main: FC = () => {
  return (
    <>
      <aside className="aside">
        <ul>
          <li className="aside-item">
            <span className="bold">Гарантия от 50 лет</span> на материалы и 5 лет на монтаж
          </li>
          <li className="aside-item">
            <span className="bold">Замер, монтажный проект</span> и еще 4 услуги бесплатно
          </li>
          <li className="aside-item">
            <span className="bold">Сметы точны</span> до копейки
          </li>
          <li className="aside-item">
            <span className="bold">Поэтапная оплата,</span> кредит или рассрочка
          </li>
          <li className="aside-item">
            <span className="bold">Наши крыши в каждом поселке</span> и дачном сообществе региона
          </li>
        </ul>
      </aside>
      <div className="slider__wrapper">
        <h1 className="h1">
          Продажа <span className="semi-bold">кровельных материалов</span> в Тюмени и Тюменской
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
        <div className="slider-buttons">
          <PrimaryButton
            description="Рассчитать стоимость материалов и монтажа"
            className="bg-green"
          />
          <PrimaryButton description="Записаться на просмотр объектов" className="bg-orange" />
        </div>
      </div>
    </>
  );
};

export { Main };
