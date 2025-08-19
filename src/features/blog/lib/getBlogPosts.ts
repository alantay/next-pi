import fs from "fs/promises";
import path from "path";

export async function getBlogPosts() {
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

  return posts;
}
