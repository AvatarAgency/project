'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.css';
import LastWorks from '../home/LastWorks';
import Team from '../home/Team';

const WhoPage = ({data}) => {
  return (
    <div style={{ width: '100%' }}>
      <Box width={'100%'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} textAlign={{ xs: 'center', sm: 'unset' }} mb={{ xs: 5, sm: 5, md: 10 }}>
          <Box
            sx={{ fontSize: { xl: '15em', xs: '2.5em', sm: '4.2em', md: '6em', lg: '9.2em' }, fontWeight: 800, display: 'flex', letterSpacing: 2.3, width: '100%',lineHeight:'1.1em' }}
            color={'white'}
          >
            AVATAR BİR KREATİF ENTEGRE İLETİŞİM AJANSIDIR
          </Box>
          
        </Box>
      </Box>
      <Box minHeight={'20rem'} sx={{ backgroundColor: 'white', width: '100%', color: 'black', alignItems: 'center' }}>
        <Grid container alignItems={'center'} minHeight={'20rem'}>
          <Grid sx={{ fontSize: {lg:'4em',md:'4em'}, pl: { xs: 0, sm: 10 }, textAlign: { xs: 'center', sm: 'unset' } , letterSpacing:'2px'}} item lg={5.5} md='6.9'>
            MARKANIZIN AVATARI <br></br> <span style={{ color: '#34B197' }}>BİZ OLALIM</span>
          </Grid>
          <Grid item xs={12} md={2} sx={{ fontSize: '1.1em', fontWeight: 500, textAlign: { xs: 'center', sm: 'unset' } }}>
          Markanızın stratejisini, kurumsal kimliğini, iletişim dilini ve entegre iletişim uygulamalarını emanet edebileceğiniz güvenilir bir ekibiz.
          </Grid>
        </Grid>
      </Box>
      <Box minHeight={'20rem'} sx={{ width: '100%', color: 'black' }}>
        <Grid container alignItems={'center'} height={'100%'}>
          <Grid sx={{ display: 'block' }} item xs={12} md={6} lg={4}>
            <Box width={'100%'} textAlign={{ xs: 'center', sm: 'unset' }} pl={{ md: 10 }}>
              <Box fontWeight={800} fontSize={{ xl: '15em', lg: '10em', md: '11em', xs: '5.2em' }} color={'white'}>
                LOREM
              </Box>
              <Grid container justifyContent={'center'} maxWidth={{ xs: '100%', md: '100%', xl:'80%' }} mb={{ xs: 5, sm: 0 }}>
                <Box mr={15}   > 
                <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 5, py: 0.2, mb: 2 }}>Lorem</Box>
                <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 5, py: 0.2, mb: 2 }}>Lorem</Box>
               

                 </Box>
                 <Box >
                 <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 5, py: 0.2, mb: 2 }}>Lorem</Box>
                <Box sx={{ width: 'fit-content', backgroundColor: 'white', borderRadius: '2em', px: 5, py: 0.2, mb: 2 }}>Lorem</Box>
                 </Box>
             
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{ fontSize: '1.1em', fontWeight: 500 }}>
            <Box display={'flex'} justifyContent={'center'} width={'100%'}>
              <Box width={{ lg: '50%', md: '70%' }} textAlign={{ xs: 'center', md: 'unset' }} color={'white'}>
                <Box fontSize={{ lg: '2.2em', md: '1.5em', xs: '1.4em' }} lineHeight={'1em'} mb={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Box>
                <Box fontSize={{ lg: '1em', md: '1em', xs: '1em' }}>
                Kurulduğumuz 2019 yılından bu yana kariyer geçmişlerinden deneyimleri birleştiren ekibimizle yakaladığı dinamizmi, hizmet verdiğimiz isimler için bir marka değerine dönüştürüyoruz.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box width={'100%'} height={'30rem'} mt={5}>
        <Box backgroundColor='white' mx={6} height={'100%'}>
          resim
        </Box>
      </Box>
      <Box width={'100%'}   mt={5}>
        <Box
          pl={{ xs: 0, md: 10 }}
          mb={2}
          textAlign={{ xs: 'center', md: 'unset' }}
          color={'white'}
          fontWeight={800}
          sx={{ fontSize: { xl: '10em', xs: '4em', sm: '3em', md: '5em', lg: '6em', letterSpacing: '0.3rem' } }}
        >
          EKİBİMİZ
        </Box>
        <Team data={data[0].fields.huzurlarinizda}/>
      </Box>
    </div>
  );
};

export default WhoPage;
