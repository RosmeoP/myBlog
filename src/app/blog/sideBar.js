import Link from "next/link";

const categories = [
  "Interviews",
  "Podcast",
  "Inspiration",
  "Process",
  "Meetups",
  "Updates",
  "Hang Time",
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 px-6 py-10 border-r border-gray-200">
      {/* Featured Podcast */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-black">Overtime</h2>
        <p className="text-sm text-gray-500 mb-2">The Dribbble Podcast</p>
        <Link href="#" className="text-base font-medium text-black hover:underline">
          The Power of Play
        </Link>
      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold uppercase text-black mb-4">All Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-base text-black hover:underline"
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
