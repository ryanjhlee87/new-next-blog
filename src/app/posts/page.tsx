import FilteredPosts from '@/components/FilteredPosts';
import PostList from '@/components/PostList';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'Dev Blog Posts',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const catergories = Array.from(
    new Set([...posts.map(post => post.category)])
  );

  return <FilteredPosts posts={posts} categories={catergories} />;
}
