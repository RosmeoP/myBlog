'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PostPreview({ post, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl =
    post.imageUrl?.trim() !== ''
      ? post.imageUrl
      : 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';

  const postLink = `/blog/${post.id}`;

  return (
    <article
      className={cn(
        'w-full group flex flex-col md:flex-row items-start bg-white border-b border-gray-200 py-6',
        'hover:bg-gray-50 transition-all duration-200',
        className
      )}
    >
      {/* Image */}
      <div className="w-full md:w-44 h-32 flex-shrink-0 overflow-hidden rounded-md bg-gray-100 mb-4 md:mb-0 md:mr-6">
        <img
          src={imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className="border-gray-300 text-xs font-medium text-gray-600 bg-gray-100"
            >
              {post.category}
            </Badge>
            <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
              {post.readTime}
            </span>
          </div>

          <h2 className="text-lg font-semibold text-black leading-snug">
            <Link href={postLink} className="hover:underline">
              {post.title}
            </Link>
          </h2>

          <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex flex-col">
            <span>{post.author.name}</span>
            <span>{post.date}</span>
          </div>

          <Link
            href={postLink}
            className="flex items-center gap-1 font-medium text-gray-700 hover:underline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Read more
            <ArrowRight
              size={14}
              className={cn(
                'transition-transform duration-300',
                isHovered ? 'translate-x-1' : ''
              )}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
