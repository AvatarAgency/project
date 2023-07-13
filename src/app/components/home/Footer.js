import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Logo from '../../icons/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#383737' }}>
      <Container maxWidth='xl' sx={{ minHeight: '25rem' }}>
        <Box display={'flex'} pt={7} pb={12} width={'100%'} flexDirection={'column'} color={'white'} height={'100%'} textAlign={'center'}>
          <Box className='extra' sx={{ fontSize: { xs: '2rem', sm: '4.5rem', md: '6rem', lg: '7rem' } }} fontWeight={900}>
            HEMEN TANIŞALIM
          </Box>
          <Box className='extra' fontWeight={400} sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.8rem', lg: '4rem' } }}>
            Seninle konuşmayı çok isteriz
          </Box>
          <Box display={'flex'} flexDirection={'row'} width={'100%'} mt={3} justifyContent={'center'}>
            <Button
              size='large'
              sx={{ width: { xs: '50%', md: '50%', lg: '40%' }, borderRadius: '2rem', mr: 1, backgroundColor: 'black', border: '1px solid grey', height: '4rem' }}
              variant='contained'
            >
              {' '}
              <Link
                style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', textDecoration: 'none', color: 'white' }}
                href={'/contact'}
              >
                Bize Ulaşın
              </Link>
            </Button>
            <Button size='large' sx={{ width: { xs: '50%', md: '20%' }, borderRadius: '2rem', backgroundColor: 'white', color: 'black', fontSize: '1.2em' }} variant='contained'>
              <Link style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', textDecoration: 'none' }} href={'/contact'}>
                👋
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: '#242424' }} color={'white'} width={'100%'} height={'100%'} pt={10}>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={12} md={6} display={'block'} sx={{ textAlign: { xs: 'center', md: 'unset' }, mb: { xs: 5, md: 2 } }}>
              <Box fontSize={'1.2em'} fontWeight={200}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacinia ipsum. Donec accumsan, tortor vel volutpat ultricies, nunc dolor feugiat Leo, quis commodo
                lorem tortor et ex. Aliquam erat volutpat. Pellentesque sem sapien, tristique lobortis ullamcorper quis, vestibulum pharetra sapien.
              </Box>
              <Button
                variant='contained'
                size='large'
                sx={{
                  'backgroundColor': 'white',
                  'color': '#242424',
                  ':hover': {
                    bgcolor: 'white',
                    color: '#242424',
                  },
                  'mt': { xs: 5, md: 2 },
                  'textTransform': 'capitalize',
                  'borderRadius': '0',
                  'width': { xs: '100%', sm: '35%' },
                  'fontWeight': 600,
                }}
                endIcon={<PlayArrowIcon sx={{ color: 'red' }} />}
              >
                Abone ol
              </Button>
            </Grid>
            <Grid item md={6} xs={12} textAlign={'center'}>
              <Grid container className='extra' fontWeight={700} textAlign={'center'} justifyContent={'center'}>
                <Grid mb={{ xs: 2, md: 0 }} item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                  <Link href={'/works'} prefetch={false} style={{ textDecoration: 'none', color: 'white', fontSize: '1.2em' }}>
                    <Box mb={2}>İşlerimiz</Box>
                    <Box mb={2}>Projeler</Box>
                    <Box mb={2}>Ürün Tasarımı</Box>
                    <Box mb={3}>Çekimler</Box>
                  </Link>
                </Grid>
                <Grid mb={{ xs: 2, md: 0 }} item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                  <Link href={'/latest'} prefetch={false} style={{ textDecoration: 'none', color: 'white', fontSize: '1.2em' }}>
                    <Box mb={2}>En Son</Box>
                    <Box mb={2}>Blog Yazısı</Box>
                    <Box mb={2}>Dijital Marketing</Box>
                    <Box mb={3}>Metin Yazarlığı</Box>
                  </Link>
                </Grid>
                <Grid mb={{ xs: 2, md: 0 }} item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                  <Link href={'/contact'} prefetch={false} style={{ textDecoration: 'none', color: 'white', fontSize: '1.2em' }}>
                    <Box mb={2}>Contact</Box>
                    <Box mb={2}>Bize Ulaşın</Box>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
              <Box width={'100%'} mt={5} textAlign={'center'}>
                <Image src={Logo} alt='logo' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
