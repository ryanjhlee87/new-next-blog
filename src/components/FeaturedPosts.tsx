import { getFeaturedPosts } from '@/service/posts';
import PostList from './PostList';
import React from 'react';

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold my-4">Featured Posts</h2>
      <PostList posts={featuredPosts} />
    </section>
  );
}
