import { FC } from 'react';
import { IModal } from '../../shared/interface';
import { PrimaryButton } from '../buttons';

import './Modal.scss';

const Modal: FC<IModal> = ({ isModalOpen, handleIsModalOpen }) => {
  const modalEventHandler = () => {
    handleIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={modalEventHandler}
        className={`modal__shadow ${isModalOpen ? 'modal__shadow-active' : ''}`}
      />
      <div className={`modal ${isModalOpen ? 'modal-active' : ''}`}>
        <div className="modal__container">
          <h2 className="h2">
            Быстро
            <br />
            оставить заявку
          </h2>
          <PrimaryButton
            description="Позвоните мне"
            className="bg-orange"
            arrow="arrow-right"
            type="submit"
          />
          <button
            className="button-navigation button-navigation__close"
            onClick={modalEventHandler}
          />
        </div>
      </div>
    </>
  );
};

export { Modal };
