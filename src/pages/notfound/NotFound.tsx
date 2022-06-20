import { FC } from 'react';

import './NotFound.scss';

const NotFound: FC = () => {
  return (
    <section data-testid="NotFoundPage" className="notfound">
      <h1 className="h1">404</h1>
      <h2 className="h2">Not Found</h2>
      <h3 className="h3">Try again later</h3>
    </section>
  );
};

export { NotFound };
