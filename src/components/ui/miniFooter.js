import Link from 'next/link';

export default function MiniPostFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-12 pt-6 pb-8 text-center text-sm text-gray-500">
      <div className="space-y-2">
        <p>© {year} Rosmeo Parada. All rights reserved.</p>
        
        <div className="flex justify-center gap-4 text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors">
            More Posts
          </Link>
          <Link href="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
