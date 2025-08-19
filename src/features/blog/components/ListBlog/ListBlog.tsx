import fs from "fs/promises";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const ListBlog = async ({ className = "" }: { className?: string }) => {
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

          return { ...frontmatter, slug };
        } catch (e) {
          console.warn(e);
          return null;
        }
      }
    }),
  );

  return (
    <ul className={`${className}`}>
      {posts.map((post) => {
        const { title, image, date, slug } = post;
        return (
          <li
            key={slug}
            className="bg-blog-thumbnail dar hover:bg-blog-thumbnail-hover cursor-pointer rounded-2xl p-4 transition-colors duration-500"
          >
            <Link href={`/blog/${slug}`}>
              <div className="relative h-40">
                <Image
                  src={image}
                  fill={true}
                  objectFit="cover"
                  className="rounded"
                  alt=""
                />
              </div>
              <h2 className="text-blog-thumbnail-title mt-5 text-xl font-medium">
                {title}
              </h2>
              <div className="mt-2 text-sm text-gray-500 italic">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListBlog;
