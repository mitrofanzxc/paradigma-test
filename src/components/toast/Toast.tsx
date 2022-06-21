import { FC } from 'react';
import { IToast } from '../../shared/interface';

import './Toast.scss';

const Toast: FC<IToast> = ({ isToastOpen, handleIsToastOpen }) => {
  const toastEventHandler = () => {
    handleIsToastOpen(false);
  };

  return (
    <div className={`toast ${isToastOpen ? 'toast-active' : ''}`}>
      <div className="toast__wrapper">
        <h2 className="h3">
          Ваша заявка принята,
          <br />
          ожидайте звонка!
        </h2>
        <button
          className="button-navigation button-navigation__close"
          onClick={toastEventHandler}
        />
      </div>
    </div>
  );
};

export { Toast };
