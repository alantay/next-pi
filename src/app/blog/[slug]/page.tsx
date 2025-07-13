import path from "path";
import { readdir, readFile } from "fs/promises";

const contentDir = path.join(process.cwd(), "src/content/blogpost");

export const dynamicParams = false;

export async function generateStaticParams() {
  const entries = await readdir(contentDir, { withFileTypes: true });

  // get folders name
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return dirs.map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(
    `@/content/blogpost/${slug}/index.mdx`
  );

  return <Post />;
}
