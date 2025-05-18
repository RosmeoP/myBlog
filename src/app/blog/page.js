'use client';

import MobileSidebar from './mobileSideBar';
import Sidebar from './sideBar';
import { LatestPost } from './latestPost';
import { posts } from '../../lib/posts';
const latestPost = posts[0]; 

const Page = () => {
    console.log('LatestPost data:', posts);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Mobile Sidebar: visible only on small screens */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      {/* Desktop Sidebar: hidden on small screens */}
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:w-56 lg:w-64 md:block md:bg-white md:shadow">
        <Sidebar />
      </div>

      {/* Content shifted right on desktop to make room for sidebar */}
      <div className="md:ml-56 lg:ml-64">
        <LatestPost post={latestPost} />

        <div className="flex flex-col-reverse md:flex-row">
          <main className="w-full md:w-3/4 px-4 py-6 space-y-6">
            <p className="text-white">Welcome to the blog! More content coming soon...</p>
          </main>

          <aside className="w-full md:w-1/4 px-4 md:px-0">
            {/* Optional widgets */}
            
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Page;
