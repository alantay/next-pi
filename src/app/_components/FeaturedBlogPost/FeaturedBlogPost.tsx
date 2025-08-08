import fs from "fs/promises";
import Image from "next/image";
import path from "path";

const FeaturedBlogPost = async ({ className = "" }: { className?: string }) => {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const entries = await fs.readdir(blogDir, { withFileTypes: true });
  const posts = await Promise.all(
    entries.map(async (entry) => {
      if (entry.isDirectory()) {
        const slug = entry.name;
        try {
          const { frontmatter } = await import(
            `@/content/blog/${slug}/index.mdx`
          );
          // Optionally, filter for featured posts only
          // if (frontmatter.featured) {
          // KIV for now....
          return { ...frontmatter, slug };
          // }
        } catch (e) {
          // skip if no index.mdx or import fails
          return null;
        }
      }
    }),
  );

  return (
    <section className={`flex justify-center px-10 py-20 ${className}`}>
      <div className="w-full max-w-5xl">
        <h2 className="text-heading text-xl font-semibold">
          LATEST POSTS & ARTICLES
        </h2>
        {
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const { title, image, date, slug } = post;
              return (
                <a
                  href={`/blog/${slug}`}
                  key={slug}
                  className="rounded-2xl bg-neutral-100 p-8 transition-colors duration-500 hover:bg-neutral-200"
                >
                  <Image src={image} width={400} height={400} alt="" />
                  <h2 className="mt-5 text-xl font-medium text-red-800">
                    {title}
                  </h2>
                  <div className="mt-2 text-sm text-gray-500 italic">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </a>
              );
            })}
            {posts.map((post) => {
              const { title, image, date, slug } = post;
              return (
                <a
                  href={`/blog/${slug}`}
                  key={slug}
                  className="rounded-2xl bg-neutral-100 p-8 transition-colors duration-500 hover:bg-neutral-200"
                >
                  <Image src={image} width={400} height={400} alt="" />
                  <h2 className="mt-5 text-xl font-medium text-red-800">
                    {title}
                  </h2>
                  <div className="mt-2 text-sm text-gray-500 italic">
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </a>
              );
            })}
          </div>
        }
      </div>
    </section>
  );
};

export default FeaturedBlogPost;
