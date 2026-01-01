import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Microscope, Pill, Atom, Layers } from "lucide-react";

const researchData = [
  {
    title: "Biopolymer Synthesis",
    icon: Atom,
    description: "Design and synthesis of eco-friendly biopolymers for sustainable material applications.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Self-Immolative Polymers",
    icon: FlaskConical,
    description: "Advanced polymer systems that undergo programmed degradation under specific stimuli.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Drug Delivery Systems",
    icon: Pill,
    description: "Targeted and controlled drug delivery using smart polymeric carriers.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Surface Functionalization",
    icon: Layers,
    description: "Chemical surface modification to enhance performance and compatibility.",
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

const publications = [
  {
    year: "2024",
    title: "Advancements in Platinum-Based Anticancer Drug Development",
    journal: "Bioorganic & Medicinal Chemistry",
  },
  {
    year: "2025",
    title: "Enhanced Antimicrobial Properties of Chitosan-Based Biopolymers",
    journal: "Macromolecular Chemistry and Physics",
  },
  {
    year: "2025",
    title: "Perylene Diimide–Based Functional Materials for Sustainable Applications",
    journal: "ACS Applied Polymer Materials",
  },
];

export default function Research() {
  return (
    <section id="publications" className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing polymer science through innovative research,
            sustainable materials, and real-world applications.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-24">
          {researchData.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${item.bgColor}`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Publications Timeline */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900 mb-10">
            Selected Publications
          </h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

            {publications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-12 mb-12"
              >
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-gray-700 rounded-full" />

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <span className="text-sm text-gray-500 font-medium">
                    {item.year}
                  </span>
                  <h4 className="mt-1 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.journal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Scholar Button */}
          <div className="mt-16 text-center">
            <a
              href="https://scholar.google.com/citations?user=6_m_3mUAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              <BookOpen className="w-5 h-5" />
              View Full Google Scholar Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
