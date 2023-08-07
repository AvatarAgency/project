'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.css';
import Typewriter from 'typewriter-effect';
import LastWorks from '../home/LastWorks';

const WhoPage = () => {
  return (
    <div style={{ width: '100%' }}>
      <Box width={'100%'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} textAlign={{ xs: 'center', sm: 'unset' }} mb={{ xs: 5, sm: 5, md: 10 }}>
          <Box
            sx={{ fontSize: { xl: '15em', xs: '2.5em', sm: '4.2em', md: '6em', lg: '9.2em' }, fontWeight: 800, display: 'flex', letterSpacing: 2.3, width: '100%' }}
            color={'white'}
          >
            MARKANIZIN AVATARINI
          </Box>
          <Box
            sx={{ fontSize: { xl: '15em', xs: '2.5em', sm: '4.2em', md: '6em', lg: '9.2em' }, lineHeight: { sm: '1em' }, letterSpacing: 2.3 }}
            fontWeight={800}
            color={'#34B197'}
          >
            BİZ OLUŞTURUYORUZ
          </Box>
        </Box>
      </Box>
      <Box minHeight={'20rem'} sx={{ backgroundColor: 'white', width: '100%', color: 'black', alignItems: 'center' }}>
        <Grid container alignItems={'center'} minHeight={'20rem'}>
          <Grid sx={{ fontSize: '4em', pl: { xs: 0, sm: 10 }, textAlign: { xs: 'center', sm: 'unset' } }} item md={6}>
            LOREM IPSUM DOLOR SIT <span style={{ color: '#34B197' }}>AMET</span>
          </Grid>
          <Grid item xs={12} md={3} sx={{ fontSize: '1.1em', fontWeight: 500, textAlign: { xs: 'center', sm: 'unset' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit diam in neque cursus maximus. Vestibulum posuere ullamcorper magna, nec tempus magna efficitur
            ut. Donec elementum ultrices egestas.
          </Grid>
        </Grid>
      </Box>
      <Box minHeight={'20rem'} sx={{ width: '100%', color: 'black' }}>
        <Grid container alignItems={'center'} height={'100%'}>
          <Grid sx={{ display: 'block' }} item xs={12} md={6} lg={6}>
            <Box width={'100%'} textAlign={{ xs: 'center', sm: 'unset' }} pl={{ md: 10 }}>
              <Box fontWeight={800} fontSize={{ xl: '15em', lg: '10em', md: '7em', xs: '5.2em' }} color={'white'}>
                LOREM
              </Box>
              <Grid container maxWidth={{ xs: '100%', md: '80%' }} mb={{ xs: 5, sm: 0 }}>
                <Grid justifyContent={{ xs: 'center', md: 'unset' }} display={{ xs: 'flex', md: 'unset' }} item md={6} xs={12}>
                  <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 2, py: 0.2, mb: 2 }}>Lorem</Box>
                </Grid>
                <Grid justifyContent={{ xs: 'center', md: 'unset' }} display={{ xs: 'flex', md: 'unset' }} item md={6} xs={12}>
                  <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 2, py: 0.2, mb: 2 }}>Lorem</Box>
                </Grid>
                <Grid justifyContent={{ xs: 'center', md: 'unset' }} display={{ xs: 'flex', md: 'unset' }} item md={6} xs={12}>
                  <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 2, py: 0.2, mb: 2 }}>Lorem</Box>
                </Grid>
                <Grid justifyContent={{ xs: 'center', md: 'unset' }} display={{ xs: 'flex', md: 'unset' }} item md={6} xs={12}>
                  <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 2, py: 0.2, mb: 2 }}>Lorem</Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{ fontSize: '1.1em', fontWeight: 500 }}>
            <Box display={'flex'} justifyContent={'center'} width={'100%'}>
              <Box width={{ lg: '70%', md: '70%' }} textAlign={{ xs: 'center', md: 'unset' }} color={'white'}>
                <Box fontSize={{ lg: '2.2em', md: '1.5em', xs: '1.4em' }} lineHeight={'1em'} mb={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Box>
                <Box fontSize={{ lg: '1em', md: '1em', xs: '1em' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit diam in neque cursus maximus. Vestibulum posuere ullamcorper magna, nec tempus magna
                  efficitur ut. Donec elementum ultrices egestas.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box width={'100%'} height={'30rem'} mt={5}>
        <Box backgroundColor='white' mx={6} height={'100%'}>
          sadsa
        </Box>
      </Box>
      <Box width={'100%'} height={'30rem'} mt={5}>
        <Box
          pl={{ xs: 0, md: 10 }}
          mb={2}
          textAlign={{ xs: 'center', md: 'unset' }}
          color={'white'}
          fontWeight={800}
          sx={{ fontSize: { xl: '10em', xs: '4em', sm: '3em', md: '5em', lg: '6em', letterSpacing: '0.3rem' } }}
        >
          NELER YAPIYORUZ ?
        </Box>
        <LastWorks/>
      </Box>
    </div>
  );
};

export default WhoPage;
