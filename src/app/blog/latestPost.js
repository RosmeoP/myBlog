import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function LatestPost({ post, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = post.imageUrl || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7';

  return (
    <article
      className={cn(
        "relative group overflow-hidden rounded-xl transition-all duration-500 bg-background border border-border",
        "hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-1/2 aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{
              backgroundImage: `url(${imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/5" />
        </div>

        <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge
                variant="outline"
                className="border-white/20 text-xs font-medium tracking-wide bg-black/20 backdrop-blur-sm"
              >
                {post.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter">
              {post.title}
            </h2>

            <p className="text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-muted">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{post.author.name}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
            </div>

            <button className="group/btn relative inline-flex items-center gap-1 text-sm font-medium">
              Read more
              <ArrowRight
                size={16}
                className={cn(
                  "transition-transform duration-300",
                  isHovered ? "transform translate-x-1" : ""
                )}
              />
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover/btn:w-full" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
