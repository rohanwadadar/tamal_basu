import { motion } from "framer-motion";

export default function EducationRoadmap() {
  const education = [
    {
      degree: "B.Sc",
      year: "2010",
      institute: "University of Calcutta",
      desc: "Undergraduate studies in Chemistry and foundational sciences.",
      icon: "🎓",
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "M.Sc",
      year: "2012",
      institute: "Kanpur University",
      desc: "Advanced studies in Chemistry and material sciences.",
      icon: "🧪",
      color: "from-teal-500 to-teal-600"
    },
    {
      degree: "B.Ed",
      year: "2014",
      institute: "West Bengal University of Teachers' Training",
      desc: "Professional training in pedagogy and teaching methodology.",
      icon: "📘",
      color: "from-purple-500 to-purple-600"
    },
    {
      degree: "D.El.Ed",
      year: "2017",
      institute: "West Bengal Board of Primary Education",
      desc: "Diploma in elementary education and learning sciences.",
      icon: "🏫",
      color: "from-pink-500 to-pink-600"
    },
    {
      degree: "Ph.D",
      year: "2026",
      institute: "Amity University",
      desc: "Doctoral research in polymer chemistry and advanced materials.",
      icon: "🎓",
      color: "from-orange-500 to-orange-600"
    },
  ];

  return (
    <section
      id="education"
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-gray-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-100/20 rounded-full blur-3xl" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-12 md:mb-20 relative z-10"
      >
        <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4 md:mb-6 border border-teal-100">
          Educational Background
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          Academic Journey
        </h2>
        <p className="text-base md:text-xl text-gray-600 leading-relaxed px-4">
          A comprehensive path through rigorous education, specialized research, 
          and academic excellence in chemistry and pedagogy.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop Road Timeline */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-20">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 rounded-full shadow-inner" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 flex flex-col gap-4 py-4">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-full h-6 bg-white/80 rounded-full" />
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700 rounded-full" />
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-gray-700 rounded-full" />
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-300 via-teal-400 to-teal-500 rounded-full" />

        <div className="space-y-12 md:space-y-16 lg:space-y-24 relative z-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-start lg:items-center gap-6 md:gap-8`}
            >
              {/* Timeline Marker */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                className="absolute left-6 md:left-10 lg:left-1/2 lg:-translate-x-1/2 z-20"
              >
               
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-[42%]" />

              {/* Card */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rosunded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 w-full lg:w-[42%] ml-16 md:ml-24 lg:ml-0 border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`} />
                
                {/* Header with Icon and Year Badge */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="flex items-center gap-3 md:gap-4 flex-1">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                        {item.degree}
                      </h3>
                      <div className={`h-1 w-12 md:w-16 bg-gradient-to-r ${item.color} rounded-full`} />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                    className={`px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r ${item.color} text-white rounded-full font-bold text-sm md:text-base shadow-lg`}
                  >
                    {item.year}
                  </motion.div>
                </div>

                {/* Institute */}
                <p className="text-sm md:text-base font-semibold text-teal-700 mb-3 md:mb-4 flex items-start gap-2 relative z-10">
                  <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="flex-1">{item.institute}</span>
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 relative z-10">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="text-gray-500 font-medium">
                      Milestone {index + 1}/{education.length}
                    </span>
                    <div className="flex gap-1">
                      {education.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i <= index 
                              ? `w-6 md:w-8 bg-gradient-to-r ${item.color}` 
                              : 'w-1.5 bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: education.length * 0.1 + 0.3, duration: 0.6 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 transform hover:scale-105 transition-transform duration-300">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span className="font-bold text-sm md:text-base">16+ Years of Academic Excellence</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}