import MarkdownViewer from '@/components/MarkdownViewer';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-300 shadow-lg m-12">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}