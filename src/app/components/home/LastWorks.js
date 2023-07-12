"use client"
import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const LastWorks = ({ works }) => {
  return (
    <Grid container spacing={0.5}>
      {works?.map((work, key) => (
        <Grid minHeight={'80vh'} key={key} item xs={12} lg={4} position={'relative'}>
          <Link style={{ textDecoration: 'none', color: 'white' }} href={'/works/' + work.fields.slug}>
            <Box component='img' width={'100%'} height={'100%'} sx={{ objectFit: 'cover' }} src={work.fields.projeResimler[0].fields.file.url}></Box>
            <Box sx={{ position: 'absolute', bottom: '0rem', backgroundColor: '#00000066', height: '10vh', width: '100%' }}>
              <Typography sx={{ fontWeight: '900', zIndex: 999, ml: '1.5rem', fontSize:'2em' }}>
                {work.fields.sirketAd}
              </Typography>
            </Box>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LastWorks;
