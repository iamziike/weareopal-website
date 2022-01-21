import { motion } from 'framer-motion';

import classes from './Home.module.css';
import ListItemSwitcher from '../../UI/ListItemSwitcher/ListItemSwitcher';
import Main from './Main/Main';
import Footer from '../../Layouts/Footer/Footer';
import { routesAnimate } from '../../../custom-animations/animations';

const motives = [
  'Innovative Thinkers',
  'Digital Mavericks',
  'Creative Visionaries',
  'Experience Experts',
  'Problem Solvers',
];

const Home = () => {
  const motivesRender = motives.map((motive, index) => (
    <li key={index} className={classes['hero__motive']}>
      {motive}
    </li>
  ));

  return (
    <motion.div className={classes.home} {...routesAnimate}>
      <section className={classes.hero}>
        <h1 className={classes['hero__header-text']}>
          <span>User Experience &</span>
          <span>Creative Specialist</span>
        </h1>
        <ul className={classes.motives}>
          <div className={classes['hero__end-text']}>
            *Helping you connect with
            <ListItemSwitcher>{motivesRender}</ListItemSwitcher>
          </div>
        </ul>
      </section>
      <Main />
      <Footer />
    </motion.div>
  );
};

export default Home;
