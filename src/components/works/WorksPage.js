'use client';
import React from 'react';
import { Box, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const WorksPage = ({ works }) => {
  return (
    <>
      <Grid container minHeight={'100vh'} justifyContent={'center'} alignItems={'center'} display={'flex'} textAlign={'center'} width={'100%'} color={'white'}>
        <Box width={'100%'}>
          <Box className='extra' sx={{ fontSize: { xl: '13em', xs: '4em', sm: '6em', md: '8em', lg: '10em' }, fontWeight: 800 }}>
            MARKANIZIN <br></br> <span style={{ color: '#34B197' }}>AVATARI</span> <br></br> BİZ OLALIM{' '}
          </Box>
        </Box>
      </Grid>
      <Box
        pl={{ xs: 0, md: 10 }}
        mb={2}
        textAlign={{ xs: 'center', md: 'unset' }}
        color={'white'}
        fontWeight={800}
        sx={{ fontSize: { xl: '10em', xs: '4em', sm: '3em', md: '5em', lg: '6em', letterSpacing:'0.1em' } }}
      >
        İŞLERİMİZ
      </Box>
      <Grid container spacing={5} px={10} mt={2} mb={10}>
        {works.map((work, key) => (
          <Grid key={key} mb={{xs:5,md:0}} item md={6} xs={12}>
            <Link href={'/works/' + work.fields.slug} style={{ textDecoration: 'none' }}>
              <Box width={'100%'} height={'90%'}>
                <Image
                  src={'https:' + work.fields.projeResimler[0].fields.file.url}
                  width={30}
                  height={30}
                  alt={work.fields.slug}
                  sizes='100vw'
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box className='extra' fontSize={'2.5em'} sx={{ fontWeight: '500', color: 'white' }}>
                {work.fields.sirketAd}
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default WorksPage;
