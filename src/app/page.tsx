import FeaturedPosts from "@/components/FeaturedPosts";
import HomeCoverSection from "@/components/HomeCoverSection";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
    </main>
  );
}
