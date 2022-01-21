import { motion } from 'framer-motion';

import classes from './NotFound.module.css';
import { routesAnimate } from '../../../custom-animations/animations';

const NotFound = () => {
  return (
    <motion.div {...routesAnimate} className={classes['not-found']}>
      <h1>404</h1>
    </motion.div>
  );
};

export default NotFound;
