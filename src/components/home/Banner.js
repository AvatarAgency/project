import React from 'react';
import { Box } from '@mui/material';

const Banner = () => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      minHeight={{ xs: '35rem', sm: '40rem', md: '45rem', lg: '50rem' }}
      justifyContent={'center'}
      alignItems={'center'}
      py={10}
      sx={{
        backgroundColor: '#383737',
        color: 'white',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Box
        className='extra'
        fontWeight={900}
        textTransform={'uppercase'}
        fontSize={{ xs: '2em', sm: '4em', md: '5em', lg: '7rem' }}
      >
        STratejİK İLETİŞİM YAKLAŞIMIMIZ, VERİ ODAKLI KARARLARI ALMANIZA YARDIMCI
        OLACAK DİJİTAL İLETİŞİM ÇÖZÜMLERİMİZ VE TÜM SOSYAL MEDYA PLATFORMALARINA
        ÖZGÜ GÜNCEL İLETİŞİM UYGULAMALARINI ESAS ALAN DANIŞMANLIK
        HİZMETLERİMİZLE, <span style={{color:'#34B197'}}>BAŞARI YOLCULUĞUNUZDA YANINIZDAYIZ</span> 
      </Box>
    </Box>
  );
};

export default Banner;
