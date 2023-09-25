import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Earphone from '../../icons/fusion/earphone.png';
import Coffe from '../../icons/fusion/fusion-coffee.png';
import Glasses from '../../icons/fusion/fusion-glasses.png';
import Pen from '../../icons/fusion/fusion-pen-2.png';
import Watch from '../../icons/fusion/watch.png';
import Plane from '../../icons/fusion/fusion-plane.png';
import Macbook from '../../icons/fusion/macbook.png';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import useWindowSize from '../useWindowSize';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function useParallaxOpacity(value, distance) {
  return useTransform(value, [0, 0.5, 1], [0, 1, 1.5]);
}

const Content = ({ children }) => {
  const itemRef = useRef(null);
  const size = useWindowSize(0);

  const { scrollYProgress } = useScroll({
    target: itemRef,
  });
  const y = useParallax(scrollYProgress, size.width < 600 ? 150 : 300);
  const opacity = useParallaxOpacity(scrollYProgress, 1);

  return (
    <motion.div
      ref={itemRef}
      style={{
        height: '30rem',
        width: '60%',
        marginBottom: '20px',
        backgroundColor: 'white',
        y,
        opacity,
        borderRadius: '20rem',
      }}
    >
      {children}
    </motion.div>
  );
};

const Fusion = () => {
  const list = [
    {
      image: Glasses,
      content: 'Yazılım',
      alt: 'Yazılım Websitesi yapımı ',
    },
    {
      image: Pen,
      content: 'Tasarım',
      alt: 'Web Tasarım Dijital Tasarım Digital Marketing ',
    },
    {
      image: Plane,
      content: 'Pazarlama',
      alt: 'Yazılım Websitesi yapımı ',
    },
    {
      image: Macbook,
      content: 'İÇ İLETİŞİM',
      alt: 'Yazılım Websitesi yapımı ',
    },
    {
      image: Earphone,
      content: 'Sosyal Medya',
      alt: 'Sosyal medya yönetimi Social Media ',
    },
    {
      image: Coffe,
      content: 'Reklam',
      alt: 'Reklam Pazarlama ',
    },
    {
      image: Watch,
      content: 'PRODÜKSİYON',
      alt: 'Reklam senaryosu ',
    },
  ];
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Box
      id='style-2'
      sx={{
        backgroundColor: '#383737',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box width={'100%'} height={'25rem'}></Box>
      {list.map((item, idx) => (
        <Content key={idx}>
          <Box
            width={'100%'}
            height={'100%'}
            display={{ xs: 'block', md: 'flex' }}
            textAlign={{ xs: 'center', md: 'unset' }}
            mt={{ xs: 5, sm: 0 }}
            justifyContent={'space-evenly'}
            alignItems={'center'}
          >
            <Box>
              <Image
                src={item.image}
                height={250}
                width={0}
                alt={item.alt}
              />
            </Box>
            <Box></Box>
            <Box
              fontWeight={900}
              fontSize={{ xs: '3.5rem', md: '4em' }}
              textTransform={'uppercase'}
              sx={{ wordBreak: 'break-word' }}
            >
              {item.content}
            </Box>
          </Box>
        </Content>
      ))}

      <Box width={'100%'} height={'15rem'}></Box>

      {/*<Box
        className='extra'
        color={'white'}
        textAlign={'center'}
        sx={{ fontSize: { xs: '2rem', lg: '3.5rem' } }}
        fontWeight={900}
      >
        HUZURLARINIZDA
      </Box>*/}
    </Box>
  );
};

export default Fusion;
