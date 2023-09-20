'use client';
import React from 'react';
import DeneHero from './DeneHero';
import Hero from './Hero';
import { Box, Grid } from '@mui/material';
import LastWorks from './LastWorks';
import Banner from './Banner';
import Fusion from './Fusion';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import useWindowSize from '../useWindowSize';

const HomePage = ({ data, works }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -3400]);
  const size = useWindowSize(0);

  return (
    <div style={{ backgroundColor: '#383737' }}>
      <DeneHero />
      <Hero data={data[0].fields.biziIzle} />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler -
          Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler
        </motion.h6>
      </Box>
      <LastWorks works={works} />
      <Banner data={data[0]?.fields?.sonIsler} />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz -
          Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz
        </motion.h6>
      </Box>
      <Fusion />
      <Grid container mt={2} spacing={2}>
        <Grid container spacing={2}>
          {data[0].fields.huzurlarinizda.map((image, key) => (
            <Grid key={key} minHeight={'70vh'} overflow={'hidden'} item xs={12} md={4}>
              <Box component={'img'} src={image.fields.file.url} sx={{ width: '100%', height: '100%', backgroundColor: 'white', objectFit: 'cover' }} />
              <motion.div
                transition={{ delay: 0.3 * key }}
                initial={{ opacity: 0, x: size.width < 600 ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: size.width < 600 ? 0 : 20 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Image
                  src={'https:' + image.fields.file.url}
                  quality={100}
                  width={0}
                  sizes='100vw'
                  height={0}
                  alt={image.fields.title}
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/*<Footer data={data} isHome={true} />*/}
    </div>
  );
};

export default HomePage;
