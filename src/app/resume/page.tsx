import Timeline from "@/features/resume/components/Timeline";
import workExperience from "@/features/resume/data/work-experience-timeline.json";
import Image from "next/image";

const Page = () => {
  return (
    <div className="p-10">
      <article className="font-body mx-auto max-w-5xl text-lg">
        <h1 className="mb-2 font-sans text-3xl font-medium">Work Experience</h1>
        <Image
          src="/resume-avatar.png"
          width={931}
          height={893}
          alt="avatar in business wear using the laptop"
          className="w-1/4"
        />
        <div className="mt-5">
          <Timeline data={workExperience} />
        </div>
      </article>
    </div>
  );
};

export default Page;
