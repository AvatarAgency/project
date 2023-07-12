import React from 'react';
import LatestPage from '../components/latest/LatestPage';
import { client } from '../contentful/client';

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

const Latest = async () => {
  const response = await client.getEntries({ content_type: 'blog' });

  return (
    <div style={{ backgroundColor: '#383737' }}>
      <LatestPage data={response.items} />
    </div>
  );
};

export default Latest;
