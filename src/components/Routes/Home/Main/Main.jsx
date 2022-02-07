import { motion } from 'framer-motion';

import classes from './Main.module.css';
import Button from '../../../UI/Button/Button';
import jobImage from '../../../../assets/images/future-designer.webp';
import HotRole from '../../../HotRole/HotRole';
import LatestJobs from '../LatestJobs/LatestJobs';

import latestJobImage from '../../../../assets/images/copy-of-untitled.webp';
import { ReactComponent as SocialPointSVG } from '../../../../assets/images/socialpoint.svg';
import { ReactComponent as HugeSVG } from '../../../../assets/images/huge.svg';
import { ReactComponent as VccpSVG } from '../../../../assets/images/vccp.svg';
import { ReactComponent as Baybylon } from '../../../../assets/images/babylon.svg';
import ListItemSwitcher from '../../../UI/ListItemSwitcher/ListItemSwitcher';
import { whileViewing } from '../../../../custom-animations/animations';

const companiesLogo = [
  { id: Math.random(), Logo: SocialPointSVG },
  { id: Math.random(), Logo: VccpSVG },
  { id: Math.random(), Logo: Baybylon },
  { id: Math.random(), Logo: VccpSVG },
  { id: Math.random(), Logo: HugeSVG },
  { id: Math.random(), Logo: VccpSVG },
  { id: Math.random(), Logo: HugeSVG },
];

const reviews = [
  {
    text: "Easily the best recruiter I have worked with. In the past, I have been represented by Nathan, and he was brilliant. Now we work with Nathan to recruit UX'rs & Products Designers for our team. He always finds us great candidates, and is open and honest about the people he puts forward.  Would highly recommend Nathan to represent you or to find you amazing people.",
    by: 'Drew Tavernier',
    jobType: '(Lead Product Designer) - Dunelm',
    rating: '★★★★★',
  },
  {
    text: "Thoroughly enjoyed working with Nathan for our most recent role. The candidates put forward were of a very high standard and all very engaged and up for the challenge of our interview process. I'm looking forward to working with him in the future.",
    by: 'Guy Newsom',
    jobType: '(VP Product & Design) - XYZ Reality',
    rating: '★★★★★',
  },
];

const hotNewRoles = [
  {
    id: Math.random(),
    type: 'Senior Experience Designer',
    shortDescr:
      'New roles across Product/Experience Design with one of the UK’s Biggest Household Names. Within the roles - you could find yourself shaping e-commerce journeys and in-store digital experiences. Defining digital loyalty and designing new financial services for their multi-brand, multi-...',
    image: jobImage,
    salary: 'Up to £70,000k + 20% Bonus.',
    location: 'C.London & Remote',
  },
];

const latestJobs = [
  { id: Math.random(), src: latestJobImage, title: 'UX Director' },
  { id: Math.random(), src: latestJobImage, title: 'UX Researcher' },
  { id: Math.random(), src: latestJobImage, title: 'Experince Designer' },
  { id: Math.random(), src: latestJobImage, title: 'Product Designer' },
  { id: Math.random(), src: latestJobImage, title: 'Service/OX Designer' },
];

const Main = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const styledReviews = reviews.map((review, index) => (
    <div key={index} className={classes.review}>
      <p>{review.text}</p>
      <div>
        <p className={classes['review__by']}>{review.by}</p>
        <p>{review.jobType}</p>
      </div>
      <p className={classes['review__rating']}>{review.rating}</p>
    </div>
  ));

  return (
    <section className={classes.main}>
      <div className={classes['topics']}>
        <section className={`${classes.topic} ${classes['hiring-topic']}`}>
          <h2 className={classes['topic__header-text']}>Looking To Hire?</h2>
          <p className={classes['topic__text']}>
            Finding the right people and skills to expand your business,
            increase capabilities, or a successor to an existing role can take
            up a lot of valuable time. We at Opal, specialise in finding our
            clients the perfect fit, giving you the freedom to focus on what
            matters most.
          </p>
          <a href='#contact-form'>
            <Button>Fill a Roll</Button>
          </a>
        </section>
        <section className={`${classes.topic} ${classes['moving-topic']}`}>
          <h2 className={classes['topic__header-text']}>Looking To Move?</h2>
          <p className={classes['topic__text']}>
            We help our candidates take the next steps in their careers. Whether
            you’re looking for a new challenge, to specialise, or you’re moving
            somewhere new, we’ll work closely with you to ensure that your
            skills get the recognition they deserve.
          </p>
          <a href='#get-hired'>
            <Button>Get Hired</Button>
          </a>
        </section>
      </div>
      <section className={classes.about}>
        <motion.h2
          className={`${classes['about__header-text']} focused-text`}
          {...whileViewing}
        >
          Why Opal?
        </motion.h2>
        <motion.p className={classes['about__intro']} {...whileViewing}>
          The reason why we’re good at what we do is because we know lots of
          people who are <span className='focused-text'>just like you.</span>
        </motion.p>
        <motion.p className={classes['about__message']} {...whileViewing}>
          We’ve spent many years immersing ourselves within the ux and creative
          industries, building a network of relationships with the curious,
          ambitious, and the big-picture thinkers. People that want to leave
          their mark and demonstrate passion for their craft. We operate in your
          circles and associate with your people. Building a network that feeds
          us valuable daily market research, that’s hot-off-the-press and bang
          up to date. Insights that’ll provide you with opportunities to support
          your search and give you an edge over your competition.
        </motion.p>
      </section>
      {hotNewRoles.map((role) => (
        <HotRole key={role.id} {...role} />
      ))}
      <div className={classes['latest-jobs-wrappers']}>
        <LatestJobs jobList={latestJobs} />
      </div>
      <section className={classes['partners-list']}>
        <h2 className={classes['partners-list__header-text']}>Our Partners</h2>
        <p>
          We’re currently supporting some of most exciting brands in Europe,
          from innovative start-ups, world leading gaming studios to
          ground-breaking projects with Global Design Agencies.
        </p>
        <div className={classes['partners-list__logos-wrapper']}>
          {companiesLogo.map((logo) => (
            <div
              key={logo.id}
              className={classes['partners-list__image-wrapper']}
            >
              <logo.Logo />
            </div>
          ))}
        </div>
        <p>
          From seed stage start-ups to household names, our partners model is
          aimed at helping those scaling up to hire talent quickly and
          discreetly whilst being cost effective.
        </p>
        <Button className={classes.button}>Join us</Button>
      </section>
      <div className={classes['reviews-and-contact']}>
        <div className={classes['reviews']}>
          <h3 className={classes['reviews__header-text']}>
            Don't just take our word for it
          </h3>
          <ListItemSwitcher duration={20000}>{styledReviews}</ListItemSwitcher>
        </div>
        <form
          className={`${classes.form} no-radius-button`}
          onSubmit={formSubmitHandler}
        >
          <textarea placeholder='Can you help me find a dope candidate for a kick-ass role'></textarea>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <Button>Send It</Button>
        </form>
      </div>
    </section>
  );
};

export default Main;
