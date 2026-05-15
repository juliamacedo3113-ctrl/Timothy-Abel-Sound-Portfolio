import { motion } from "framer-motion";
import { AtSign, Globe, Music, Mail } from "lucide-react";

const socials = [
  {
    label: "@timothyabel",
    href: "https://www.instagram.com/timothyabel/",
    icon: AtSign,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/timothy-leonard-2a4a473a5",
    icon: Globe,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/timothy-abel/1553221363",
    icon: Music,
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/2NuhOyYpULreO44UW7Kbx6",
    icon: Music,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] relative overflow-hidden">
      {/* Top amber accent */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/50 to-transparent" />

      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#F5A623] opacity-[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F5A623] opacity-[0.025] blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14 py-24 md:py-36">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623] mb-8 flex items-center gap-3"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <span className="w-6 h-px bg-[#F5A623]" /> Get in Touch
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-[clamp(52px,8.5vw,120px)] font-black leading-[0.88] tracking-tight text-[#EDE8DF] uppercase mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Let's Make<br />
            <span className="text-gradient">Something.</span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-[#EDE8DF]/45 max-w-md mb-12 leading-relaxed text-sm md:text-base"
        >
          Available for mixing, mastering, recording, production, and audiobook sessions.
          Based in NJ / NY — open to remote collaboration.
        </motion.p>

        {/* Email link */}
        <motion.a
          href="mailto:timothyleonard18@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="group inline-flex items-center gap-3 mb-14"
        >
          <div className="w-10 h-10 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/25 flex items-center justify-center group-hover:bg-[#F5A623] group-hover:border-[#F5A623] transition-all duration-300 shrink-0">
            <Mail size={16} className="text-[#F5A623] group-hover:text-[#080808] transition-colors" />
          </div>
          <span
            className="text-xl md:text-3xl font-bold text-[#EDE8DF] group-hover:text-[#F5A623] transition-colors duration-200 underline decoration-[#EDE8DF]/15 group-hover:decoration-[#F5A623]/40 underline-offset-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            timothyleonard18@gmail.com
          </span>
        </motion.a>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3"
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#EDE8DF]/45 border border-[#EDE8DF]/[0.08] rounded-full hover:text-[#EDE8DF] hover:border-[#EDE8DF]/25 transition-all duration-200 hover:bg-[#EDE8DF]/[0.04]"
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Divider + footer */}
        <div className="mt-20 md:mt-28 pt-8 border-t border-[#EDE8DF]/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <span
            className="text-[#EDE8DF]/18 text-xs"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            © 2025 Timothy Abel — All rights reserved
          </span>
          <span
            className="text-[#EDE8DF]/18 text-xs"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Audio Engineer · Producer · Artist
          </span>
        </div>
      </div>
    </section>
  );
}
