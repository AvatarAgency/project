import React from 'react';
 import WorksPage from '../../components/works/WorksPage';
import { client } from '../../contentful/client';

export const revalidate = 30;

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

const Works = async () => {
  const response = await client.getEntries({ content_type: 'works' });

  return (
    <div style={{ backgroundColor: '#383737' }}>
      <WorksPage works={response.items} />
    </div>
  );
};

export default Works;
