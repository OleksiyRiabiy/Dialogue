import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import styles from './Slider.module.css';
import slide1 from '../../../assets/images/sliders/slide1.jpg';
import slide2 from '../../../assets/images/sliders/slide2.jpg';
import slide3 from '../../../assets/images/sliders/slide3.jpg';
import slide4 from '../../../assets/images/sliders/slide4.jpg';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const slider = (props) => {
  const slides = [{name: slide1}, {name: slide2}, {name: slide3}, {name: slide4}];

  return (
      <Swiper className={styles.SwiperContainer}
        spaceBetween={props.spaceBetweenSlides /*50*/}
        slidesPerView={props.slidesPerView /*3*/}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          slides.map(slideImage => (
            <SwiperSlide key={slideImage.id}>
                <img className={styles.SwiperSlide} src={slideImage.name}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
  );
};

export default slider;