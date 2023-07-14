'use client';
import { Box, Grid, Skeleton } from '@mui/material';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LatestPage = ({ data }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <Box width={'100%'} minHeight={'100vh'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} mb={10}>
          <Box className='extra' sx={{ fontSize: { xl: '11em', xs: '4em', sm: '6em', md: '7em', lg: '8em' }, fontWeight: 'lighter' }} color={'white'}>
            EN
          </Box>
          <Box className='extra' sx={{ fontSize: { xl: '16em', xs: '6em', sm: '10.5em', md: '9.7em', lg: '12em' }, lineHeight: '0.5em' }} fontWeight={800} color={'white'}>
            SON
          </Box>
        </Box>
        <Grid container spacing={5}>
          {data.map((post, key) => {
            return (
              <Grid key={key} item md={4} sm={6} xs={12} mb={{ xs: 7 }}>
                <Link style={{ textDecoration: 'none' }} href={`/latest/${post.fields.slug}`}>
                  <Box width={'100%'} height={'90%'}>
                    {loading && <Skeleton variant='rectangular' sx={{ width: '100%', height: '15rem' }} />}
                    <Image
                      src={'https:' + post.fields.blogImage.fields.file.url}
                      alt={post.fields.slug}
                      width={30}
                      height={30}
                      sizes='100vw'
                      onLoadingComplete={() => setLoading(false)}
                      priority
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: loading ? 'none' : '' }}
                    />
                  </Box>
                  <Box className='extra' fontWeight={300} sx={{ color: 'grey' }}>
                    {post.fields.blogAuthor}
                  </Box>
                  <Box className='extra' sx={{ fontWeight: '700', color: 'white', fontSize: '2.5em' }}>
                    {post.fields.blogTitle}
                  </Box>
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
    </div>
  );
};

export default LatestPage;
