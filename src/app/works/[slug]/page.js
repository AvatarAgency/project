import React from 'react';
import SlugPage from '../../components/works/SlugPage';
import { client } from '../../contentful/client';

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

const Slug = async ({ params: { slug } }) => {
  const post = await client.getEntries({ 'content_type': 'works', 'fields.slug': slug });
  const others = await client.getEntries({ content_type: 'works', limit: 3 });
  
  return (
    <div style={{ backgroundColor: '#383737' }}>
      <SlugPage post={post.items[0]} others={others.items} />
    </div>
  );
};

export async function generateStaticParams() {
  const response = await client.getEntries({ content_type: 'works' });

  return response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export default Slug;
