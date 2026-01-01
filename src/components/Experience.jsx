import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Factory, Users, Award, BookOpen, Lightbulb, TrendingUp } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: GraduationCap,
      title: "Academic Experience",
      stat: "15+ Years",
      description: "Teaching experience in undergraduate and postgraduate programs across chemistry and material science disciplines.",
      highlights: ["Curriculum Development", "Advanced Pedagogy", "Student Assessment"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: FlaskConical,
      title: "Research & Publications",
      stat: "10+ Papers",
      description: "Published peer-reviewed papers in polymer chemistry, nanomaterials, and sustainable technologies.",
      highlights: ["Polymer Chemistry", "Nanomaterials", "Green Chemistry"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: Factory,
      title: "Industrial Experience",
      stat: "5+ Years",
      description: "Hands-on industry exposure in quality control, process development, and applied material science.",
      highlights: ["Quality Control", "Process Development", "Material Testing"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      icon: Users,
      title: "Academic Mentorship",
      stat: "1000+ Students",
      description: "Mentored students in academic research, career development, and scientific communication.",
      highlights: ["Research Guidance", "Career Counseling", "Skill Development"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-600"
    }
  ];

  const achievements = [
    { icon: Award, label: "Excellence Awards", value: "Multiple" },
    { icon: BookOpen, label: "Research Projects", value: "20+" },
    { icon: Lightbulb, label: "Innovations", value: "15+" },
    { icon: TrendingUp, label: "Impact Factor", value: "High" }
  ];

  return (
    <section
    id="Experience"   // ✅ CORRECT ID
    className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-gray-50 overflow-hidden"
  >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-6 border border-teal-100">
            Career & Impact
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Extensive experience across academics, research, and industry with a
            strong focus on innovation, mentorship, and scientific excellence.
          </p>
        </motion.div>

        {/* Achievement Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl mb-3">
                <item.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.color} rounded-t-3xl`} />

              {/* Icon Section */}
              <div className="flex items-start justify-between mb-6">
                <div className={`${exp.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <exp.icon className={`w-8 h-8 ${exp.textColor}`} />
                </div>
                <div className={`px-4 py-2 ${exp.bgColor} ${exp.textColor} rounded-full text-sm font-semibold`}>
                  {exp.stat}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {exp.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-700 mb-3">Key Areas:</div>
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 ${exp.bgColor} ${exp.textColor} rounded-lg text-xs font-medium border ${exp.textColor.replace('text', 'border')}/20`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className={`w-6 h-6 ${exp.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Exploring opportunities for research collaboration, academic consultation, 
              or industrial partnerships in chemistry and material science.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#Contact"
                className="px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#publications"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                View Research
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}