import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Cetvel from '../../icons/fusion/cetvel.png';
import Earphone from '../../icons/fusion/earphone.png';
import Coffe from '../../icons/fusion/fusion-coffee.png';
import Glasses from '../../icons/fusion/fusion-glasses.png';
import Pen from '../../icons/fusion/fusion-pen-2.png';
import Watch from '../../icons/fusion/watch.png';
import Plane from '../../icons/fusion/fusion-plane.png';
import Macbook from '../../icons/fusion/macbook.png';
import Lenis from '@studio-freight/lenis';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimate,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function useParallaxOpacity(value, distance) {
  return useTransform(value, [0, 0.5, 1], [0, 1, 1.5]);
}

const Content = ({ children }) => {
  const itemRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
  });
  const y = useParallax(scrollYProgress, 400);
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
      image: Cetvel,
      content: 'Yazılım',
    },
    {
      image: Pen,
      content: 'Yazılım',
    },
    {
      image: Plane,
      content: 'Yazılım',
    },
    {
      image: Macbook,
      content: 'Yazılım',
    },
    {
      image: Earphone,
      content: 'Yazılım',
    },
    {
      image: Coffe,
      content: 'Yazılım',
    },
    {
      image: Watch,
      content: 'Yazılım',
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
              <Image src={item.image} height={250} />
            </Box>
            <Box></Box>
            <Box fontWeight={900} fontSize={'4em'} textTransform={'uppercase'}>
              {item.content}
            </Box>
          </Box>
        </Content>
      ))}

      <Box width={'100%'} height={'25rem'}></Box>

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
