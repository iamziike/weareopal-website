import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import classes from './ListItemSwitcher.module.css';

const opacityVariant = {
  variants: {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    end: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  },
  initial: 'initial',
  animate: 'visible',
  exit: 'end',
};

const verticalMoveVariant = {
  variants: {
    initial: {
      y: '-100%',
    },
    visible: {
      y: 0,
    },
    end: {
      y: '100%',
      transition: {
        duration: 0.1,
      },
    },
  },
  initial: 'initial',
  animate: 'visible',
  exit: 'end',
};

const horizontalMoveVariant = {
  variants: {
    initial: {
      x: '-100%',
    },
    visible: {
      x: 0,
    },
    end: {
      x: '100%',
      transition: {
        duration: 0.1,
      },
    },
  },
  initial: 'initial',
  animate: 'visible',
  exit: 'end',
};

const ListItemSwitcher = ({ children, type = 'opacity', duration = 5000 }) => {
  const [indexVisible, setVisibleIndex] = useState(0);
  const timeoutHandler = useRef();

  let animationToUse = opacityVariant;
  if (type === 'verticalMove') animationToUse = verticalMoveVariant;
  if (type === 'horizontalMove') animationToUse = horizontalMoveVariant;

  const items = children.map((item, index) => (
    <motion.div key={index} {...animationToUse}>
      {item}
    </motion.div>
  ));

  useEffect(() => {
    clearInterval(timeoutHandler.current);
    timeoutHandler.current = setInterval(() => {
      setVisibleIndex((prevIndex) => {
        const index = prevIndex + 1;
        return index === items.length ? 0 : index;
      });
    }, duration);
  }, [items.length, duration]);

  const index = indexVisible < 0 ? 0 : indexVisible;

  return (
    <motion.div className={classes.items}>
      <AnimatePresence exitBeforeEnter>{items[index]}</AnimatePresence>
    </motion.div>
  );
};

export default ListItemSwitcher;
