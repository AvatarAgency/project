'use client';
import React from 'react';
import { Box, Divider, Grid } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const WorksPage = ({ works }) => {
  return (
    <>
      <Grid container mb={5}  justifyContent={'center'}   display={'flex'} textAlign={'center'} width={'100%'} color={'white'}>
        <Box width={'100%'} mt={5}>
          <Box   sx={{ fontSize: { xl: '15em', xs: '5.3em', sm: '6em', md: '7.6em', lg: '11em' }, fontWeight: 800, lineHeight:'1.1em' , wordBreak:'break-word'}}>
            MARKANIZIN<span style={{ color: '#34B197', marginLeft:{md:'2rem'} }}>AVATARI</span> <br></br> BİZ OLALIM{' '}
          </Box>
        </Box>
      </Grid>
      <Divider sx={{ borderTop: '3px solid #707070' }} />

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
                  width={0}
                  height={0}
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
