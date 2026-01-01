import { motion } from "framer-motion";

export default function Awards() {
  const awards = [
    {
      title: "State Science & Technology Award",
      year: "2024",
      description:
        "Recognized for outstanding contribution to polymer research and sustainable material innovation.",
      image: "/images/award1.jpg",
    },
    {
      title: "Best Research Publication",
      year: "2022",
      description:
        "Awarded for high-impact publication in polymer science and advanced materials.",
      image: "/images/award2.jpg",
    },
    {
      title: "Innovation in Chemical Research",
      year: "2020",
      description:
        "Honored for innovation in chemical processing and sustainable material development.",
      image: "/images/award3.jpg",
    },
  ];

  return (
    <section
      id="awards"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800"
        >
          Awards & Recognition
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-gray-600 max-w-2xl mx-auto"
        >
          Celebrating milestones and achievements in research, innovation,
          and academic excellence.
        </motion.p>

        {/* Timeline Cards */}
        <div className="mt-16 space-y-14">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {award.title}
                </h3>
                <p className="text-sm text-blue-600 mt-1">{award.year}</p>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
