import { Box, Button, Container, Grid, TextField, styled } from '@mui/material';
import React, { useRef } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Logo from '../../icons/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const StyledInput = styled(TextField)`
  width: 79%;
  & .MuiInput-underline::before {
    border-color: white !important;
  }
  & .MuiInput-underline::after {
    border-color: white;
  }
  & .MuiInputLabel-root {
    color: white;
    font-family: 'Barlow Condensed';
    font-weight: 300;
  }
  & .MuiInputLabel-root.Mui-focused {
    color: white;
  }
`;

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_54wkwo9', 'template_ibk3m2g', form.current, 'Yk4hVoKwWwOzLOf2r').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div style={{ backgroundColor: '#383737' }}>
      <Container maxWidth='xl' sx={{ minHeight: '25rem' }}>
        <Box display={'flex'} pt={7} pb={12} width={'100%'} flexDirection={'column'} color={'white'} height={'100%'} textAlign={'center'}>
          <Box className='extra' sx={{ fontSize: { xs: '2.5rem', sm: '4.5rem', md: '6rem', lg: '7rem' } }} fontWeight={900}>
            HEMEN 👋 TANIŞALIM
          </Box>
          <Box className='extra' fontWeight={400} mb={2} sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.4rem', lg: '3.6rem' } }}>
            Seninle konuşmayı çok isteriz
          </Box>
          <Box component={'form'} ref={form} onSubmit={sendEmail} display={{ xs: 'block', sm: 'flex' }} flexDirection={'row'} width={'100%'} mt={3} justifyContent={'center'}>
            <Box
              sx={{
                'width': { xs: '100%', sm: '50%', lg: '40%' },
                'borderRadius': '2rem',
                'mr': 1,
                'backgroundColor': 'black',
                'border': '1px solid grey',
                'height': '4rem',
                ':hover': { backgroundColor: '#242424', color: 'white' },
                'positin': 'relative',
              }}
            >
              {' '}
              <StyledInput
                inputProps={{ style: { color: 'white', fontWeight: 700, fontSize: '1.2em', fontFamily: 'Barlow Condensed' } }}
                label='E-mail'
                name='email'
                variant='standard'
                required
              />
            </Box>
            <Button
              size='large'
              sx={{
                'width': { xs: '100%', sm: '20%' },
                'borderRadius': '2rem',
                'backgroundColor': 'white',
                'color': 'black',
                'fontSize': '1.2em',
                ':hover': { backgroundColor: 'white' },
                mt:{xs:2,md:0}
              }}
              variant='contained'
              type='submit'
            >
              Gönder
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: '#242424' }} color={'white'} width={'100%'} height={'100%'} pt={10}>
        <Container maxWidth='xl'>
          <Grid container>
            <Grid item xs={12} md={6} display={'block'} sx={{ textAlign: { xs: 'center', md: 'unset' }, mb: { xs: 5, md: 2 } }}>
              <Box width={{xs:'100%',md:'70%'}} fontSize={'1.2em'} fontWeight={200}>
              Faaliyet gösterdiği alanda başarılı bir marka konumlandırması için markanıza özenle yaklaşıyor, entegre iletişim yaklaşımımızla marka değerinize değer katıyoruz!
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
                  'width': { xs: '100%', sm: '25%' },
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
                <Image src={Logo} alt='Digital Agency Istanbul Avatar' />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
