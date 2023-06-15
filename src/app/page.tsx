import { getFeaturedPosts } from '@/service/posts';

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <main>
      <h1 className="underline">This is Next.js app</h1>
      {featuredPosts.map(post => (
        <p>{post.title}</p>
      ))}
    </main>
  );
}
