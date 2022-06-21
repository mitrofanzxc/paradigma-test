import { FC } from 'react';
import { IPrimaryButton } from '../../../shared/interface';

import './PrimaryButton.scss';

const PrimaryButton: FC<IPrimaryButton> = ({ description, className, arrow }) => {
  return (
    <button className={`primary-button ${className ? className : ''}`}>
      <h3 className="h3">{description}</h3>
      <div className={`arrow ${arrow}`} />
    </button>
  );
};

export { PrimaryButton };
