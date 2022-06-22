import { FC, useState } from 'react';
import { PrimaryButton } from '../../components/buttons';
import { IMain } from '../../shared/interface';
import { Modal } from '../../components/modal/Modal';
import { Toast } from '../../components/toast/Toast';

import './Main.scss';

const Main: FC<IMain> = ({
  isModalOpen,
  handleIsModalOpen,
  useModalOpen,
  isToastOpen,
  handleIsToastOpen,
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const asideHandler = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const modalEventHandler = () => {
    handleIsModalOpen(true);
  };

  return (
    <>
      <aside className={`aside ${isAsideOpen ? 'aside-active' : ''}`}>
        <ul>
          <button
            className={`circle button-aside ${isAsideOpen ? 'button-aside__close' : ''}`}
            onClick={asideHandler}
          />
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
            arrow="arrow-up"
            onClick={modalEventHandler}
          />
          <PrimaryButton
            description="Записаться на просмотр объектов"
            className="bg-orange"
            arrow="arrow-up"
            onClick={modalEventHandler}
          />
        </div>
        <div className="click__wrapper">
          <div className="click" />
          <p className="click__description">
            <strong className="semi-bold">Ответьте на несколько вопросов и получите</strong> сметную
            стоимость и 3 подарка за экономию нашего времени
          </p>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        handleIsModalOpen={handleIsModalOpen}
        useModalOpen={useModalOpen}
        handleIsToastOpen={handleIsToastOpen}
      />
      <Toast isToastOpen={isToastOpen} handleIsToastOpen={handleIsToastOpen} />
    </>
  );
};

export { Main };
