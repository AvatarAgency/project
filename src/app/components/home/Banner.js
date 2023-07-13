import React from 'react';
import { Box } from '@mui/material';

const Banner = ({ data }) => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      minHeight={{ xs: '35rem', sm: '40rem', md: '45rem', lg: '50rem' }}
      justifyContent={'center'}
      alignItems={'center'}
      sx={{ backgroundColor: '#383737', color: 'white', textAlign: 'center', px: 3 }}
    >
      <Box className='extra' fontWeight={900} fontSize={{ xs: '2em', sm: '4em', md: '5em', lg: '7rem' }}>
        {data}
      </Box>
    </Box>
  );
};

export default Banner;
