import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
  posts: Post[];
};

export default function PostList({ posts }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map(post => (
        <PostCard post={post} key={post.title} />
      ))}
    </section>
  );
}
