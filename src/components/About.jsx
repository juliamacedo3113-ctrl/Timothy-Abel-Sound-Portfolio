import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { value: "2",    label: "Studio Albums",   sub: "self-produced · self-mixed" },
  { value: "5+",   label: "Artist Credits",  sub: "pop · jazz · hip-hop · classical" },
  { value: "1 yr", label: "Sound on Sound",  sub: "Montclair, NJ internship" },
  { value: "BM",   label: "Honors College",  sub: "William Paterson University" },
];

const SKILLS = [
  "Pro Tools", "Logic Pro", "Ableton Live",
  "Mixing", "Mastering", "Multitrack Recording",
  "Live Sound", "Vocal Editing", "Stem Delivery",
  "ORTF Stereo Capture", "Patchbay Routing",
  "Audiobook Editing", "Post-Production",
];

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const quoteY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#080808] overflow-hidden"
      style={{ paddingBottom: "8rem" }}
    >
      {/* ── Full-bleed photo ──────────────────────────────────── */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full"
          style={{ height: "clamp(420px, 65vw, 740px)" }}
        >
          {/* Photo — bleeds full width */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/Images/profile.jpg"
              alt="Timothy Abel"
              className="w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.6) saturate(0.85)" }}
            />
          </div>

          {/* Gradient fades */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" style={{ opacity: 0.45 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />

          {/* Section label — top left */}
          <div className="absolute top-20 left-6 md:left-14 flex items-center gap-3 z-10">
            <span className="w-6 h-px bg-[#F5A623]" />
            <span
              className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              About
            </span>
          </div>

          {/* Dramatic name tag — top right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-20 right-6 md:right-14 text-right z-10"
          >
            <p
              className="text-[10px] uppercase tracking-[0.35em] text-[#EDE8DF]/30 mb-1"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              NJ / NY · Available
            </p>
            <div className="flex items-center justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ animation: "pulse-slow 2s ease-in-out infinite" }} />
              <span className="text-xs text-green-400/70" style={{ fontFamily: "'Space Mono', monospace" }}>Open for sessions</span>
            </div>
          </motion.div>

          {/* ── Giant pull-quote overlapping center ─────────── */}
          <motion.div
            style={{ y: quoteY }}
            className="absolute inset-x-0 bottom-0 flex items-end pb-16 md:pb-20 px-6 md:px-14"
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(42px,6.5vw,96px)] font-black leading-[0.88] tracking-[-0.02em] uppercase text-[#EDE8DF] max-w-[900px]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technical ear,{" "}
              <span style={{ color: "#F5A623" }}>creative</span>
              <br />instinct.
            </motion.h2>

            {/* Credential tape badge — floats near the quote */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -6, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", damping: 14 }}
              className="absolute right-8 md:right-24 bottom-20 hidden md:block"
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-[7px] rounded-sm"
                style={{ background: "rgba(245,166,35,0.35)" }} />
              <div
                className="rounded-xl border border-[#EDE8DF]/12 px-4 py-3 text-center"
                style={{ background: "rgba(14,14,14,0.85)", backdropFilter: "blur(12px)" }}
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#F5A623] mb-1"
                  style={{ fontFamily: "'Space Mono', monospace" }}>Class of 2024</p>
                <p className="text-sm font-black text-[#EDE8DF]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  William Paterson
                </p>
                <p className="text-[9px] text-[#EDE8DF]/40 mt-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
                  BM Sound Engineering Arts
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-b border-[#EDE8DF]/[0.06] grid grid-cols-2 md:grid-cols-4"
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 md:px-10 py-8 ${i < STATS.length - 1 ? "border-r border-[#EDE8DF]/[0.06]" : ""}`}
          >
            <p
              className="text-[clamp(28px,3vw,44px)] font-black text-[#F5A623] leading-none mb-2"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {s.value}
            </p>
            <p className="text-[#EDE8DF] text-sm font-semibold mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
              {s.label}
            </p>
            <p className="text-[10px] text-[#EDE8DF]/30 uppercase tracking-wider" style={{ fontFamily: "'Space Mono', monospace" }}>
              {s.sub}
            </p>
          </div>
        ))}
      </motion.div>

      {/* ── Bio + Skills ──────────────────────────────────────── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 mt-16 md:mt-20">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">

          {/* Bio paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Large italic accent quote */}
            <p
              className="text-2xl md:text-3xl text-[#EDE8DF]/70 font-light italic leading-snug mb-8 border-l-2 border-[#F5A623] pl-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              "Sound engineered<br />from the inside out."
            </p>

            <div className="space-y-4 text-[#EDE8DF]/50 leading-relaxed text-sm">
              <p>
                Timothy Abel is a New Jersey–based audio engineer, producer, mixer, and recording artist.
                He holds a{" "}
                <span className="text-[#EDE8DF]/80">Bachelor of Music in Sound Engineering Arts & Jazz Studies</span>{" "}
                from William Paterson University, graduating from the Honors College and serving as President
                of the Sound Engineering &amp; Arts department.
              </p>
              <p>
                He completed a year-long internship at{" "}
                <span className="text-[#EDE8DF]/80">Sound on Sound Studios in Montclair, NJ</span>,
                working alongside professional engineers on commercial sessions spanning music recording,
                audiobook production, and spoken-word post-production.
              </p>
              <p>
                His freelance work spans pop, jazz, classical, rock, and hip-hop — from intimate
                singer-songwriter sessions to large-scale orchestral recording projects.
                Beyond the console, he writes, sings, and produces his own music, with two
                full-length albums entirely self-produced and self-mixed.
              </p>
            </div>
          </motion.div>

          {/* Skills + decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Decorative frequency readout */}
            <div
              className="rounded-2xl p-5 mb-8 relative overflow-hidden"
              style={{ background: "#0e0e0e", border: "1px solid rgba(245,166,35,0.1)" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.06)_0%,transparent_60%)]" />
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#F5A623]/60 mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                Signal Path
              </p>
              <div className="flex items-center gap-2 text-[#EDE8DF]/30 text-xs" style={{ fontFamily: "'Space Mono', monospace" }}>
                <span className="text-[#F5A623]/70">Source</span>
                <span className="flex-1 border-t border-dashed border-[#EDE8DF]/10" />
                <span>Pre</span>
                <span className="flex-1 border-t border-dashed border-[#EDE8DF]/10" />
                <span>SSL</span>
                <span className="flex-1 border-t border-dashed border-[#EDE8DF]/10" />
                <span>DAW</span>
                <span className="flex-1 border-t border-dashed border-[#EDE8DF]/10" />
                <span className="text-[#F5A623]/70">Master</span>
              </div>
            </div>

            <p
              className="text-[10px] uppercase tracking-[0.35em] text-[#EDE8DF]/20 mb-4"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Skills & Tools
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="text-xs text-[#EDE8DF]/45 border border-[#EDE8DF]/[0.08] px-3 py-1.5 rounded-full hover:border-[#F5A623]/40 hover:text-[#F5A623] transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Sound on Sound badge */}
            <div
              className="mt-8 flex items-center gap-4 p-4 rounded-2xl"
              style={{ background: "#0e0e0e", border: "1px solid rgba(237,232,223,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: "rgba(245,166,35,0.1)" }}
              >
                <span className="text-[#F5A623] text-xs font-black" style={{ fontFamily: "'Syne', sans-serif" }}>SoS</span>
              </div>
              <div>
                <p className="text-[#EDE8DF] text-sm font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Sound on Sound Studios
                </p>
                <p className="text-[#EDE8DF]/35 text-xs mt-0.5" style={{ fontFamily: "'Space Mono', monospace" }}>
                  Engineering Intern · Montclair, NJ · 2023–2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
