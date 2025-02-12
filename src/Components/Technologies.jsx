import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiFlask, SiGit } from "react-icons/si";
import { SiSqlalchemy } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { animate, motion } from "framer-motion";

function Technologies() {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl tracking-tight text-center text-transparent bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiJavascriptLine className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiFlask className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiSqlalchemy className="text-7xl text-lime-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaPython className="text-yellow-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiTypescript className="text-blue-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaGitAlt className="text-orange-500 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiTailwindcss className="text-blue-600 text-7xl" />
        </motion.div>
        {/* <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <BiLogoPostgresql className="text-blue-500 text-7xl" />
        </motion.div> */}
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiVercel className="text-white text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiPostman className="text-orange-400 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMysql className="text-blue-300 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaGithubSquare className="text-white text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiVite className="text-yellow-300 text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiSqlite className="text-lime-300 text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
