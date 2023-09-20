'use client';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const LastWorks = ({ works }) => {
  const [selected, setSelected] = useState();
  return (
    <Grid display={'flex'} justifyContent={'center'} container spacing={0.5}>
      {works?.map((work, key) => (
        <Box
          minHeight={'80vh'}
          key={key}
          minWidth={{xs:'20rem',sm:'30rem',lg:'20rem',md:'15rem'}}
          position={'relative'}
          display={'flex'}
          className='zort'
          onMouseOver={() => setSelected(key)}
          onMouseOut={() => setSelected()}
        >
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
          <Box
            className={selected == key ? '' : 'grad'}
            sx={{
              position: 'absolute',
              bottom: '0rem',
              height: selected == key ? '100vh' : '10vh',
              width: '100%',
              backgroundColor: selected == key ? '#000000bf' : '',
              justifyContent: 'center',
              mx: 'auto',
            }}
          >
            {selected == key && (
              <Box
                className='fade-in-text'
                sx={{
                  fontWeight: '900',
                   ml: '1.5rem',
                  fontSize: '2em',
                  color: 'white',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                }}
              >
                {work.fields.projeContent.slice(0,240)}...
              </Box>
            )}
            <Box className='sirket' >
              {work.fields.sirketAd}
            </Box>
          </Box>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default LastWorks;
