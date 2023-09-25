import React from 'react'
import WedoPage from '../../components/ne-yapıyoruz/WedoPage'
import { client } from '../../contentful/client';

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media web tasarım design',
};
 
const WeDo = async() => {
  const response = await client.getEntries({ content_type: 'accordionTitles' });

  return (
    <div>
      <WedoPage data={response.items}/>
    </div>
  )
}

export default WeDo