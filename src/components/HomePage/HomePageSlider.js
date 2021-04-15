import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import "swiper/swiper.scss";
import Swiper from 'react-id-swiper';

import image5 from '../../assets/images/sliders/slide9.jpg';
import image6 from '../../assets/images/sliders/slide10.jpg';

import styles from './HomeSlider.module.css';

const HomePageSliderConfigs = {
    containerClass:"swiper-container HomePageSlider",
    parallax: true,
    centeredSlides: true,
    speed: 500,
    spaceBetween: 0,
    effect: 'slide'
};

const HomePageSlider = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);

    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;

    return (
        <Swiper {...HomePageSliderConfigs} getSwiper={setParallaxSwiper}>
            <div className={styles.HomePageSlide}>
                <div 
                    className={styles.SlideImage}
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                >
                    <img src={image5} alt="image1"/>
                </div>
                <div 
                    className="col-md-6 offset-md-3 my-auto text-center text-white" 
                    style={{position: "relative", color:"blue", zIndex:"2"}}
                    >
                    <h1 className="text-uppercase mb-2">Ласкаво просимо <br />до <p className={styles.LogoName}>"Dialogue"!</p></h1>
                    <button className={styles.Button}>
                        <NavLink
                            to="/menu"
                            exact
                            activeClassName={styles.active}>
                            Меню
                        </NavLink>
                    </button>
                </div>
            </div>
            {/*1*/}
            <div className={styles.HomePageSlide}>
                <div 
                    className={styles.SlideImage}
                    data-swiper-parallax={parallaxAmount}
                    data-swiper-parallax-opacity={parallaxOpacity}
                >
                    <img src={image6} alt="image2"/>
                </div>
                <div 
                    className="col-md-6 offset-md-3 my-auto text-center text-white" 
                    style={{position: "relative", color:"blue", zIndex:"2"}}
                    >
                    <h1 className="text-uppercase mb-2 font-weight-bold"> Slide 1</h1>
                    <p className="mb-5 small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </Swiper>
    );
}

export default HomePageSlider;