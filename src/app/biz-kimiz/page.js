import React from 'react';
import WhoPage from '../../components/biz-kimiz/WhoPage';
import { client } from '../../contentful/client';

const Whoweare = async () => {
  const response = await client.getEntries({ content_type: 'home' });

  return (
    <>
      <WhoPage data={response.items}/>
    </>
  );
};

export default Whoweare;
