import { FC } from 'react';
import { IModal } from '../../shared/interface';

import './Modal.scss';

const Modal: FC<IModal> = () => {
  return (
    <>
      <div className={`modal__shadow`} />
      <div className={`modal`}>
        <div className="modal__container"></div>
      </div>
    </>
  );
};

export { Modal };
