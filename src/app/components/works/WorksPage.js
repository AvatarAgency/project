'use client';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Footer from '../home/Footer';
import Link from 'next/link';

const WorksPage = ({ works }) => {
  return (
    <>
      <Grid container minHeight={'100vh'} justifyContent={'center'} alignItems={'center'} display={'flex'} textAlign={'center'} width={'100%'} color={'white'}>
        <Box width={'100%'}>
          <Typography sx={{ fontSize: { xl: '13em', xs: '4em', sm: '6em', md: '8em', lg: '10em' } }}>
            MARKANIZIN <br></br> <span style={{ color: '#34B197' }}>AVATARI</span> <br></br> BİZ OLALIM{' '}
          </Typography>
        </Box>
      </Grid>
      <Typography
        pl={{ xs: 0, md: 9 }}
        textAlign={{ xs: 'center', md: 'unset' }}
        color={'white'}
        fontWeight={900}
        gutterBottom
        sx={{ fontSize: { xl: '10em', xs: '4em', sm: '3em', md: '5em', lg: '6em' } }}
      >
        İŞLERİMİZ
      </Typography>
      <Grid container spacing={5} px={10}>
        {works.map((work, key) => (
          <Grid key={key} item md={6}>
            <Link href={'/works/' + work.fields.slug} style={{ textDecoration: 'none' }}>
              <Box component='img' sx={{ objectFit: 'cover' }} width={'100%'} height={'90%'} src={work.fields.projeResimler[0].fields.file.url}></Box>
              <Typography variant='h5' sx={{ fontWeight: '900', color: 'white' }}>
                {work.fields.sirketAd}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>

      {/*<Footer />*/}
    </>
  );
};

export default WorksPage;
