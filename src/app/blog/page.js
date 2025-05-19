'use client';
import MobileSidebar from './mobileSideBar';
import Sidebar from './sideBar';
import { LatestPost } from './latestPost';
import { PostPreview } from '../categories/[slug]/postPreview';
import { posts } from '../../lib/posts';
import Footer from '@/components/ui/Footer';

const latestPost = posts[0];

const Page = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <MobileSidebar />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:left-0 md:w-56 lg:w-64 md:block md:bg-white md:shadow">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="md:ml-56 lg:ml-64 px-4 py-8 space-y-12">
        <LatestPost post={latestPost} />

        <main className="w-full space-y-6">
          {posts.slice(1).map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </main>
      </div>
      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
