import { motion } from 'framer-motion';

import classes from './Why.module.css';
import { routesAnimate } from '../../../custom-animations/animations';
import Header from '../../Layouts/Header/Header';

const headerData = {
  title: 'Why',
  descr: (
    <>
      This is a redo of the landing page of{' '}
      <a className={classes.highlight} href='https://weareopal.digital'>
        weareopal.digital
      </a>
      .
      <br />I really loved their use of colors and just about everything
      entirely so I felt the need to build a look-alike.
      <br />
      Well the layout is the same. Most of the functionality is handcrafted but
      the slider carousel is made possible by the Swiper library (really
      modular) and the animations are a mix of Framer Motion and vanilla CSS.
    </>
  ),
};

const LiveJobs = () => {
  return (
    <motion.div {...routesAnimate}>
      <Header {...headerData} />
    </motion.div>
  );
};

export default LiveJobs;
