import React from "react";
import FeaturedArticle from "./featureArticle";
import { allArticles, featuredArticles } from "./articles";
const ArticleCard = ({ title, excerpt, date, readTime }) => (
  <div className="border p-4 rounded shadow-sm">
    <div className="text-xs text-gray-500 mb-2">
      {date} • {readTime} read
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{excerpt}</p>
  </div>
);

const BlogPage = () => {
  return (
    <div className="p-6 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map(article => (
            <FeaturedArticle key={article.id} {...article} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">All Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allArticles.map(article => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
