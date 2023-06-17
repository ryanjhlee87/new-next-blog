import { getNonFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function PostsCarousel() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold my-4">You May Also Like</h2>
      <MultiCarousel>
        {posts.map(post => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </section>
  );
}
