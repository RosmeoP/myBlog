'use client';
import PostCard from './postCard';
import { useParams } from 'next/navigation';
import { posts } from '@/lib/posts';
import Link from 'next/link';

const categories = [
  { name: 'Self Development', label: 'Development' },
  { name: 'Fitness & Wellness', label: 'Fitness' },
  { name: 'Tech & Coding', label: 'Tech' },
  { name: 'Outdoor & Adventure', label: 'Outdoor' },
  { name: 'Music & Arts', label: 'Music' },
  { name: 'Faith & Spirituality', label: 'Faith' },
  { name: 'Quotes & Inspiration', label: 'Quotes' },
];

const slugToLabel = (slug) => {
  const match = categories.find(
    (cat) => cat.name.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-') === slug
  );
  return match?.label;
};

export default function CategoryPage() {
  const { slug } = useParams();
  const label = slugToLabel(slug);
  const readableName = slug.replace(/-/g, ' ');

  const filteredPosts = posts.filter((post) => post.category === label);

  return (
    <div className="px-6 pt-12 max-w-3xl mx-auto">
      {/* ✅ Add back link here */}
      <Link
        href="/blog"
        className="text-sm text-gray-500 hover:underline inline-flex items-center mb-4"
      >
        ← Back to all articles
      </Link>

      <h1 className="text-3xl font-bold capitalize mb-8 text-black">
        {readableName}
      </h1>

      {filteredPosts.length > 0 ? (
        <div className="divide-y divide-gray-200">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No posts in this category yet.</p>
      )}
    </div>
  );
}
