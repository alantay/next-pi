import { readdir } from "fs/promises";
import Image from "next/image";
import path from "path";
import Style from "./page.module.css";

const contentDir = path.join(process.cwd(), "src/content/blog");

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
  const { default: Post, frontmatter } = await import(
    `@/content/blog/${slug}/index.mdx`
  );
  const { title, date, toc, image, imageAltText } = frontmatter;

  return (
    <article className="font-body mx-auto max-w-5xl text-lg">
      <h1 className="mb-2 font-sans text-3xl font-medium">{title}</h1>
      <p className="mb-4 text-base italic">
        Last updated on{" "}
        <strong>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </strong>
      </p>
      <div className="mt-5 grid grid-cols-5 gap-14">
        <div className={`${Style.content} col-span-5 lg:col-span-4`}>
          <Image src={image} alt={imageAltText} width={400} height={400} />
          <Post />
        </div>
        <div className="hidden lg:block">
          {toc && toc.length > 0 && (
            <nav className="text-blog-toc sticky top-32 mb-8 text-base">
              <h2 className="mb-2 font-bold">TABLE OF CONTENTS</h2>
              <ul className="list-disc pl-5">
                {toc.map((item: any) => (
                  <li key={item.title} className="mb-1">
                    <a href={`#${item.id}`} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
