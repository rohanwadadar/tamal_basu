import { motion } from "framer-motion";
import { Mail, Linkedin, BookOpen, Phone, MapPin, Send, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" }
  ];

  const contactInfo = [
    { icon: Mail, text: "tamalbasu292@gmail.com", href: "mailto:tamalbasu292@gmail.com" },
    { icon: Phone, text: "+91 8981947080", href: "tel:+918981947080" },
    { icon: MessageCircle, text: "WhatsApp", href: "https://wa.me/918981947080" },
    { icon: MapPin, text: "Bhātpāra, West Bengal, India", href: "#" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer id="Contact" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 relative inline-block">
              Dr. Tamal Basu
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Chemistry Professor specializing in polymer chemistry, green chemistry, and advanced material sciences with 15+ years of teaching excellence.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group relative mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Available for Consultation
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-teal-500 transition-colors duration-300" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Newsletter/CTA */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 relative inline-block">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500"></span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Follow for updates on research, publications, and academic insights.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Mail, href: "mailto:tamalbasu292@gmail.com", label: "Email" },
                { Icon: MessageCircle, href: "https://wa.me/918981947080", label: "WhatsApp" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: BookOpen, href: "#", label: "Research" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-11 h-11 bg-slate-800/50 rounded-lg flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  <social.Icon className="w-5 h-5 relative z-10 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dr. Tamal Basu. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors duration-300">
              Terms of Use
            </a>
          </div>

          {/* Tagline */}
          <p className="text-sm text-slate-500 italic hidden lg:block">
            "Advancing Chemistry • Inspiring Innovation • Shaping Future Scientists"
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-blue-500/50 flex items-center justify-center z-50 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        <span className="sr-only">Back to Top</span>
      </motion.button>
    </footer>
  );
}