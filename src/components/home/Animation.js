import { Box } from '@mui/material';
import React, { useRef } from 'react';
import FeaturedTitle from './FeaturedTitle';
import { motion, useScroll, useTransform } from 'framer-motion';

const Animation = () => {
  const features = [
    {
      title: 'Use your calendar as a todo list',
      id: 'todo-list',
    },
    {
      title: 'Color your calendar to organize',
      id: 'colors',
    },
    {
      title: 'Instantly know if someone is available',
      id: 'availability',
    },
    {
      title: 'Track what you listened to when',
      id: 'music',
    },
    {
      title: 'Send scheduling links guests love',
      id: 'scheduling-links',
    },
    {
      title: 'Always know what your team is up to',
      id: 'team',
    },
  ];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.6], ['50%', '0%']);

  return (
    <motion.section style={{ opacity, transition:'1s ease-in' ,x}}>
      <Box display={'flex'} width={'100%'} height={'240vh'} alignItems={'start'}>
        <Box width={'100%'} py={55}>
          {features.map((feature) => (
            <Box py={6} key={feature.id}>
              <FeaturedTitle>{feature.title}</FeaturedTitle>
            </Box>
          ))}
        </Box>
        <Box display={'flex'} position={'sticky'} width={'100%'} top={0} height={'100vh'} alignItems={'center'}>
          <Box width={'100%'} height={'50%'} sx={{ backgroundColor: 'grey' }}>
            sticky card placeholder
          </Box>
        </Box>
      </Box>
    </motion.section>
  );
};

export default Animation;
