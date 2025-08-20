import Image from "next/image";

const Hero = ({ className = "" }: { className?: string }) => {
  return (
    <section
      className={`bg-hero-bg flex min-h-140 items-center justify-center p-10 pt-[var(--header-h)] transition-colors duration-300 ${className}`}
    >
      <div className="flex w-full max-w-5xl flex-col-reverse items-center gap-5 md:flex-row lg:gap-2">
        <div className="text-hero-text max-w-100 font-sans text-3xl leading-snug font-semibold md:text-4xl">
          Writing down things in case <s className="inline-block">I forget</s>,{" "}
          it&apos;s useful to someone else.
        </div>
        <Image
          className="md:w-1/2"
          src="/avatar-landing.png"
          width={885}
          height={908}
          alt="Illustration of a person juggling diverse items including a rope, chess knight, ladle, bicycle wheel, laptop with code, and carabiners, symbolizing versatility and varied skills"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
