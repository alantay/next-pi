import Image from "next/image";

const Introsection = ({ className = "" }: { className?: string }) => {
  return (
    <section className={`flex justify-center px-10 py-20 ${className}`}>
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:items-center">
        <Image
          src="/avatar-using-laptop.png"
          width={620}
          height={932}
          className="w-1/3"
          alt="image of man in labcoat holding a test tube"
        />

        <div className="flex w-90 flex-col items-start justify-center md:w-full">
          <h2 className="text-heading text-3xl font-semibold">
            Hi there, I’m Alan Tay,
          </h2>
          <p className="mt-3 max-w-100 font-sans text-2xl leading-loose md:max-w-160">
            I’m a frontend engineer with a big love for rock climbing and
            bicycle touring. I also dabble in chess and cooking, just enough to
            keep things spicy. This site is where my pixels, pedals, and pasta
            collide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introsection;
