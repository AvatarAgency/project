import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Loogo from '../icons/Logo.svg';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LandingLogo from '../icons/avatarlogo.png';
import dynamic from 'next/dynamic';

const MobileHeader = dynamic(() => import('./MobileHeader'));
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

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [deger, setDeger] = React.useState(0);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setDeger(latest);
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex', position: 'absolute' }}>
      <AppBar
        component='nav'
        sx={{
          backgroundColor: deger > 0 ? '#242424' : 'transparent',
          px: { lg: 5, md: 3, xl: 5 },
          transition: '0.8s',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: '5rem' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: mobileOpen ? 'none' : { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={'/'}>
            <Typography
              component='div'
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {pathname === '/' ? (
                <Image
                  width={175}
                  src={LandingLogo}
                  alt='Digital Agency Istanbul'
                />
              ) : (
                <Image src={Loogo} alt='Digital Agency Istanbul' />
              )}
              {/*<Image src={ pathname === '/' ? LandingLogo : Loogo} alt='logo' />*/}
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                style={{ textDecoration: 'none' }}
                href={item.link}
              >
                <Button
                  className='cadiz'
                  sx={{
                    color: '#fff',
                    mr: { md: 2, lg: 5 },
                    fontSize: '1em',
                    fontWeight: 600,
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        {mobileOpen && (
          <MobileHeader
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            Loogo={Loogo}
          />
        )}
      </Box>
    </Box>
  );
};

export default Header;
