export const latestArticle = {
  id: "latest-001",
  title: "The Future of Digital Minimalism in 2025",
  excerpt: "Exploring how digital minimalism is reshaping our relationship with technology...",
  date: "May 15, 2025",
  readTime: "7 min",
  imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop",
  featured: true
};

export const articles = [
  {
    id: "art-001",
    title: "Beyond Black & White",
    excerpt: "Delving into how black and white design influences perception...",
    date: "May 12, 2025",
    readTime: "8 min",
    imageUrl: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1000&auto=format&fit=crop",
    featured: false
  },
  {
    id: "art-002",
    title: "Brutalist Web Design",
    excerpt: "How brutalist design principles are making a comeback...",
    date: "May 10, 2025",
    readTime: "4 min",
    imageUrl: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?q=80&w=1000&auto=format&fit=crop",
    featured: false
  }
];

export const allArticles = [latestArticle, ...articles];
export const featuredArticles = [latestArticle, articles[0]];
