import React from 'react';
import ContactPage from '../../components/contact/Contact';

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#383737' }}>
      <ContactPage />
    </div>
  );
};

export default Contact;
