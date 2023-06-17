import Hero from '@/components/Hero';
import { getFeaturedPosts } from '@/service/posts';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <>
      <Hero direction="horizontal" />
    </>
  );
}
