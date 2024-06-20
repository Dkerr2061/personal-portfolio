function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">
        About Me
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src="./Images/fire.JPG"
              alt="Fire"
              className="h-full w-80 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              After a fulfilling nine-year career as a firefighter, I made the
              bold decision to transition into the tech industry. My journey
              from responding to emergency calls to writing efficient code has
              been driven by a deep-seated passion for problem-solving and
              continuous learning. Today, I am a full-stack software engineer
              proficient in JavaScript, React, Python, Flask, and SQLAlchemy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
