export let whileHover = {
  scale: 0.9,
  transition: {
    type: 'spring',
    damping: 3,
  },
};

export const whileFocus = {
  scale: [0.9, 0.7, 0.9],
  transition: {
    type: 'spring',
    mass: 10,
  },
};

export const routeExit = {
  scale: 0.8,
  transformOrigin: 0,
  x: '-100vw',
  transition: {
    x: {
      delay: 0.3,
      damping: 10,
      mass: 0.8,
    },
  },
};

export const routeEntry = {
  x: 0,
};

export const routeBegin = {
  x: '100vw',
};

export const routesAnimate = {
  variants: {
    initial: routeBegin,
    animate: routeEntry,
    exit: routeExit,
  },
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
};

export const whileViewing = {
  initial: {
    opacity: 0,
    x: -50,
  },

  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 2,
    },
  },
};
