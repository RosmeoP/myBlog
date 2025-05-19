'use client';
import { useState } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import MiniPostFooter from '@/components/ui/miniFooter';

export function LatestPost({ post, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl =
    post.imageUrl?.trim() !== ''
      ? post.imageUrl
      : 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';

  const postLink = `/blog/${post.id}`;

  return (
    <section className="py-12 px-4 sm:px-8 md:px-12">
     <div className="mb-8 text-center">
  <span className="inline-block mb-2 text-sm font-semibold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
    From the Blog
  </span>
  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
    Discover Our Latest Insights
  </h2>
  <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto">
    Stay updated with our latest thoughts, tips, and tutorials to keep you inspired.
  </p>
</div>


      <article
        className={cn(
          'w-full flex flex-col md:flex-row overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white transition-all duration-300 hover:shadow-md',
          className
        )}
      >
        <div className="w-full">
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full object-cover rounded-t-xl md:rounded-none"
        />
      </div>
        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between w-full text-black">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="border-gray-300 text-sm font-medium tracking-wide text-gray-700 bg-gray-100"
              >
                {post.category}
              </Badge>
              <span className="text-sm text-gray-400">{post.readTime}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {post.title}
            </h2>

            <p className="text-base text-gray-600 leading-relaxed line-clamp-4">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-800">{post.author.name}</span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>

            <Link
              href={postLink}
              className="group/btn relative inline-flex items-center gap-1 text-base font-medium text-gray-800 hover:underline"
            >
              Read more
              <ArrowRight
                size={18}
                className={cn(
                  'transition-transform duration-300',
                  isHovered ? 'translate-x-1' : ''
                )}
              />
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gray-800 transition-all duration-300 group-hover/btn:w-full" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
