'use client';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LastWorks = ({ works }) => {
  return (
    <Grid container spacing={0.5}>
      {works?.map((work, key) => (
        <Grid minHeight={'80vh'} key={key} item xs={12} lg={4} position={'relative'}>
          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/works/' + work.fields.slug}>
            <Box width={'100%'} height={'100%'}>
              <Image
                src={'https:' + work.fields.projeResimler[0].fields.file.url}
                width={0}
                height={0}
                priority
                quality={70}
                alt={work.fields.slug}
                sizes='100vw'
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0rem', backgroundColor: '#00000066', height: '10vh', width: '100%' }}>
              <Box className='extra' sx={{ fontWeight: '900', zIndex: 999, ml: '1.5rem', fontSize: '2em' }}>
                {work.fields.sirketAd}
              </Box>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LastWorks;
