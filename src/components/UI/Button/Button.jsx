import { motion } from 'framer-motion';

import classes from './Button.module.css';
import { whileHover, whileFocus } from '../../../custom-animations/animations';

const Button = ({ children, className, btnStyle }) => {
  let defaultStyle = `${classes['btn-default']} ${className}`;
  if (btnStyle) {
    defaultStyle = `${classes[btnStyle]} ${className}`;
    whileHover = {};
  }

  return (
    <motion.button
      className={defaultStyle}
      whileHover={whileHover}
      whileTap={whileFocus}
    >
      {children}
    </motion.button>
  );
};

export default Button;
