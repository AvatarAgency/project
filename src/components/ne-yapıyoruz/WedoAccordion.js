import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  'backgroundColor': 'transparent',
   'color': 'white',
  '&:not(:last-child)': {
    borderBottom: '1px solid white',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />} {...props} />)(
  ({ theme }) => ({
    'backgroundColor': 'transparent',
     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const WedoAccordion = ({ data }) => {
  const [expanded, setExpanded] = React.useState('panel0');

  console.log(data);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data.map((item, idx) => (
        <Accordion key={idx} expanded={expanded === `panel${idx}`} onChange={handleChange(`panel${idx}`)}>
          <AccordionSummary aria-controls={`panel${idx}d-content`} id={`panel${idx}d-header`}>
            <Typography textTransform={'uppercase'}>{item.fields.accordionTitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.fields.accordionContent}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default WedoAccordion;
