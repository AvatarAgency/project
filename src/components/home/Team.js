import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import { Box } from '@mui/material';
import Image from 'next/image';
import useWindowSize from '../useWindowSize';

const Team = ({ data }) => {
  const { width } = useWindowSize(0);
  return (
    <>
      <Box width={'100%'} display={'flex'} justifyContent={'center'}>
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
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className='swiper-container'
        >
          {data.map((item, idx) => (
            <SwiperSlide key={idx} style={{width: width < 768 ? 140 : width > 1280 ? 500 : 320}}>
              <Box
                sx={{ width: '100%', height: '700px', position: 'relative' }}
              >
                <Image
                 fill
                  style={{ objectFit: 'cover' }}
                  src={'https:' + item.fields.file.url}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'red',
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
                  <Box fontSize={{xs:'1.2em',md:'2.5em',lg:'3em'}}>{item.fields.title}</Box>
                  <Box fontSize={{xs:'0.8em', md:'1.4em',lg:'1.7em'}}>{item.fields.description}</Box>
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
