import Link from "next/link";

const categories = [
  "Self Development",
  "Fitness & Wellness",
  "Tech & Coding",
  "Outdoor & Adventure",
  "Music & Arts",
  "Faith & Spirituality",
  "Quotes & Inspiration",
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 border-r border-gray-200 bg-white flex flex-col items-center justify-center px-6 py-10">
      {/* Title/Header like Dribbble */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-black mb-1">MyBlog</h1>
        <p className="text-sm text-gray-500">Thoughts, stories & more</p>
      </div>

      <hr className="w-full border-gray-200 mb-6" />

      {/* Categories */}
      <div className="w-full">
        <h3 className="text-sm font-semibold uppercase text-gray-700 mb-4">All Categories</h3>
        <ul className="space-y-3">
          {categories.map((cat) => {
            const slug = cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
            return (
              <li key={cat}>
                <Link
                  href={`/categories/${slug}`}
                  className="block text-base text-gray-800 hover:text-black hover:underline"
                >
                  {cat}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
