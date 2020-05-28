import { useLayoutEffect } from 'react';

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const {
      overflow: initialOverflow,
      paddingRight: initialPaddingRight
    } = window.getComputedStyle(document.body);

    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = scrollbarWidth + 'px';
    }

    return () => {
      document.body.style.overflow = initialOverflow;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = initialPaddingRight;
      }
    }
  }, []);
};