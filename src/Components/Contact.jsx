import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const navigate = useNavigate();

  function toContactForm() {
    navigate("/contact");
  }
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-2 flex items-center justify-center"
      >
        <button
          className="rounded bg-neutral-900 px-3 py-2 text-2xl font-medium text-cyan-500 hover:bg-transparent hover:border-cyan-500 border-2 border-transparent"
          onClick={toContactForm}
        >
          Contact Me!
        </button>
      </motion.div>
    </div>
  );
}

export default Contact;
