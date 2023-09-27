'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './style.module.css';

import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SwiperTitle = ({ data, setValue, value, swiperRef, window }) => {
  const router = useRouter();

 
  return (
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.3}
        slideToClickedSlide={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        onActiveIndexChange={(index) => setValue(index.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className={styles.titleSwiperContainer}
      >
        {data.map((item, idx) => (
          <SwiperSlide className={styles.titleSwiperSlider} key={idx}>
            <Box
              sx={{
                fontSize: {
                  lg: '3.5em',
                  md: '4em',
                  xs: '2em',
                  xl: '4.6em',
                },
                color: idx == value ? 'white' : ' gray',
                textTransform: 'uppercase',
                fontWeight: 900,
              }}
            >
              {item.fields.title}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTitle;
