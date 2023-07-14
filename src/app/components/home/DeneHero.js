'use client';
import { Grid, Divider, Container, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useWindowSize from '../useWindowSize';

const DeneHero = (prop) => {
  const size = useWindowSize(0);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  //const opacity = useTransform(scrollYProgress, [0, 0.5, 0.75, 1], [1, 1, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], ['170vh', '-40vh']);
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [size.width < 768 ? '100%' : size.width >= 1440 ? '42%' : size.width >= 992 ? '76%' : size.width >= 768 ? '65%' : size.width >= 1280 ? '46%' : '10%', '100%']
  );
  const fontSize = useTransform(
    scrollYProgress,
    [0, 1],
    [size.width >= 1440 ? '16rem' : size.width >= 992 ? '15rem' : size.width >= 768 ? '10rem' : size.width <= 600 ? '5.3rem' : size.width >= 1280 ? '13.7rem' : '', '1rem']
  );

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };
  const letters = Array.from('MARKANIZIN AVATARI BİZ OLALIM');

  useEffect(() => {
    const getFont = () => {
      size.width >= 992 ? '15rem' : size.width >= 768 ? '7rem' : size.width >= 600 ? '7rem' : size.width < 600 ? '7rem' : '7rem';
    };

    getFont();
  }, [size.width]);

  return (
    <Box sx={{ width: '100%', height: '100%' }} position={'relative'}>
      <Box
        className='back'
        sx={{ position: 'absolute', height: '60%', width: '100%', opacity: '0.5', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', filter: 'blur(2rem)' }}
      ></Box>
      <Grid container justifyContent={'start'} alignItems={'flex-end'} minHeight={'80vh'} width={'100%'} color={'white'} sx={{ backgroundColor: '#242424' }}>
        <motion.section ref={targetRef} style={{ width: '100%', height: scale, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize }}>
          <motion.div style={{ zIndex: 15, width: width, textAlign: 'center' }}>
            <Grid item sm={12}>
              <motion.div
                style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', marginLeft: size.width < 768 ? 25 : '' }}
                variants={container}
                initial='hidden'
                animate='visible'
              >
                {letters.map((letter, index) => (
                  <motion.span variants={child} key={index} style={{ color: [11, 12, 13, 14, 15, 16, 17, 18].includes(index) ? '#34B197' : 'white' }}>
                    {/*<Box sx={{ fontSize: { md: '4.1rem', lg: '5.4rem', sm: '3.4rem', xs: '2.9rem', xl:'5.5rem' }, fontWeight: '900', letterSpacing: { xl: '0.5rem', lg: '0.1rem' }, }}>*/}
                    <motion.div className='extra' style={{ fontWeight: '900', letterSpacing: '0.5rem' }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.div>
                  </motion.span>
                ))}
              </motion.div>
              {/*<HeroTyped text='MARKANIZIN AVATARI BİZ OLALIM' />*/}
            </Grid>
          </motion.div>
        </motion.section>
      </Grid>
      {/*<Divider sx={{ width: '100%', borderColor: 'rgb(0 0 0 / 84%)' }} />*/}
    </Box>
  );
};

export default DeneHero;
