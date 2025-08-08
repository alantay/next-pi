import Content from "@/features/about/content/index.mdx";
import Image from "next/image";

const About = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-12 items-start gap-8 p-10">
    <div className="col-span-3">
      <Image
        src="/about/hiking-avatar.png"
        alt="profile"
        width={1024}
        height={1536}
        className="w-full rounded-xl"
      />
    </div>
    <div className="prose prose-lg prose-neutral dark:prose-invert col-span-9 max-w-none">
      <Content />
    </div>
  </div>
);

export default About;
