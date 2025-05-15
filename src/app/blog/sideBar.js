import Link from "next/link";

const categories = [
  { name: "Self Development", label: "Development" },
  { name: "Fitness & Wellness", label: "Fitness" },
  { name: "Tech & Coding", label: "Tech" },
  { name: "Outdoor & Adventure", label: "Outdoor" },
  { name: "Music & Arts", label: "Music" },
  { name: "Faith & Spirituality", label: "Faith" },
  { name: "Quotes & Inspiration", label: "Quotes" },
];

export default function Sidebar() {
  return (
    <aside className="w-40 sm:w-48 md:w-56 lg:w-64 h-full fixed left-0 top-0 bg-white px-4 sm:px-5 md:px-6 py-10 flex flex-col justify-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-sm sm:text-base md:text-xl font-bold text-black leading-tight">
          Rosmeo
        </h1>
        <p className="hidden md:block text-sm text-gray-500 mt-1">
          Thoughts, stories & more
        </p>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 mb-6 ml-3 w-[85%]" />

      {/* Categories */}
      <div className="ml-2 md:ml-3">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold uppercase text-gray-700 mb-4">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map(({ name, label }) => {
            const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
            return (
              <li key={name}>
                <Link
                  href={`/categories/${slug}`}
                  className="block text-sm sm:text-base md:text-lg font-medium text-black hover:underline"
                  title={name}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
