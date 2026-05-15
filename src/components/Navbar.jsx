import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Gear", href: "#gear" },
  { label: "Discography", href: "#discography" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/92 backdrop-blur-xl border-b border-[#EDE8DF]/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <a
            href="#"
            className="text-lg font-black text-[#EDE8DF] hover:text-[#F5A623] transition-colors tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            TA
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#EDE8DF]/45 hover:text-[#EDE8DF] transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 bg-[#F5A623] text-[#080808] font-bold rounded-full text-sm hover:bg-[#EDE8DF] transition-colors duration-200"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book Session
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-[5px] p-1 z-60"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                className="block w-5 h-[1.5px] bg-[#EDE8DF] origin-center"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-5 h-[1.5px] bg-[#EDE8DF]"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                className="block w-5 h-[1.5px] bg-[#EDE8DF] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl flex flex-col pt-20 px-6 pb-10"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-black text-[#EDE8DF]/60 hover:text-[#EDE8DF] py-3 border-b border-[#EDE8DF]/[0.06] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 w-full text-center py-4 bg-[#F5A623] text-[#080808] font-bold rounded-full text-base"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Book Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
