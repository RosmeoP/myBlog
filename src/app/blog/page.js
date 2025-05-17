'use client';
import React from 'react';
import Sidebar from './sideBar';
import { LatestPost } from './latestPost'; 

const latestPost = {
  id: '1',
  title: 'Building a Blog with Next.js and Tailwind',
  excerpt: 'Learn how to build a fast, modern blog using Next.js and Tailwind CSS with clean, reusable components.',
  date: 'May 16, 2025',
  author: {
    name: 'Mauricio Parada',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  category: 'Development',
  readTime: '5 min read',
  imageUrl: 'https://images.unsplash.com/photo-1587614382346-ac5ce068fe85',
};

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <main className="w-full md:w-3/4 px-4 py-6 space-y-6">
        <LatestPost post={latestPost} />
      </main>

      <Sidebar />
    </div>
  );
};

export default Page;
