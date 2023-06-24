import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Logo from '../../icons/Logo.svg';
import Image from 'next/image';

const Footer = (props) => {
  return (
    <Box sx={{ backgroundColor: '#242424' }} color={'white'} width={'100%'} height={'100%'} pt={10}>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6} display={'block'} sx={{ textAlign: { xs: 'center', md: 'unset' }, mb: { xs: 5, md: 2 } }}>
            <Typography variant='subtitle2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu lacinia ipsum. Donec accumsan, tortor vel volutpat ultricies, nunc dolor feugiat Leo, quis commodo
              lorem tortor et ex. Aliquam erat volutpat. Pellentesque sem sapien, tristique lobortis ullamcorper quis, vestibulum pharetra sapien.
            </Typography>
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
                'mt': 2,
                'textTransform': 'capitalize',
                'borderRadius': '0',
                'width': '35%',
                'fontWeight': 600,
              }}
              endIcon={<PlayArrowIcon sx={{ color: 'red' }} />}
            >
              Abone ol
            </Button>
          </Grid>
          <Grid item md={6} xs={12} textAlign={'center'}>
            <Grid container textAlign={'center'} justifyContent={'center'}>
              <Grid item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={3}>Lorem</Box>
              </Grid>
              <Grid item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={3}>Lorem</Box>
              </Grid>
              <Grid item md={4} xs={12} display={'flex'} flexDirection={'column'}>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
                <Box mb={2}>Lorem</Box>
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
  );
};

export default Footer;
