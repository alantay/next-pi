import Image from "next/image";

const Hero = ({ className = "" }: { className?: string }) => {
  return (
    <section
      className={`bg-hero-bg flex min-h-140 items-center justify-center p-10 ${className}`}
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-5 md:flex-row lg:gap-2">
        <div className="text-hero-text max-w-100 font-sans text-4xl leading-snug font-bold">
          <div>
            Writing down what I learn, in case it's useful to someone else too.
          </div>
        </div>
        <Image
          className="md:w-1/2"
          src="/hero-juggle.png"
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
