function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              David Kerr
            </h1>
            <span className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Software Engineer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              My career as a firefighter taught me the importance of quick
              thinking, teamwork, and continuous skill development. These
              experiences have seamlessly translated into my new role as a
              software engineer, where I apply the same principles to
              problem-solving and coding. I am dedicated to building robust
              applications and constantly expanding my technical knowledge to
              stay at the forefront of the industry.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="./Images/Linkedin.JPG"
              alt="David Kerr"
              className="h-full w-80 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
