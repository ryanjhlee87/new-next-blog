import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';

export default async function Home() {
  return (
    <>
      <Hero career={null} skills={null} />
      <FeaturedPosts />
    </>
  );
}
