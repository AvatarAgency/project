'use client';
import { Box } from '@mui/material';
import React, { useRef,  } from 'react';
import PropTypes from 'prop-types';
import WedoAccordion from './WedoAccordion';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './style.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay } from 'swiper/modules';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            width: '100%',
            minHeight: '20rem',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const WedoPage = ({ data }) => {
  const [value, setValue] = React.useState(0);
  const swiperRef = useRef(null);

  return (
    <div style={{ width: '100%' }}>
      <Box width={'100%'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} mb={10}>
          <Box
            className='extra'
            sx={{
              fontSize: {
                xl: '11em',
                xs: '4em',
                sm: '6em',
                md: '7em',
                lg: '8em',
              },
              fontWeight: 'lighter',
              textAlign: { xs: 'center', md: 'unset' },
            }}
            color={'white'}
          >
            NE
          </Box>
          <Box
            className='extra'
            sx={{
              fontSize: {
                xl: '16em',
                xs: '4.5em',
                sm: '10.5em',
                md: '9.7em',
                lg: '12em',
              },
              lineHeight: '0.5em',
            }}
            fontWeight={800}
            color={'#34B197'}
          >
            YAPIYORUZ
          </Box>
        </Box>
      </Box>
      <hr style={{ border: '1px solid grey' }}></hr>
      <Box
        display={'flex'}
        justifyContent={'center'}
        width={'100%'}
        mt={10}
        flexDirection={'column'}
      >
        <Box display={'flex'} justifyContent={'center'} width={'100%'} mb={4}>
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
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          minHeight={'22rem'}
          width={'100%'}
          mb={10}
        >
          <Box
            onClick={() => swiperRef.current.swiper.autoplay.stop()}
            display={'flex'}
            width={{ xs: '100%', md: '80%', lg: '70%', xl: '50%' }}
          >
            {data.map((item, idx) => (
              <CustomTabPanel key={idx} value={value} index={idx}>
                <WedoAccordion data={item.fields.accordions} />
              </CustomTabPanel>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: '#34B197',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 900,
            fontSize: {
              lg: '6em',
              md: '5em',
              sm: '3.5em',
              xs: '2.2em',
              xl: '7em',
            },
          }}
          color={'white'}
          width={'100%'}
          py={5}
        >
          <Box width={'70%'} textAlign={'center'}>
            STRATEJİK İLETİŞİM YAKLAŞIMI ALTINDA AYNI ANDA BİR KREATİF AJANS,
            BİR SOSYAL MEDYA AJANSI VE BİR YAZILIM AJANSI OLARAK, GÜNÜMÜZÜN
            İLETİŞİM TRENDLERİNE UYGUN ENTEGRE ÇÖZÜMLER ÜRETİYORUZ
          </Box>
        </Box>
        {/*<Box maxWidth={'70%'} justifyContent={'space-between'} display={'flex'}>
          <Box width={'20rem'} key={1} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
          {slide == 2 && (
            <Box width={'25rem'} key={2} textAlign={'center'} fontSize={'9em'} color={'white'} mr={10} fontWeight={800} alignSelf={'center'}>
              YAZILIM
            </Box>
          )}

          <Box width={'20rem'} key={3} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
          <Box width={'20rem'} key={3} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
        </Box>*/}
      </Box>
    </div>
  );
};

export default WedoPage;
