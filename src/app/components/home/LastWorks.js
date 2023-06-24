import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const LastWorks = (props) => {
  return (
    <Grid container spacing={0.5}  >
      <Grid item xs={12} md={4} position={'relative'}>
        <Box component='img' width={'100%'} height={'100%'} src='https://via.placeholder.com/477x658'></Box>
        <Typography variant='h5' sx={{ position: 'absolute', bottom: '4.37rem', left: '3.75rem', fontWeight: '900' }}>LOREM</Typography>
      </Grid>
      <Grid item xs={12} md={4} position={'relative'}>
        <Box component='img' width={'100%'} height={'100%'} src='https://via.placeholder.com/477x658'></Box>
        <Typography variant='h5' sx={{ position: 'absolute', bottom: '4.37rem', left: '3.75rem', fontWeight: '900' }}>LOREM</Typography>
      </Grid>
      <Grid item xs={12} md={4} position={'relative'}>
        <Box component='img' width={'100%'} height={'100%'} src='https://via.placeholder.com/477x658'></Box>
        <Typography variant='h5' sx={{ position: 'absolute', bottom: '4.37rem', left: '3.75rem', fontWeight: '900' }}>LOREM</Typography>
      </Grid>
    </Grid>
  )
}

export default LastWorks