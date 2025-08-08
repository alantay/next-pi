import FeaturedBlogPost from "./_components/FeaturedBlogPost";
import Hero from "./_components/Hero";
import IntroSection from "./_components/IntroSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedBlogPost />
    </>
  );
}
