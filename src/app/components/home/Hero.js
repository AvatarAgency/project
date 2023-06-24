"use client"
import { Grid, Typography, Button, Container, Box } from '@mui/material'
import React, { useRef } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Microsoft from '../../icons/Microsoft.svg';
import Adobe from '../../icons/Adobe.svg';
import Google from '../../icons/Google-Maps.svg';
import Oracle from '../../icons/Oracle.svg';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = (props) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.20, 0.5], [0, 0, 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <Grid
      container
      minHeight={{ md: '80vh', lg: '60vh' , sm:'80vh'}}
      sx={{ backgroundColor: '#242424', }}
      width={'100%'}
      color={'white'}
    >
      <Box sx={{ width: '100%', marginX: '5%', mt: 10 }} >
        <motion.section ref={targetRef} style={{ opacity, }}>
          <Grid container mb={15}>
            <Grid sx={{ display: 'block', textAlign: { xs: 'center', md: 'unset' } }} item md={6} xs={12}>
              <Typography fontSize={{ md: '1.6rem', lg: '2.2rem' }}>
                Keyifle Ürettiğimiz <br></br> Markalar
              </Typography>
              <Button variant='contained' sx={{
                backgroundColor: 'white', color: '#242424',
                ':hover': {
                  bgcolor: 'white',
                  color: '#242424',
                },
                mt: 2, textTransform: 'capitalize', borderRadius: '0'
              }} endIcon={<PlayArrowIcon sx={{ color: 'red' }} />}>Bizi izle</Button>
            </Grid>
            <Grid item md={6} xs={12}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat turpis magna, vitae maximus ex tincidunt quis. Nunc congue, metus sed rhoncus rutrum,
            </Grid>
          </Grid>
          <Grid spacing={15} container sx={{ px: { lg: 10, md: 0 } }} alignItems={'center'} display={'flex'} flexDirection={'row'}>
            <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
              <Image
                src={Microsoft}
                alt='microsoft'
              />
            </Grid>
            <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
              <Image
                src={Adobe}
                alt='adobe'
              />
            </Grid>
            <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
              <Image
                src={Google}
                alt='google'
              />
            </Grid>
            <Grid item md={6} lg={3} sm={6} xs={12} sx={{ textAlign: 'center' }}>
              <Image
                src={Oracle}
                alt='oracle'
              />
            </Grid>
          </Grid>
        </motion.section>
      </Box>

    </Grid >
  )
}

export default Hero