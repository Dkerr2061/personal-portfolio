import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
      >
        About Me
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src="./Images/fire.JPG"
              alt="Fire"
              className="h-full w-80 rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default About;
