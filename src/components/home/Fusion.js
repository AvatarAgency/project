import { Box } from '@mui/material';
import React, { useRef } from 'react';

import { useScroll, useTransform } from 'framer-motion';
import Animation from './Animation';

const Fusion = (props) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0.99, 1], ['0%', '-50%']);

  return (
    <Box id='style-2' sx={{ backgroundColor: '#383737', width: '100%' }}>
      <Box
        className='extra'
        color={'white'}
        textAlign={'center'}
        sx={{ fontSize: { xs: '2rem', lg: '3.5rem' } }}
        fontWeight={900}
      >
        HUZURLARINIZDA
      </Box>
      <Animation />
    </Box>
  );
};

export default Fusion;
