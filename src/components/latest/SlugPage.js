'use client';
import { Box, Divider, Grid } from '@mui/material';
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const SlugPage = ({ post, others }) => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600]);
  return (
    <>
      <Box width={'100%'} minHeight={'20vh'} pt={10} px={8}>
        <Box textAlign={{ xs: 'center', md: 'unset' }} display={'block'} mb={10}>
          <Box  fontWeight='200' sx={{ fontSize: { xl: '7em', xs: '2.7em', sm: '3em', md: '4.5em', lg: '5em' } }} color={'white'}>
            TITLE
          </Box>
          <Box fontWeight={800} sx={{ fontSize: { xl: '10em', xs: '3.7em', sm: '4.5em', md: '7em', lg: '8em' }, lineHeight: '0.5em' }} color={'white'}>
            {post.fields.blogTitle}
          </Box>
        </Box>
        <Box display={{ xs: 'block', md: 'flex' }} textAlign={{ xs: 'center', md: 'unset' }} width={'100%'} flexDirection={'row'}>
          <Box display={'block'} mr={{ xs: 0, md: 10 }}>
            <Box  fontWeight={300} color={'grey'}>
              Yazar
            </Box>
            <Box  fontWeight={700} color={'white'} fontSize={'2em'}>
              {post.fields.blogAuthor}
            </Box>
          </Box>
          <Box display={'block'} mr={{ xs: 0, md: 10 }}>
            <Box  fontWeight={300} color={'grey'}>
              Tarih
            </Box>
            <Box  fontWeight={700} color={'white'} fontSize={'2em'}>
              {new Date(post.sys.createdAt).toLocaleDateString()}
            </Box>
          </Box>
          <Box display={'block'}>
            <Box  fontWeight={300} color={'grey'}>
              Okuma Süresi
            </Box>
            <Box fontWeight={700} color={'white'} fontSize={'2em'}>
              {post.fields.readingTime}
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 4, borderTop: '3px solid #707070' }} />
      <Box width={'100%'} minHeight={'50vh'} p={8}>
        <Box  fontWeight={400} color={'white'}>
          {post.fields.postContent}
        </Box>
      </Box>
      <Box mt={5} display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'>
          BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI - BİR SONRAKİ YAZI -
          BİR SONRAKİ YAZI - BİR SONRAKİ YAZI
        </motion.h6>
      </Box>
      <Box width={'100%'} minHeight={'20vh'} pt={10} px={8}>
        <Box textAlign={{ xs: 'center', md: 'unset' }} display={'block'} sx={{ mb: 10 }}>
          <Box fontWeight='200' sx={{ fontSize: { xl: '7em', xs: '1.7em', sm: '2em', md: '2.5em', lg: '3em' } }} color={'white'}>
            DİĞER
          </Box>
          <Box fontWeight='800' sx={{ fontSize: { xl: '10em', xs: '2.7em', sm: '3.5em', md: '4em', lg: '6em' }, lineHeight: '0.5em' }} color={'white'}>
            YAZILAR
          </Box>
        </Box>
        <Grid container spacing={3}>
          {others.map((data, key) => (
            <Grid key={key} item xs={12} md={4} mb={{ xs: 5 }}>
              <Link style={{ textDecoration: 'none' }} href={`/latest/${data.fields.slug}`}>
                <Box width={'100%'} height={'90%'}>
                  <Image
                    src={'https:' + data.fields.blogImage.fields.file.url}
                    width={30}
                    height={30}
                    alt={data.fields.slug}
                    sizes='100vw'
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Box className='extra' fontWeight={300} sx={{ color: 'grey' }}>
                  {data.fields.blogAuthor}
                </Box>
                <Box className='extra' fontWeight={700}  sx={{ fontSize:'2em', color: 'white' }}>
                  {data.fields.blogTitle}
                </Box>
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
