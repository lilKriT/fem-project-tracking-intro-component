import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-dvh w-full flex justify-stretch items-stretch">
      <div className="relative w-full grid grid-cols-[minmax(2rem,1fr)_minmax(20rem,40rem)_50vw]">
        {/* Left margin, empty on purpose */}

        <div></div>

        {/* Left column */}
        <div className="flex flex-col justify-center pr-4 py-32">
          <h2 className="uppercase mt-8 text-xl font-condensed text-gray-400 tracking-[.25rem]">
            <span className="text-white bg-blue-950 px-4 py-2 rounded-full mr-2 font-bold tracking-normal">
              New
            </span>{" "}
            Monograph Dashboard
          </h2>

          <h1 className="text-7xl font-condensed font-bold uppercase mt-4">
            Powerful insights into your team
          </h1>

          <p className="text-gray-600 text-xl mt-8 max-w-[30ch]">
            Project planning and time tracking for agile teams
          </p>

          <div className="flex justify-start items-center gap-8 mt-16">
            <Link
              href={"/#"}
              className="bg-red-400 px-8 py-3 rounded-lg text-white uppercase font-condensed font-bold hover:bg-red-300 motion-safe:duration-150 ease-in-out"
            >
              Schedule a demo
            </Link>
            <span className="uppercase font-condensed tracking-[.3rem] text-gray-500">
              to see a live preview
            </span>
          </div>
        </div>

        {/* Right column */}
        <div className="relative bg-[url(/illustration-devices.svg)] bg-no-repeat bg-size-[130%] bg-position-[0_50%]">
          <div className="absolute w-full h-1/2 bg-blue-100 rounded-bl-[4vw] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
