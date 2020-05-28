import { useState, useEffect } from 'react';

export const useImagePreloader = source => {
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    setIsPreloaded(false);
    let isCancelled = false;

    const holder = new Image();
    holder.onload = () => !isCancelled && setIsPreloaded(true);
    holder.src = source;

    return () => isCancelled = true;
  }, [source]);

  return isPreloaded;
};