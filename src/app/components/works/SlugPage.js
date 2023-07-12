'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Footer from '../home/Footer';
import LastWorks from '../home/LastWorks';

const SlugPage = ({ post }) => {
  return (
    <>
      <Box width={'100%'} minHeight={'50vh'} pt={10} px={8}>
        <Typography textAlign={{ xs: 'center', sm: 'unset' }} sx={{ fontSize: { xl: '6em', xs: '1.7em', sm: '2em', md: '2.5em', lg: '4em' } }} color={'white'}>
          ŞİRKET ADI
        </Typography>
        <Typography sx={{ fontSize: { xl: '8em', xs: '2.7em', sm: '3.5em', md: '5em', lg: '6em' } }} color={'white'} textAlign={'center'} fontWeight={900}>
          {post.fields.sirketAd}
        </Typography>
      </Box>
      <Box width={'100%'} sx={{ backgroundColor: '#34B197' }} minHeight={'50vh'} px={8}>
        <Typography textAlign={{ xs: 'center', sm: 'unset' }} sx={{ fontSize: { xl: '7em', xs: '2em', sm: '3em', md: '3em', lg: '4em' } }} color={'black'}>
          PROJE
        </Typography>
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
          <Box pb={10} width={{ xs: '100%', md: '90%', lg: '80%' }}>
            <Typography color={'white'} textAlign={'center'} fontSize={{ xs: '1.5em', sm: '2em' }} fontWeight={600}>
              {post.fields.projeContent}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} width={'100%'} minHeight={'50vh'} p={4}>
        <Box sx={{ objectFit: 'cover' }}component={'img'} width={'100%'} minHeight={'70vh'} src={post.fields.projeResimler[0].fields.file.url}></Box>
      </Box>
      <LastWorks />
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={'100%'} minHeight={'50vh'} p={4}>
        <Box sx={{ objectFit: 'cover' }}component={'img'} width={'100%'} minHeight={'70vh'} src={post.fields.projeResimler[1].fields.file.url}></Box>
        <Box sx={{ objectFit: 'cover' }}component={'img'} width={'100%'} minHeight={'70vh'} src={post.fields.projeResimler[2].fields.file.url}></Box>
      </Box>
      {/*<Footer />*/}
    </>
  );
};

export default SlugPage;
