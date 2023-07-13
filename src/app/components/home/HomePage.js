'use client';
import React from 'react';
import DeneHero from './DeneHero';
import Hero from './Hero';
import { Box, Grid } from '@mui/material';
import LastWorks from './LastWorks';
import Banner from './Banner';
import Fusion from './Fusion';
import Footer from './Footer';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

const HomePage = ({ data, works }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#383737' }}>
      <DeneHero />
      <Hero data={data[0].fields.biziIzle} />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler -
          Son İşler - Son İşler - Son İşler
        </motion.h6>
      </Box>
      <LastWorks works={works} />
      <Banner data={data[0]?.fields?.sonIsler} />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz -
          Hizmetlerimiz
        </motion.h6>
      </Box>
      <Fusion />
      <Grid container spacing={2}>
        <Grid container spacing={2}>
          {data[0].fields.huzurlarinizda.map((image, key) => (
            <Grid key={key} minHeight={'70vh'} item sm={12} md={4}>
              {/*<Box component={'img'} src={image.fields.file.url} sx={{ width: '100%', height: '100%', backgroundColor: 'white', objectFit: 'cover' }} />*/}
              <Box width={'100%'} height={'100%'}>
                <Image
                  src={'https:' + image.fields.file.url}
                  quality={100}
                  width={0}
                  sizes='100vw'
                  height={0}
                  alt={image.fields.title}
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/*<Footer data={data} isHome={true} />*/}
    </div>
  );
};

export default HomePage;
