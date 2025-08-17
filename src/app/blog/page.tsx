import ListBlog from "@/features/blog/components/ListBlog";
import Image from "next/image";

const Page = () => (
  <div className="font-body mx-auto grid max-w-6xl grid-cols-12 gap-8 p-10 text-lg">
    <div className="col-span-6 md:col-span-3">
      <Image
        className="align-top"
        src="/blog/jotting-avatar.png"
        width={965}
        height={1099}
        alt=""
      />
    </div>
    <div className="col-span-12 md:col-span-9">
      <h1 className="text-heading mb-4 font-sans text-3xl font-semibold">
        Random Thoughts, Occasional Insights
      </h1>
      <ListBlog className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2" />
    </div>
  </div>
);

export default Page;
