'use client';

import { useState } from 'react';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function LatestPost({ post, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl =
    post.imageUrl || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';
  const postLink = `/blog/${post.id}`;

  return (
    <article
      className={cn(
        'w-full relative group overflow-hidden transition-all duration-500 bg-black border border-border',
        'rounded-none md:rounded-l-xl', // Only round left side on desktop
        'hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]',
        className
      )}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden rounded-none md:rounded-l-xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/5" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 w-full flex flex-col justify-between text-white rounded-none">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="border-white/20 text-xs font-medium tracking-wide bg-black/20 backdrop-blur-sm text-white"
              >
                {post.category}
              </Badge>
              <span className="text-xs text-white/60">{post.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter">
              {post.title}
            </h2>

            <p className="text-sm text-white/80 line-clamp-3">{post.excerpt}</p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {post.author.name}
                </span>
                <span className="text-xs text-white/60">{post.date}</span>
              </div>
            </div>

            <Link
              href={postLink}
              className="group/btn relative inline-flex items-center gap-1 text-sm font-medium text-white"
            >
              Read more
              <ArrowRight
                size={16}
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
