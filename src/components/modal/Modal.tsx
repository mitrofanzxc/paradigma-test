import { FC } from 'react';
import { IModal } from '../../shared/interface';

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
          <div className="modal__info">
            <h3 className="h3">Description</h3>
            <ul className="modal__list"></ul>
          </div>
        </div>
        <button
          className="button-navigation button-navigation__close"
          onClick={modalEventHandler}
        />
      </div>
    </>
  );
};

export { Modal };
