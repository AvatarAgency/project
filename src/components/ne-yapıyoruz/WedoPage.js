'use client';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WedoAccordion from './WedoAccordion';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3, width: '100%', minHeight: '20rem', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    'id': `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const WedoPage = () => {
  const [slide, setSlide] = useState(2);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const titles = [
    {
      title: 'Yazılım',
      data: [
        {
          accordTitle: 'Lorem ipsum dolor sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
      ],
    },
    {
      title: 'Tasarım',
      data: [
        {
          accordTitle: '  amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
      ],
    },
    {
      title: 'Strateji',
      data: [
        {
          accordTitle: 'Lorem ipsum dolor sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
      ],
    },
    {
      title: 'Pazarlama',
      data: [
        {
          accordTitle: 'Lorem ipsum dolor sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
      ],
    },
    {
      title: 'Reklam',
      data: [
        {
          accordTitle: 'Lorem ipsum dolor sit amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
        {
          accordTitle: 'Collapsible Group Item #1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
        },
      ],
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <Box width={'100%'} pt={10} px={8}>
        <Box display={'block'} width={'100%'} mb={10}>
          <Box
            className='extra'
            sx={{ fontSize: { xl: '11em', xs: '4em', sm: '6em', md: '7em', lg: '8em' }, fontWeight: 'lighter', textAlign: { xs: 'center', md: 'unset' } }}
            color={'white'}
          >
            NE
          </Box>
          <Box className='extra' sx={{ fontSize: { xl: '16em', xs: '5em', sm: '10.5em', md: '9.7em', lg: '12em' }, lineHeight: '0.5em' }} fontWeight={800} color={'#34B197'}>
            YAPIYORUZ
          </Box>
        </Box>
      </Box>
      <hr style={{ border: '1px solid grey' }}></hr>
      <Box display={'flex'} justifyContent={'center'} width={'100%'} mt={10} flexDirection={'column'}>
        <Box display={'flex'} justifyContent={'center'}>
          <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons allowScrollButtonsMobile aria-label='basic tabs example'>
            <Tab label='YAZILIM' {...a11yProps(0)} />
            <Tab label='TASARIM' {...a11yProps(1)} />
            <Tab label='STRATEJİ' {...a11yProps(2)} />
            <Tab label='PAZARLAMA' {...a11yProps(3)} />
            <Tab label='REKLAM' {...a11yProps(4)} />
          </Tabs>
        </Box>
        <Box display={'flex'} justifyContent={'center'} width={'100%'} mb={10}>
          {titles.map((item, idx) => (
            <CustomTabPanel key={idx} value={value} index={idx}>
              <WedoAccordion data={item} />
            </CustomTabPanel>
          ))}
        </Box>
        <Box
          sx={{ backgroundColor: '#34B197', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: { lg: '6em',md:'5em',sm:'3.5em',xs:'3.5em',xl:'7em' } }}
          color={'white'}
          width={'100%'}
          height={'30rem'}
        >
          <Box width={'70%'} textAlign={'center'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Box>
        {/*<Box maxWidth={'70%'} justifyContent={'space-between'} display={'flex'}>
          <Box width={'20rem'} key={1} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
          {slide == 2 && (
            <Box width={'25rem'} key={2} textAlign={'center'} fontSize={'9em'} color={'white'} mr={10} fontWeight={800} alignSelf={'center'}>
              YAZILIM
            </Box>
          )}

          <Box width={'20rem'} key={3} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
          <Box width={'20rem'} key={3} textAlign={'center'} fontSize={'6.5em'} color={'grey'} mr={10} fontWeight={600} alignSelf={'center'}>
            YAZILIM
          </Box>
        </Box>*/}
      </Box>
    </div>
  );
};

export default WedoPage;
