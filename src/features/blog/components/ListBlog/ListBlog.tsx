import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "../../lib";

const ListBlog = async ({ className = "" }: { className?: string }) => {
  const posts = await getBlogPosts();
  return (
    <ul className={`${className}`}>
      {posts.map((post) => {
        const { title, image, date, slug, summary } = post;
        return (
          <li
            key={slug}
            className="bg-blog-thumbnail dar hover:bg-blog-thumbnail-hover cursor-pointer rounded-2xl p-4 transition-colors duration-500 md:p-6"
          >
            <Link href={`/blog/${slug}`}>
              <div className="md:30 relative h-70">
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
              <p className="mt-4 text-base">{summary}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListBlog;
