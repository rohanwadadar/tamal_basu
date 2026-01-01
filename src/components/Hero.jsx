import { motion } from "framer-motion";
import React from "react";
import profileImg from "../assets/WhatsApp Image 2026-01-01 at 11.59.54 AM.jpeg";
import greenChemistryImg from "../assets/12-principles-of-green-chemistry-or-sustainable-chemistry-principle-removebg-preview.png";

export default function HeroAbout() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [isFlipping, setIsFlipping] = React.useState(false);

  // Array of images with topics - replace with your actual imports
  const chemistryPages = [
    {
      img: greenChemistryImg,
      title: "12 Principles of Green Chemistry",
      description: "Guiding sustainable innovation in chemical research"
    },
    {
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=600&fit=crop",
      title: "Polymer Science",
      description: "Advanced synthesis of functional materials"
    },
    {
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3250a8e8?w=600&h=600&fit=crop",
      title: "Sustainable Materials",
      description: "Eco-friendly chemical innovations"
    },
    {
      img: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=600&fit=crop",
      title: "Material Characterization",
      description: "Advanced analytical techniques"
    }
  ];

  const nextPage = () => {
    if (!isFlipping && currentPage < chemistryPages.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (!isFlipping && currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* ================= HERO SECTION ================= */}
      <div className="py-32 px-6 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-teal-500/10 text-teal-700 rounded-full text-sm font-medium border border-teal-200">
                Chemistry Professor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              <span className="text-gray-900">Dr. </span>
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Tamal Basu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl text-gray-600 font-light"
            >
              Pioneering Sustainable Chemical Innovation
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Leveraging advanced expertise in polymer chemistry, material science, 
              and sustainable research to drive transformative innovation in 
              chemistry education and research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#about"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-xl overflow-hidden shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="#Contact"
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:text-teal-700 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Teaching</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">Years Industrial</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">1000+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl rotate-12 opacity-20" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl -rotate-12 opacity-20" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-[3rem] blur-2xl" />
              <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 p-2 rounded-[3rem] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Dr. Tamal Basu"
                  className="w-[340px] h-[440px] object-cover rounded-[2.7rem]"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Available for Consultation</div>
                    <div className="text-xs text-gray-500">Research & Development</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4">
              About
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Advancing Chemical Science
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging cutting-edge research with practical applications to create 
              sustainable solutions for tomorrow's challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Tamal Basu is a distinguished researcher and thought leader 
                  specializing in <strong className="text-teal-700">polymer chemistry</strong>, 
                  <strong className="text-teal-700"> green chemistry</strong>, and 
                  <strong className="text-teal-700"> advanced material sciences</strong>. 
                  His pioneering work focuses on developing sustainable chemical 
                  solutions that deliver measurable real-world impact.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  With a career spanning academia and industry, Dr. Basu has made 
                  significant contributions to environmentally responsible materials, 
                  functional polymers, and innovative chemical systems that address 
                  critical challenges in sustainability and performance.
                </p>
              </div>

              {/* Expertise Cards */}
              <div className="grid grid-cols-1 gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-200 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl">🧪</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Polymer Science</h3>
                    <p className="text-sm text-gray-600">Advanced synthesis and characterization of functional polymeric materials</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl">♻️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Green Chemistry</h3>
                    <p className="text-sm text-gray-600">Sustainable processes and environmentally benign chemical methodologies</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-200 hover:shadow-lg transition-all"
                >
                  <div className="text-3xl">🔬</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Material Science</h3>
                    <p className="text-sm text-gray-600">Innovation in material design and application-driven research</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* IMAGE - BOOK FLIP ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl transform rotate-3" />
              
              {/* Book Container */}
              <div className="relative perspective-1000">
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  
                  {/* Page Flip Container */}
                  <div className="relative h-[500px] overflow-hidden">
                    {/* Current Page */}
                    <motion.div
                      key={`page-${currentPage}`}
                      initial={{ rotateY: isFlipping ? 0 : -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 backface-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={chemistryPages[currentPage].img}
                        alt={chemistryPages[currentPage].title}
                        className="w-full h-[400px] object-cover rounded-xl"
                      />
                      
                      <div className="mt-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {chemistryPages[currentPage].title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {chemistryPages[currentPage].description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 0 || isFlipping}
                      className="p-3 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Page Indicators */}
                    <div className="flex gap-2">
                      {chemistryPages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (!isFlipping && idx !== currentPage) {
                              setIsFlipping(true);
                              setTimeout(() => {
                                setCurrentPage(idx);
                                setIsFlipping(false);
                              }, 600);
                            }
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentPage 
                              ? 'w-8 bg-teal-600' 
                              : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextPage}
                      disabled={currentPage === chemistryPages.length - 1 || isFlipping}
                      className="p-3 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl">🌱</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl">⚗️</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}