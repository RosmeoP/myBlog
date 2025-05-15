import React from "react";

const FeaturedArticle = ({ title, excerpt, date, readTime, imageUrl, featured = false }) => {
  return (
    <div
      className={`rounded-none border-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
        featured ? 'col-span-full md:col-span-2 md:row-span-2' : ''
      }`}
    >
      {imageUrl && (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className={`p-6 ${imageUrl ? '' : 'border border-gray-200'}`}>
        <div className="flex justify-between items-center text-xs uppercase tracking-wide text-gray-500 mb-2">
          <span>{date}</span>
          <span>{readTime} read</span>
        </div>
        <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-semibold mb-3`}>
          {title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        <div className="mt-6 flex items-center">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <a href="#" className="ml-4 uppercase text-xs tracking-widest text-blue-600 hover:text-blue-800">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
