'use client';
import React from 'react';
import { Box } from '@mui/material';
import LastWorks from '../home/LastWorks';
import Image from 'next/image';
import WorksSlider from './WorksSlider';

const SlugPage = ({ post, others }) => {
  return (
    <>
      <Box
        width={'100%'}
        minHeight={{ xs: '25vh', md: '40vh', lg: '50vh' }}
        pt={10}
        px={8}
      >
        <Box
          fontWeight={500}
          textAlign={{ xs: 'center', sm: 'unset' }}
          sx={{
            fontSize: {
              xl: '6em',
              xs: '1.7em',
              sm: '2em',
              md: '2.5em',
              lg: '4em',
            },
          }}
          color={'white'}
        >
          ŞİRKET ADI
        </Box>
        <Box
          className='extra'
          sx={{
            fontSize: {
              xl: '8em',
              xs: '2.7em',
              sm: '3.5em',
              md: '5em',
              lg: '6em',
            },
          }}
          color={'white'}
          textAlign={'center'}
          fontWeight={900}
        >
          {post.fields.sirketAd}
        </Box>
      </Box>
      <Box
        width={'100%'}
        sx={{ backgroundColor: '#34B197' }}
        minHeight={'50vh'}
        px={8}
      >
        <Box
          fontWeight={500}
          textAlign={{ xs: 'center', sm: 'unset' }}
          mb={3}
          sx={{
            fontSize: { xl: '7em', xs: '2em', sm: '3em', md: '3em', lg: '4em' },
          }}
          color={'black'}
        >
          PROJE
        </Box>
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
          <Box pb={10} width={{ xs: '100%', md: '90%', lg: '80%' }}>
            <Box
              color={'white'}
              textAlign={'center'}
              fontSize={{ xs: '1.5em', sm: '2em' }}
              fontWeight={600}
            >
              {post.fields.projeContent}
            </Box>
          </Box>
        </Box>
      </Box>
      {post.fields.projeResimler.length > 0 && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          width={'100%'}
          minHeight={'50vh'}
          p={4}
        >
          <WorksSlider data={post.fields.projeResimler} />
        </Box>
      )}
      {post.fields.url && (
        <Box
          display={'flex'}
          justifyContent={'center'}
          width={'100%'}
          minHeight={'50vh'}
          mb={{ xs: 10, md: 4 }}
          p={4}
        >
          <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/${
              post.fields.url.split('=')[1]
            }`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </Box>
      )}
      {/*<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={'100%'} minHeight={'50vh'} p={4}>
        <Box width={'100%'} minHeight={{ xs: '20vh', md: '50vh' }}>
          <Image
            src={'https:' + post.fields.projeResimler[1].fields.file.url}
            width={0}
            height={0}
            sizes='100vw'
            alt={post.fields.projeResimler[1].fields.title || post.fields.projeResimler[1].fields.description}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        {post.fields.projeResimler[2].fields.file.url && (
          <Box width={'100%'} minHeight={{ xs: '20vh', md: '50vh' }}>
            <Image
              src={'https:' + post.fields.projeResimler[2].fields.file.url}
              width={0}
              alt={post.fields.projeResimler[2].fields.title || post.fields.projeResimler[2].fields.description}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        )}
      </Box>*/}
      <Box width={'100%'} height={'100%'} overflow={'hidden'}>
        <LastWorks works={others} />
      </Box>
    </>
  );
};

export default SlugPage;
