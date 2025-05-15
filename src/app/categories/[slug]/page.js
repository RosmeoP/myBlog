"use client";
import { useParams } from "next/navigation";

const allPosts = [
  { title: "How to Learn React", category: "tech-coding" },
  { title: "Top Hiking Spots", category: "outdoor-adventure" },
  { title: "Daily Meditation Guide", category: "faith-and-spirituality" },
  { title: "Self Discipline Tips", category: "self-development" },
  { title: "Full-Body Workout", category: "fitness-and-wellness" },
];

export default function CategoryPage() {
  const { slug } = useParams();
  const readableName = slug.replace(/-/g, " ");

  const filteredPosts = allPosts.filter((post) => post.category === slug);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize mb-4">Category: {readableName}</h1>

      {filteredPosts.length > 0 ? (
        <ul className="space-y-2">
          {filteredPosts.map((post, idx) => (
            <li key={idx} className="text-lg">{post.title}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No posts in this category yet.</p>
      )}
    </div>
  );
}
