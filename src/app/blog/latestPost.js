'use client';

import { useState } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function LatestPost({ post, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl =
  post.imageUrl?.trim() !== ''
    ? post.imageUrl
    : 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';

  const postLink = `/blog/${post.id}`;

  return (
    <article
      className={cn(
        'w-full relative group overflow-hidden transition-all duration-500 bg-black border border-border',
        'hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]',
        className
      )}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover max-h-[300px] md:max-h-full"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10 w-full flex flex-col justify-between text-white">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="border-white/20 text-sm font-medium tracking-wide bg-black/20 backdrop-blur-sm text-white"
              >
                {post.category}
              </Badge>
              <span className="text-sm text-white/60">{post.readTime}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {post.title}
            </h2>

            <p className="text-base text-white/80 leading-relaxed line-clamp-4">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
            {/* Keep Name + Date */}
            <div className="flex flex-col">
              <span className="text-base font-medium text-white">
                {post.author.name}
              </span>
              <span className="text-sm text-white/60">{post.date}</span>
            </div>

            <Link
              href={postLink}
              className="group/btn relative inline-flex items-center gap-1 text-base font-medium text-white"
            >
              Read more
              <ArrowRight
                size={18}
                className={cn(
                  'transition-transform duration-300',
                  isHovered ? 'translate-x-1' : ''
                )}
              />
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/btn:w-full" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
