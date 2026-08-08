import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Command } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Stack", to: "/marquee" },
  { name: "Projects", to: "/projects" },
  { name: "Journey", to: "/journey" },
  { name: "Contact", to: "/contact" },
];

// Magnetic hover for nav items
const MagneticLink = ({ children, to, isActive }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative"
    >
      <Link
        to={to}
        className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
          isActive ? "text-[#6a77d5]" : "text-gray-500 hover:text-gray-900"
        }`}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="navbar-active"
            className="absolute inset-0 bg-[#6a77d5]/8 rounded-lg -z-10"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-3 mx-auto max-w-[90%] lg:max-w-4xl"
            : "top-0 max-w-full"
        }`}
      >
        {/* Main Nav Container */}
        <div
          className={`relative transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]"
              : "bg-transparent"
          }`}
        >
          <div className="px-5 lg:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link to="/" className="flex items-center gap-3 group/logo">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#6a77d5] blur-lg rounded-xl opacity-0 group-hover/logo:opacity-30 transition-opacity duration-500" />
                  <img
                    src="/favicon.png"
                    alt="logo"
                    height="36"
                    width="36"
                    className="relative rounded-xl transition-transform duration-500 group-hover/logo:scale-105 group-hover/logo:rotate-3"
                  />
                </div>
                <span className="text-lg font-bold text-gray-900 tracking-tight hidden sm:block">
                  Saad<span className="text-[#6a77d5]"> Asim</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <MagneticLink
                    to={link.to}
                    isActive={location.pathname === link.to}
                  >
                    {link.name}
                  </MagneticLink>
                </motion.div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="hidden md:block"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-[#6a77d5] transition-all duration-300 overflow-hidden shadow-lg shadow-gray-900/5 hover:shadow-[#6a77d5]/20"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center gap-2">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 rounded-xl hover:bg-gray-100 transition-colors group"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-0 left-0 w-5 h-[2px] bg-gray-700 rounded-full origin-center"
                />
                <motion.span
                  animate={
                    isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute top-2 left-0 w-5 h-[2px] bg-gray-700 rounded-full"
                />
                <motion.span
                  animate={
                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-4 left-0 w-5 h-[2px] bg-gray-700 rounded-full origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-white z-50 md:hidden overflow-y-auto shadow-2xl"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/favicon.png"
                    alt="logo"
                    height="32"
                    width="32"
                    className="rounded-lg"
                  />
                  <span className="text-lg font-bold text-gray-900">
                    Saad<span className="text-[#6a77d5]">.</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="px-4 py-6">
                <nav className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.3,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-[#6a77d5]/8 text-[#6a77d5]"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span className="font-medium">{link.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobile-active-dot"
                              className="w-1.5 h-1.5 rounded-full bg-[#6a77d5]"
                            />
                          )}
                          <ArrowRight
                            className={`w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                              isActive ? "text-[#6a77d5]" : "text-gray-400"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-[#6a77d5] transition-colors duration-300 group shadow-lg shadow-gray-900/10"
                >
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* Keyboard shortcut hint */}
                <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
                  <Command className="w-3 h-3" />
                  <span>+</span>
                  <span className="font-mono">K</span>
                  <span className="ml-1">to search</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
