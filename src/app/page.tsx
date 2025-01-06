import FeaturedPosts from "@/components/FeaturedPosts";
import HomeCoverSection from "@/components/HomeCoverSection";
import RecentPosts from "@/components/RecentPosts";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
