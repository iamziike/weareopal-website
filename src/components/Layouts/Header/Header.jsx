import classes from './Header.module.css';

const Header = ({ title, descr }) => {
  return (
    <section className={classes['header']}>
      <h1 className={classes['header__hero-text']}>{title}</h1>
      <p className={classes['header__descr']}>
        <span>{descr}*</span>
      </p>
    </section>
  );
};

export default Header;
