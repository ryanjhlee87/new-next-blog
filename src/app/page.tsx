import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';
import PostsCarousel from '@/components/PostsCarousel';

export default async function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <PostsCarousel />
    </>
  );
}
