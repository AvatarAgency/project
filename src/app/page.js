'use client'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Hero from './components/home/Hero'
import DeneHero from './components/home/DeneHero'
import { useScroll, useTransform, motion } from 'framer-motion'
import LastWorks from './components/home/LastWorks'
import Banner from './components/home/Banner'
import Fusion from './components/home/Fusion'
import Footer from './components/home/Footer'

//const client = createClient({
//  space: 'nzwszkqulr67',
//  accessToken: 'afie3lreohxbkNbDMMB9bFoY8oJTme9DBWMnnrsxWOo'
//})


export default async function Home() {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -600])


  //const res = await client.getEntries({ content_type: 'home' })
  //console.log(res.items[0].fields.works[0].fields.file.url);

  return (
    <div  >
      <DeneHero />
      <Hero />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'  >Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler - Son İşler</motion.h6>
      </Box>
      <LastWorks />
      <Banner />
      <Box display={'flex'} flexWrap={'nowrap'} width={'100%'} height={'6rem'} className='sectionTitle' alignItems={'center'} overflow={'hidden'} flexDirection={'row'}>
        <motion.h6 style={{ x }} className='title'  >Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz - Hizmetlerimiz</motion.h6>
      </Box>
      <Fusion />
      <Footer/>
    </div>
  )
}
