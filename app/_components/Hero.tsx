import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-dvh w-full flex justify-stretch items-stretch">
      <div className="relative w-full grid grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col">
          <h2 className="uppercase">
            <span className="">New</span> Monograph Dashboard
          </h2>

          <h1 className="text-7xl font-condensed font-bold uppercase">
            Powerful insights into your team
          </h1>

          <p>Project planning and time tracking for agile teams</p>

          <div className="flex justify-start items-center gap-8">
            <Link
              href={"/#"}
              className="bg-red-400 px-6 py-2 rounded-lg text-white uppercase font-condensed font-bold"
            >
              Schedule a demo
            </Link>
            <span className="uppercase font-condensed tracking-[.3rem] text-blue-950">
              to see a live preview
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="bg-[url(/illustration-devices.svg)] bg-no-repeat bg-size-[130%] bg-position-[0_50%]">
          <div className="absolute w-full h-1/2 bg-blue-100 rounded-bl-[4vw] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
