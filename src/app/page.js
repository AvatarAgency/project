 import HomePage from '../components/home/HomePage';
import { client } from '../contentful/client';
 
export const revalidate = 30;

export const metadata = {
  title: 'Avatar Agency',
  description: 'Avatar agency digital media',
};

export default async function Home() {
  const response = await client.getEntries({ content_type: 'home' });
  const works = await client.getEntries({ content_type: 'works', limit: 3 });
  return (
    <div>
      <HomePage data={response.items} works={works.items} />
    </div>
  );
}
