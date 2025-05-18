'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const categories = [
  { name: 'Self Development', label: 'Development' },
  { name: 'Fitness & Wellness', label: 'Fitness' },
  { name: 'Tech & Coding', label: 'Tech' },
  { name: 'Outdoor & Adventure', label: 'Outdoor' },
  { name: 'Music & Arts', label: 'Music' },
  { name: 'Faith & Spirituality', label: 'Faith' },
  { name: 'Quotes & Inspiration', label: 'Quotes' },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Drawer Container */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full pointer-events-none'
        }`}
      >
        {/* Sidebar Panel */}
        <div className="w-64 max-w-[90vw] h-full bg-white p-6 shadow-md overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-black">Rosmeo's blog</h1>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-6">Thoughts, stories & more</p>

          <hr className="border-gray-300 mb-6 ml-1 w-[85%]" />

          <div className="ml-1">
            <h3 className="text-sm font-semibold uppercase text-gray-700 mb-4">Categories</h3>
            <ul className="space-y-4">
              {categories.map(({ name, label }) => {
                const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                return (
                  <li key={name}>
                    <Link
                      href={`/categories/${slug}`}
                      className="block text-base font-semibold text-black hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Backdrop */}
        <div className="flex-1 bg-black/40" onClick={() => setIsOpen(false)} />
      </div>
    </>
  );
}
