'use client';
import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Footer from '../home/Footer';
import Link from 'next/link';

const SlugPage = ({ post, others }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  return (
    <>
      <Box width={'100%'} minHeight={'20vh'} pt={10} px={8}>
        <Box textAlign={{ xs: 'center', md: 'unset' }} display={'block'} mb={10}>
          <Typography fontWeight='200' sx={{ fontSize: { xl: '7em', xs: '1.7em', sm: '2em', md: '2.5em', lg: '3em' } }} color={'white'}>
            TITLE
          </Typography>
          <Typography sx={{ fontSize: { xl: '10em', xs: '2.7em', sm: '3.5em', md: '4em', lg: '6em' }, lineHeight: '0.5em' }} color={'white'}>
            {post.fields.blogTitle}
          </Typography>
        </Box>
        <Box display={{ xs: 'block', md: 'flex' }} textAlign={{ xs: 'center', md: 'unset' }} width={'100%'} flexDirection={'row'}>
          <Box display={'block'} mr={{ xs: 0, md: 10 }}>
            <Typography color={'grey'}>Yazar</Typography>
            <Typography color={'white'} fontSize={'2em'}>
              {post.fields.blogAuthor}
            </Typography>
          </Box>
          <Box display={'block'} mr={{ xs: 0, md: 10 }}>
            <Typography color={'grey'}>Tarih</Typography>
            <Typography color={'white'} fontSize={'2em'}>
              {new Date(post.sys.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
          <Box display={'block'}>
            <Typography color={'grey'}>Okuma Süresi</Typography>
            <Typography color={'white'} fontSize={'2em'}>
              {post.fields.readingTime}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 4, borderTop: '3px solid #707070' }} />
      <Box width={'100%'} minHeight={'50vh'} p={8}>
        <Typography color={'white'}>{post.fields.postContent}</Typography>
      </Box>
      <Box mt={5} display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI -
          BİR SONRAKİ YAZI - BİR SONRAKİ YAZI
        </motion.h6>
      </Box>
      <Box width={'100%'} minHeight={'20vh'} pt={10} px={8}>
        <Box textAlign={{ xs: 'center', md: 'unset' }} display={'block'} sx={{ mb: 10 }}>
          <Typography fontWeight='200' sx={{ fontSize: { xl: '7em', xs: '1.7em', sm: '2em', md: '2.5em', lg: '3em' } }} color={'white'}>
            DİĞER
          </Typography>
          <Typography fontWeight='200' sx={{ fontSize: { xl: '10em', xs: '2.7em', sm: '3.5em', md: '4em', lg: '6em' }, lineHeight: '0.5em' }} color={'white'}>
            YAZILAR
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {others.map((data, key) => (
            <Grid key={key} item xs={12} md={4} mb={{ xs: 5 }}>
              <Link style={{ textDecoration: 'none' }} href={`/latest/${data.fields.slug}`}>
                <Box component='img' width={'100%'} height={'90%'} src={data.fields.blogImage.fields.file.url}></Box>
                <Typography variant='body2' sx={{ color: 'grey' }}>
                  {data.fields.blogAuthor}
                </Typography>
                <Typography variant='h4' sx={{ fontWeight: '900', color: 'white' }}>
                  {data.fields.blogTitle}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*<Footer />*/}
    </>
  );
};

export default SlugPage;
