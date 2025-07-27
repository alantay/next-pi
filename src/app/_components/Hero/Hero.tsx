import Image from "next/image";

const Hero = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`bg-hero-bg flex min-h-140 items-center justify-center px-10 py-10 ${className}`}
    >
      <div className="flex w-full max-w-5xl flex-col flex-col-reverse items-center gap-10 md:flex-row lg:gap-20">
        <div className="text-hero-text max-w-100 font-sans text-3xl leading-snug">
          <div>
            Documenting what I’m learning, and maybe even help someone along the
            way.
          </div>
        </div>
        <Image
          className="md:w-1/2"
          src="/hero-juggle.png"
          width={450}
          height={450}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
