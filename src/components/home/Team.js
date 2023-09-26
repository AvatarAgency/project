"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { Box } from '@mui/material';
import Image from 'next/image';

const Team = ({ data }) => {
  return (
    <>
      <Box
        width={'100%'}
        display={'flex'}
        height={'100%'}
        justifyContent={'center'}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='swiper-container'
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} className='swiper_slider'>
              <Box
                sx={{ width: '100%', height: '700px', position: 'relative' }}
              >
                <Image
                  fill
                  width={0}
                  height={0}
                  alt={`Avatar Digital Media Agency Dijital Medya Ajansı ${item.title}`}
                  sizes='100vw'
                  style={{ objectFit: 'cover' }}
                  src={'https:' + item.fields.file.url}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                  className='gradient-team'
                ></Box>
                <Box
                  position={'absolute'}
                  bottom={10}
                  left={20}
                  color={'white'}
                  display={'block'}
                >
                  <Box fontSize={{ xs: '1.2em', md: '2.5em', lg: '3em' }}>
                    {item.fields.title}
                  </Box>
                  <Box fontSize={{ xs: '0.8em', md: '1.4em', lg: '1.7em' }}>
                    {item.fields.description}
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Team;
