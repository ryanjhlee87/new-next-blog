'use client';

import React, { useState } from 'react';
import PostList from './PostList';
import Categories from './Categories';
import { Post } from '@/service/posts';

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilteredPosts({ posts, categories }: Props) {
  const ALL_POSTS = 'All Posts';
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter(post => post.category === selected);

  return (
    <section className="flex-col my-12">
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={selected => setSelected(selected)}
      />
      <PostList posts={filtered} />
    </section>
  );
}
