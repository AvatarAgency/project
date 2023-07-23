import { Typography } from '@mui/material';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

const FeaturedTitle = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });
  return (
    <Typography ref={ref} variant='h2' py={10} sx={{ color: isInView ? 'black' : 'grey' }}>
      {children}
    </Typography>
  );
};

export default FeaturedTitle;
