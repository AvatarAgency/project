'use client';
import { Grid, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import useWindowSize from '../useWindowSize';
import Typewriter from 'typewriter-effect';

const DeneHero = (prop) => {
  const [zort, setzort] = React.useState('block');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
   size.width > 768 && setzort(latest > 10 ? 'flex' : 'block');
  });

  const size = useWindowSize(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start center', 'end start'],
  });

  //const opacity = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [1, 1, 0, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7,1], [ '-27vh','30rem','35rem']);
 

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };
 

  return (
    <Box sx={{ width: '100%', height: '100%' }} position={'relative'}>
      <Box
        className='back'
        sx={{
          position: 'absolute',
          height: '60%',
          width: '100%',
          opacity: '0.5',
          borderBottomLeftRadius: '50%',
          borderBottomRightRadius: '50%',
          filter: 'blur(2rem)',
        }}
      ></Box>
      <Grid
        container
        justifyContent={'start'}
        alignItems={'flex-end'}
        minHeight={'80vh'}
        width={'100%'}
        color={'white'}
        sx={{ backgroundColor: '#242424' }}
      >
        <motion.section
          ref={targetRef}
          style={{
            width: '100%',
            minHeight: size.width < 768 ? '40rem' : '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
 
          }}
        >
          <motion.div
            style={{ zIndex: 15, width: '100%', textAlign: 'center', y }}
          >
            <Grid item sm={12}>
              <motion.div
                style={{
                  transition: '200ms ease-in',
                  overflow: 'hidden',
                  display: 'zort',
                  flexWrap: 'wrap',
                  fontWeight: 900,
                  fontSize:
                    size.width >= 1640
                      ? '12.3rem'
                      : size.width >= 992
                      ? '7rem'
                      : size.width >= 768
                      ? '4rem'
                      : size.width <= 600
                      ? '4.3rem'
                      : '',
                }}
                variants={container}
                initial='hidden'
                animate='visible'
              >
                <motion.div style={{ display: zort }}>
                  <span style={{ marginRight: zort === 'flex' ? '40px' : '' }}>
                    MARKANIZIN
                  </span>
                  <Typewriter
                    options={{
                      deleteSpeed: 10,
                      delay: 60,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          '<span style="color: #34B197;">AVATARI</span>'
                        )
                        .pauseFor(500)
                        .deleteAll()
                        .typeString('<span style="color: #34B197;">YÜZÜ</span>')
                        .pauseFor(500)
                        .deleteAll()
                        .typeString(
                          '<span style="color: #34B197;">YARINI</span>'
                        )
                        .pauseFor(500)
                        .deleteAll()
                        .typeString(
                          '<span style="color: #34B197;">MARKASI</span>'
                        )
                        .pauseFor(500)
                        .deleteAll()
                        .typeString(
                          '<span style="color: #34B197;">DÜNYASI</span>'
                        )
                        .pauseFor(500)
                        .start();
                    }}
                  />{' '}
                </motion.div>
                <span style={{ float: zort === 'block' ? '' : 'left' }}>
                  BİZ OLALIM
                </span>
              </motion.div>
            </Grid>
          </motion.div>
        </motion.section>
      </Grid>
    </Box>
  );
};

export default DeneHero;
