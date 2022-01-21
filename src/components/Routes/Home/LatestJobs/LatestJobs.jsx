import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import './custom-swiper.css';
import classes from './LatestJobs.module.css';
import Button from '../../../UI/Button/Button';

SwiperCore.use([Autoplay, Navigation]);

const alterSlides = (windowWidth, setSettings) => {
  if (windowWidth > 1500)
    setSettings((current) => ({ ...current, slidesPerView: 4 }));
  else if (windowWidth > 1000)
    setSettings((current) => ({ ...current, slidesPerView: 3 }));
  else if (windowWidth >= 600)
    setSettings((current) => ({ ...current, slidesPerView: 2 }));
  else if (windowWidth < 600)
    setSettings((current) => ({ ...current, slidesPerView: 1 }));
};

const LatestJobs = ({ jobList }) => {
  const [settings, setSettings] = useState({
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: true,
    className: classes['custom-swiper'],
  });

  const styledList = jobList.map((job) => (
    <SwiperSlide key={job.id} className={classes['custom-swiper-slide']}>
      <div className={classes['image-wrapper']}>
        <img src={job.src} alt='job render' />
      </div>
      <div className={classes.title}>{job.title}</div>
      <div className={`${classes.cta} no-radius-button`}>
        <Button className={classes['view-role']}>View Role</Button>
        <Button className={classes['apply']}>Apply Now</Button>
      </div>
    </SwiperSlide>
  ));

  useEffect(() => {
    alterSlides(window.outerWidth, setSettings);

    window.onresize = () => {
      alterSlides(window.outerWidth, setSettings);
    };
  }, []);

  return (
    <div className={classes['latest-job']}>
      <h2 className={classes['header-text']}>
        <p>{'LATEST JOB   '.repeat(10)}</p>
      </h2>
      <Swiper resizeObserver={true} {...settings}>
        {styledList}
      </Swiper>
    </div>
  );
};

export default LatestJobs;
