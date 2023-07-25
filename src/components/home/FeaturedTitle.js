import { Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

const FeaturedTitle = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  return (
    <Typography ref={ref} my={6} sx={{ color: isInView ? 'white' : 'grey', fontWeight: 800, fontSize: { xs: '2.3rem', sm: '4.5rem', md: '6rem' } }}>
      {children}
    </Typography>
  );
};

export default FeaturedTitle;
