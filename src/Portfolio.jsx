
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Download } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Hi, I'm Juan — Full Stack Developer</h1>
        <p className="text-lg sm:text-xl max-w-xl mb-6">
          I build efficient, scalable, and delightful software solutions using Java, Spring Boot, React, and PostgreSQL.
        </p>
        <Button
          asChild
          className="rounded-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center gap-2 mt-6"
        >
          <a href="/Juan_Choque_CV.pdf" download>
            <Download size={18} />
            Download CV
          </a>
        </Button>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg">
          I'm a passionate developer with 5+ years of experience building applications for web and desktop.
        </p>
      </motion.section>
    </main>
  );
}
