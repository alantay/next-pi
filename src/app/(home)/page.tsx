import ListBlog from "@/features/blog/components/ListBlog";
import Hero from "../../features/(home)/Hero";
import IntroSection from "../../features/(home)/IntroSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <section className="mx-auto flex max-w-5xl flex-col justify-center px-10 py-20">
        <h2 className="text-heading text-xl font-semibold">
          LATEST POSTS & ARTICLES
        </h2>
        <ListBlog className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3" />
      </section>
    </>
  );
}
