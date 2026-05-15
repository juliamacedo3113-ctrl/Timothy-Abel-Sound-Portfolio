import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

/* Bento config — each card has its own personality */
const BENTO = [
  {
    /* 0: Paterson — wide feature card */
    cols: "md:col-span-2",
    minH: "min-h-[320px] md:min-h-[400px]",
    bg: "#0a0f18",
    accent: "#4FC3F7",
    numOpacity: "0.06",
    layout: "wide",
  },
  {
    /* 1: Sound on Sound — tall card */
    cols: "md:col-span-1",
    minH: "min-h-[320px] md:min-h-[400px]",
    bg: "#130e06",
    accent: "#F5A623",
    numOpacity: "0.07",
    layout: "tall",
  },
  {
    /* 2: Indie sessions — short left */
    cols: "md:col-span-1",
    minH: "min-h-[260px]",
    bg: "#0e0b18",
    accent: "#CE93D8",
    numOpacity: "0.06",
    layout: "normal",
  },
  {
    /* 3: Orchestral — wide bottom */
    cols: "md:col-span-2",
    minH: "min-h-[260px]",
    bg: "#070f0b",
    accent: "#6EE7B7",
    numOpacity: "0.05",
    layout: "wide",
  },
];

function BentoCard({ project, config, index }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      className={`${config.cols} ${config.minH} relative rounded-2xl overflow-hidden flex flex-col justify-between p-7 md:p-9 cursor-default`}
      style={{
        background: config.bg,
        border: `1px solid ${config.accent}18`,
        boxShadow: hovered ? `0 0 0 1px ${config.accent}30, 0 24px 60px rgba(0,0,0,0.5)` : "0 2px 20px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.35s ease",
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Giant background number */}
      <span
        className="absolute top-4 right-6 text-[clamp(80px,12vw,140px)] font-black leading-none pointer-events-none select-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: config.accent,
          opacity: config.numOpacity,
        }}
      >
        {num}
      </span>

      {/* Accent dot top-left */}
      <motion.div
        className="w-2 h-2 rounded-full mb-auto"
        style={{ background: config.accent }}
        animate={{ opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content bottom half */}
      <div className="relative z-10">
        {/* Tags row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.28em] px-2.5 py-1 rounded-full"
            style={{ background: `${config.accent}18`, color: config.accent, fontFamily: "'Space Mono', monospace" }}
          >
            {project.role}
          </span>
          <span
            className="text-[10px] text-[#EDE8DF]/28"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {project.type} · {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-2xl md:text-3xl font-black text-[#EDE8DF] leading-tight mb-3"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#EDE8DF]/45 text-sm leading-relaxed max-w-lg">
          {project.description}
        </p>

        {/* Details — reveal on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-5 pt-5 overflow-hidden"
              style={{ borderTop: `1px solid ${config.accent}18` }}
            >
              <div className={`grid ${config.layout === "wide" ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
                {project.details.slice(0, config.layout === "wide" ? 4 : 2).map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#EDE8DF]/40">
                    <span style={{ color: config.accent }} className="shrink-0 mt-0.5 opacity-60">▸</span>
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom-right arrow (shows on hover) */}
      <motion.div
        className="absolute bottom-7 right-7 w-9 h-9 rounded-full flex items-center justify-center text-sm"
        style={{
          background: hovered ? config.accent : `${config.accent}14`,
          color: hovered ? "#080808" : config.accent,
          transition: "all 0.3s ease",
        }}
      >
        →
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header — split across two lines asymmetrically */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623] mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span className="w-6 h-px bg-[#F5A623]" /> Engineering Credits
            </p>
            <h2
              className="text-[clamp(48px,7vw,100px)] font-black leading-[0.88] tracking-tight text-[#EDE8DF] uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Selected<br />Work
            </h2>
          </div>
          <p className="text-[#EDE8DF]/35 text-sm max-w-xs md:text-right leading-relaxed">
            Recording, mixing, mastering, and live sound credits — hover any card for session details.
          </p>
        </motion.div>

        {/* ── Bento grid ─────────────────────────────────────── */}
        {/* Row 1: [wide] + [tall] */}
        {/* Row 2: [normal] + [wide] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {projects.map((project, i) => (
            <BentoCard
              key={project.id}
              project={project}
              config={BENTO[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
