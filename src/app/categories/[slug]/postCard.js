import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="flex gap-5 py-6">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0 bg-gray-100 overflow-hidden rounded-md">
        <img
          src={post.imageUrl || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <p className="text-xs text-gray-500 uppercase mb-1">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <Link href={`/blog/${post.id}`} className="group">
          <h2 className="text-base font-semibold text-black group-hover:underline">
            {post.title}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 mt-1">{post.excerpt}</p>
      </div>
    </div>
  );
}
