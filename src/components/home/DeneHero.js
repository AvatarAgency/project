'use client';
import { Grid, Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import useWindowSize from '../useWindowSize';
import Typewriter from 'typewriter-effect';

const DeneHero = (prop) => {
  const [zort, setzort ] = React.useState('block')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setzort(latest > 10 ? 'flex' :'block')
  })

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
    [size.width < 768 ? '100%' : size.width >= 1440 ? '100%' : size.width >= 992 ? '76%' : size.width >= 768 ? '65%' : size.width >= 1280 ? '46%' : '10%', '100%']
  );
  const fontSize = useTransform(
    scrollYProgress,
    [0, 1],
    [size.width >= 1440 ? '20rem' : size.width >= 992 ? '15rem' : size.width >= 768 ? '10rem' : size.width <= 600 ? '5.3rem' : size.width >= 1280 ? '16.7rem' : '', '1rem']
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
  //const letters = Array.from('MARKANIZIN AVATARI BİZ OLALIM');

  //useEffect(() => {
  //  const getFont = () => {
  //    size.width >= 992 ? '15rem' : size.width >= 768 ? '7rem' : size.width >= 600 ? '7rem' : size.width < 600 ? '7rem' : '7rem';
  //  };

  //  getFont();
  //}, [size.width]);

  return (
    <Box sx={{ width: '100%', height: '100%' }} position={'relative'}>
      <Box
        className='back'
        sx={{ position: 'absolute', height: '60%', width: '100%', opacity: '0.5', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', filter: 'blur(2rem)' }}
      ></Box>
      <Grid container justifyContent={'start'} alignItems={'flex-end'} minHeight={'80vh'} width={'100%'} color={'white'} sx={{ backgroundColor: '#242424' }}>
        <motion.section
          ref={targetRef}
          style={{ width: '100%', height: size.width < 768 ? '40rem' : scale, display: 'flex', justifyContent: 'center', alignItems: 'center',  }}
        >
          <motion.div style={{ zIndex: 15, width: '100%', textAlign: 'center' }}>
            <Grid item sm={12}>
              <motion.div
                style={{ transition:'200ms ease-in', overflow: 'hidden', display: zort, flexWrap: 'wrap', justifyContent: 'center', fontWeight: 900, fontSize:size.width > 1440 ? '11.3rem' : size.width >= 992 ? '5rem' : size.width >= 768 ? '4rem' : size.width <= 600 ? '5.3rem' : size.width >= 1280 ? '16.7rem' : size.width <= 1440 ? '7.3rem' :'' }}
                variants={container}
                initial='hidden'
                animate='visible'
              >
                 <span style={{marginRight:zort === 'flex' ? '10px' : ''}} >MARKANIZIN</span> 
                <Typewriter
                  options={{
                    deleteSpeed: 10,
                    delay: 60,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('<span style="color: #34B197;">AVATARI </span>')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('<span style="color: #34B197;">YÜZÜ </span>')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('<span style="color: #34B197;">YARINI </span>')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('<span style="color: #34B197;">MARKASI </span>')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('<span style="color: #34B197;">DÜNYASI </span>')
                      .start();
                  }}
                />
                           <span  >BİZ OLALIM</span> 

                {/*{letters.map((letter, index) => (
                  <motion.span variants={child} key={index} style={{ color: [11, 12, 13, 14, 15, 16, 17, 18].includes(index) ? '#34B197' : 'white' }}>
                     <motion.div className='extra' style={{ fontWeight: '900', letterSpacing: '0.5rem' }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.div>
                  </motion.span>
                ))}*/}
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
