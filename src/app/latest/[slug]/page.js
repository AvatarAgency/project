import React from 'react';
 import SlugPage from '../../../components/latest/SlugPage';
import { client } from '../../../contentful/client';

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

const LatestSlug = async ({ params: { slug } }) => {
  const post = await client.getEntries({ 'content_type': 'blog', 'fields.slug': slug });
  const other = await client.getEntries({ content_type: 'blog' });

  return (
    <div style={{ backgroundColor: '#383737' }}>
      <SlugPage post={post.items[0]} others={other.items.slice(0, 3)} />
    </div>
  );
};

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: 'blog' });

  return response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export default LatestSlug;
