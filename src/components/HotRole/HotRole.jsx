import Button from '../UI/Button/Button';
import classes from './HotRole.module.css';

const textNotfier = '// HOT NEW ROLE '.repeat(10);

const HotRole = ({ type, shortDescr, image, salary, location }) => {
  return (
    <section className={classes['hot-role']}>
      <div className={classes['hot-role__text-content']}>
        <h2 className={classes['hot-role__text-content__info']}>
          Hot new role
        </h2>
        <h3 className={classes['hot-role__text-content__type']}>{type}</h3>
        <p className={classes['hot-role__text-content__descr']}>{shortDescr}</p>
      </div>
      <div className={classes['hot-role__image-content']}>
        <div className={classes['top-animated-notifier']}>
          <p>{textNotfier}</p>
        </div>
        <div className={classes['right-animated-notifier']}>
          <p>{textNotfier}</p>
        </div>
        <div className={classes['bottom-animated-notifier']}>
          <p>{textNotfier}</p>
        </div>
        <div className={classes['left-animated-notifier']}>
          <p> {textNotfier}</p>
        </div>
        <div className={classes['image-wrapper']}>
          <img src={image} alt='job visual' />
        </div>
      </div>
      <div className={`${classes['hot-role__other-details']} no-radius-button`}>
        <Button className={classes['hot-role__location']}>{location}</Button>
        <Button className={classes['hot-role__salary']}>{salary}</Button>
        <Button className={classes['hot-role__view']}>View Role</Button>
      </div>
    </section>
  );
};

export default HotRole;
