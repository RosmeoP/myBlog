import Navbar from "./pages/Navbar/navbar";
import BlogView from "./pages/blogView/view";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <BlogView />
    </main>
  );
}
