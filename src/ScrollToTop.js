// ScrollToTop.js
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  // For modern browsers
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // For legacy browsers
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
