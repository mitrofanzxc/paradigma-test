import { FC } from 'react';

import './Toast.scss';

const Toast: FC = () => {
  return (
    <div className={`toast`}>
      <div className="toast__wrapper">
        <h2 className="h3">
          Ваша заявка принята,
          <br />
          ожидайте звонка!
        </h2>
        <button className="button-navigation button-navigation__close" />
      </div>
    </div>
  );
};

export { Toast };
