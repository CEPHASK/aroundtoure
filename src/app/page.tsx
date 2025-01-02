import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main>
      <h1 className="text-center font-extrabold">Aroundtoure</h1>
      <section className="py-2 mx-0 ">
        <HeroCarousel />
      </section>
    </main>
  );
}
