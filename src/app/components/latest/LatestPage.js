'use client';
import { Box, Grid, Typography } from '@mui/material';
import { useScroll, useTransform, motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

const LatestPage = ({ data }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);

  return (
    <div>
      <Box width={'100%'} minHeight={'100vh'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} mb={10}>
          <Typography sx={{ fontSize: { xl: '11em', xs: '4em', sm: '6em', md: '7em', lg: '8em' } }} color={'white'}>
            EN
          </Typography>
          <Typography sx={{ fontSize: { xl: '16em', xs: '6em', sm: '10.5em', md: '9.7em', lg: '12em' }, lineHeight: '0.5em' }} color={'white'}>
            SON
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {data.map((post, key) => {
            return (
              <Grid key={key} item md={4} sm={6} xs={12}>
                <Link style={{ textDecoration: 'none' }} href={`/latest/${post.fields.slug}`}>
                  <Box component='img' width={'100%'} height={'90%'} src={post.fields.blogImage.fields.file.url}></Box>
                  <Typography variant='body2' sx={{ color: 'grey' }}>
                    {post.fields.blogAuthor}
                  </Typography>
                  <Typography variant='h4' sx={{ fontWeight: '900', color: 'white' }}>
                    {post.fields.blogTitle}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box
        mt={{ xs: 15, sm: 10, md: 5 }}
        display={'flex'}
        flexWrap={'nowrap'}
        width={'100%'}
        height={'6rem'}
        className='sectionTitle'
        alignItems={'center'}
        overflow={'hidden'}
        flexDirection={'row'}
      >
        <motion.h6 style={{ x }} className='title'>
          Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor - Daha Fazla Gor -
          Daha Fazla Gor
        </motion.h6>
      </Box>
      {/*<Footer />*/}
    </div>
  );
};

export default LatestPage;
