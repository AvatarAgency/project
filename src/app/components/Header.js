import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Loogo from '../icons/Logo.svg';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

const drawerWidth = 240;
//const navItems = ['Anasayfa', 'İşlerimiz', 'En Son', 'Bize Ulaşın'];
const navItems = [
  {
    name: 'Anasayfa',
    link: '/',
  },
  {
    name: 'İşlerimiz',
    link: '/works',
  },
  {
    name: 'En Son',
    link: '/latest',
  },
  {
    name: 'Bize Ulaşın',
    link: '/contact',
  },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [deger, setDeger] = React.useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setDeger(latest);
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ mt: 2, color: 'white' }}>
        <Image width={150} src={Loogo} alt='logo' />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link style={{ textDecoration: 'none', color: 'white' }} href={item.link}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', position: 'absolute' }}>
      <AppBar component='nav' sx={{ backgroundColor: deger > 0 ? '#242424' : 'transparent', px: { lg: 5, md: 3, xl: 5 }, transition: '0.8s', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', height: '5rem' }}>
          <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} sx={{ mr: 2, display: mobileOpen ? 'none' : { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
            <Typography variant='h6' component='div' sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Image src={Loogo} alt='logo' />
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item.name} style={{ textDecoration: 'none' }} href={item.link}>
                <Button className='cadiz' sx={{ color: '#fff', mr: { md: 2, lg: 5 }, fontSize: '1em', fontWeight: 600 }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Typography className='cadiz' fontWeight={900} fontStyle={'italic'}>
            Hadi Başlayalım
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            'display': { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'transparent' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
