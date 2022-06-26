import { FC } from 'react';
import { PrimaryButton } from '../../components/buttons';
import { Modal } from '../../components/modal/Modal';
import { Toast } from '../../components/toast/Toast';

import './Main.scss';

const Main: FC = () => {
  return (
    <>
      <aside className={`aside`}>
        <button className={`circle button-aside`} />
        <h4 className="h4 aside-item">
          <strong className="fw-bold">Гарантия от 50 лет</strong> на материалы и 5 лет на монтаж
        </h4>
        <h4 className="h4 aside-item">
          <strong className="fw-bold">Замер, монтажный проект</strong> и еще 4 услуги бесплатно
        </h4>
        <h4 className="h4 aside-item">
          <strong className="fw-bold">Сметы точны</strong> до копейки
        </h4>
        <h4 className="h4 aside-item">
          <strong className="fw-bold">Поэтапная оплата,</strong> кредит или рассрочка
        </h4>
        <h4 className="h4 aside-item">
          <strong className="fw-bold">Наши крыши в каждом поселке</strong> и дачном сообществе
          региона
        </h4>
      </aside>
      <div className="slider__wrapper">
        <h1 className="h1">
          Продажа <strong className="fw-semi-bold">кровельных материалов</strong> в Тюмени и
          Тюменской области
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
            arrow="arrow-up"
          />
          <PrimaryButton
            description="Записаться на просмотр объектов"
            className="bg-orange"
            arrow="arrow-up"
          />
        </div>
        <div className="click__wrapper">
          <div className="click" />
          <p className="click__description">
            <strong className="fw-semi-bold">Ответьте на несколько вопросов и получите</strong>{' '}
            сметную стоимость и 3 подарка за экономию нашего времени
          </p>
        </div>
      </div>
      <Modal />
      <Toast />
    </>
  );
};

export { Main };
