import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes['footer__first-child']}>
        <p>Opal Digital, White Collar Factory,</p>
        <p>1 Old Street Yard, Shoreditch, London, EC1Y 8AF</p>
        <img src='' alt='' />© 2021 Opal Digital. All rights reserved.
      </div>
      <div className={classes['footer__second-child']}>
        <p>Live Jobs</p>
        <p>Client Services</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
