'use client';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const SwiperTitle = ({ data, setValue, value, swiperRef, window }) => {
  const router = useRouter()

  useEffect(() => {
     router.refresh()
  }, [])
  
  return (
    <div className='container'>
      <Swiper
        ref={swiperRef}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
        }}
        modules={[EffectCoverflow, Autoplay]}
        className='swiper_container'
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
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
