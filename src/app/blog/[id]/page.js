// app/blog/[id]/page.js
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center mb-10 text-sm font-medium hover:underline group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="text-sm text-gray-600 mb-4">
              By {post.author.name} · {formattedDate}
            </div>
          </header>

          <figure className="mb-12 aspect-video">
            <img
              src={
                post.imageUrl ||
                'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
              }
              alt={post.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
