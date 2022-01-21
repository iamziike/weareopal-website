import { useEffect, useRef } from 'react';

import classes from './CustomCursor.module.css';

const CustomCursor = () => {
  const newPosition = useRef();
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener('mousemove', ({ x, y }) => {
      newPosition.current = { x, y };
    });

    const moveCustomCursor = () => {
      if (newPosition.current) {
        const { x, y } = newPosition.current;
        const element = cursor.current;
        element.style.setProperty('--x', x + 'px');
        element.style.setProperty('--y', y + 'px');
      }
      requestAnimationFrame(moveCustomCursor);
    };
    moveCustomCursor();
  }, []);

  return <div className={`${classes.cursor} blend-colors`} ref={cursor}></div>;
};

export default CustomCursor;
