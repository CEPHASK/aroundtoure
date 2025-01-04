import { HeroCarousel } from "@/components/HeroCarousel";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main>
      <h1 className="text-center font-extrabold">Aroundtoure</h1>
      <section className="py-2 mx-0 ">
        <HeroCarousel />
      </section>
    </main>
  );
}
