import React from 'react';

import { useImagePreloader } from '../../hooks/useImagePreloader';

const BackgroundImage = ({ main, fallback, ...rest }) => {
  const isPreloaded = useImagePreloader(main);

  return (
    <div
      style={{ backgroundImage: `url(${isPreloaded ? main : fallback}` }}
      {...rest}
    />
  );
};

export default BackgroundImage;