import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Experiance", link: "#Experience" },
  { name: "Publications", link: "#publications" },
  { name: "Contact", link: "#Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO / BRAND */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-12 h-12">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
                alt="Chemistry Logo"
                className="relative w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-800 tracking-tight leading-none">
                Dr. Tamal Basu
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Chemistry Professor
              </span>
            </div>
          </motion.div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                className="group relative px-4 py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE: CHEMICAL EFFECT & MOBILE MENU */}
          <div className="flex items-center gap-4">
            {/* CHEMICAL EFFECT DOT */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg"
                animate={{
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-gray-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed left-0 top-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
                        alt="Chemistry Logo"
                        className="relative w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-gray-800 leading-none">
                        Dr. Tamal Basu
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        Chemistry Professor
                      </span>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleMenu}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.button>
                </div>
                
                {/* Decorative Line */}
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              </div>

              {/* Sidebar Navigation */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <a
                        href={item.link}
                        onClick={toggleMenu}
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 hover:pl-6"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-300"></span>
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Sidebar Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                  <p className="text-sm text-gray-600 mb-2">
                    Ready to collaborate?
                  </p>
                  <a
                    href="#contact"
                    onClick={toggleMenu}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}