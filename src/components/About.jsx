import { motion } from "framer-motion";
import greenChemistryImg from "../assets/12-principles-of-green-chemistry-or-sustainable-chemistry-principle-removebg-preview.png";
import bgImage from "../assets/0103190648_editor.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-cyan-50 via-white to-blue-100"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            About Dr. Tamal Basu
          </h2>

          {/* UPDATED TEXT ONLY */}
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Dr. Tamal Basu is a distinguished researcher and academician
            specializing in <strong>polymer chemistry</strong>,{" "}
            <strong>green chemistry</strong>, and{" "}
            <strong>advanced material sciences</strong>. His pioneering work
            focuses on developing sustainable chemical solutions that deliver
            measurable real-world impact.
          </p>

           {/* UPDATED TEXT ONLY */}
           <p className="mt-4 text-gray-700 leading-relaxed">
            With a career spanning academia and industry, Dr. Basu has made
            significant contributions to environmentally responsible materials,
            functional bio-polymers, and innovative chemical systems that address
            critical challenges in sustainability and performance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">
              🧪 Polymer Science
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
              ♻️ Green Chemistry
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
              🔬 Material Science
            </span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={greenChemistryImg}
            alt="Green Chemistry Illustration"
            className="max-w-sm w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
