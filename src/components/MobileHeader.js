import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Box } from '@react-three/drei';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MobileHeader = ({ mobileOpen, window , handleDrawerToggle, Loogo}) => {
  const drawerWidth = 240;
  const navItems = [
    {
      name: 'Anasayfa',
      link: '/',
    },
    {
      name: 'Biz Kimiz?',
      link: '/biz-kimiz',
    },
    {
      name: 'Ne Yapıyoruz?',
      link: '/ne-yapiyoruz',
    },
    {
      name: 'Kime Yapıyoruz?',
      link: '/kime-yapiyoruz',
    },
    {
      name: 'Bize Ulaşın',
      link: '/iletisim',
    },
  ];
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={() => handleDrawerToggle()} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ mt: 2, color: 'white' }}>
        <Image width={150} src={Loogo} alt='Avatar Digital agency' />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              href={item.link}
            >
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Drawer
      container={container}
      variant='temporary'
      open={mobileOpen}
      onClose={() => handleDrawerToggle()}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        'display': { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          backgroundColor: 'transparent',
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default MobileHeader;
