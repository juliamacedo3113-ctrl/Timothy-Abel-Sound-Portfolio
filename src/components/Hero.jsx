import { motion } from "framer-motion";

/* ── Waveform ──────────────────────────────────────────────── */
const WF = [
  18,35,52,42,78,30,65,88,45,22,70,55,40,85,28,62,48,92,33,70,
  25,58,44,80,36,66,52,38,75,28,60,90,42,55,30,72,48,85,22,65,
  38,78,55,30,68,44,92,25,70,48,35,82,52,28,65,40,75,32,58,45,
];
const DUR  = [1.1,1.4,0.9,1.6,1.2,1.0,1.5,1.3,1.7,0.8,1.4,1.1,1.6,0.9,1.3];
const MINS = [0.15,0.25,0.2,0.3,0.12,0.22,0.18,0.28,0.14,0.24,0.2,0.16,0.26,0.13,0.21];

function WaveBar({ height, index }) {
  return (
    <motion.div
      className="flex-1 min-w-0 rounded-[1px] origin-bottom"
      style={{ height: `${height}%`, background: "rgba(245,166,35,0.65)" }}
      animate={{ scaleY: [1, MINS[index % MINS.length], 1] }}
      transition={{ duration: DUR[index % DUR.length], repeat: Infinity, ease: "easeInOut", delay: (index % 12) * 0.09 }}
    />
  );
}

/* ── Metadata chips ────────────────────────────────────────── */
const CHIPS = [
  "NJ / NY",
  "Pro Tools · Logic · Ableton",
  "Mixing · Mastering · Recording",
  "BM Sound Engineering Arts",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#080808]">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] rounded-full bg-[#F5A623] opacity-[0.07] blur-[160px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#F5A623] opacity-[0.03] blur-[110px] -translate-x-1/2" />
      </div>


      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] w-full mx-auto px-6 md:px-14 pt-28 pb-4">

        {/* Top label */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <div className="w-8 h-px bg-[#F5A623]" />
          <span className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623] font-semibold"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Audio Engineer · Producer · Artist
          </span>
        </motion.div>

        {/* Giant name — clip-reveal from bottom */}
        <div className="mb-6 md:mb-8">
          {["Timothy", "Abel."].map((word, wi) => (
            <div key={word} className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, delay: 0.08 + wi * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(72px,11vw,176px)] font-black leading-[0.84] tracking-[-0.02em] uppercase"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {wi === 0
                  ? <span className="text-[#EDE8DF]">{word}</span>
                  : (
                    <>
                      <span className="text-[#EDE8DF]">Abel</span>
                      <motion.span
                        className="text-[#F5A623]"
                        animate={{ opacity: [1, 1, 0, 0, 1] }}
                        transition={{ duration: 1.1, repeat: Infinity, ease: "linear", times: [0, 0.45, 0.5, 0.95, 1] }}
                      >.</motion.span>
                    </>
                  )
                }
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left w-full h-px bg-[#EDE8DF]/10 mb-8"
        />

        {/* 2-col below divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="text-[clamp(16px,1.7vw,24px)] text-[#EDE8DF]/55 max-w-xs leading-snug font-light"
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Sound engineered<br />from the inside out.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400"
                style={{ animation: "pulse-slow 2s ease-in-out infinite" }} />
              <span className="text-[11px] text-[#EDE8DF]/40 tracking-wider"
                style={{ fontFamily: "'Space Mono', monospace" }}>
                Available for sessions
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#work"
              className="px-7 py-3.5 bg-[#F5A623] text-[#080808] font-bold rounded-full text-sm hover:bg-[#EDE8DF] transition-all duration-300 tracking-wide"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              View Work ↓
            </a>
            <a href="https://open.spotify.com/artist/2NuhOyYpULreO44UW7Kbx6"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 border border-[#EDE8DF]/15 text-[#EDE8DF]/70 rounded-full text-sm hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-300">
              ↗ Spotify
            </a>
            <a href="https://music.apple.com/us/artist/timothy-abel/1553221363"
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3.5 border border-[#EDE8DF]/15 text-[#EDE8DF]/70 rounded-full text-sm hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-300">
              ↗ Apple Music
            </a>
          </div>
        </motion.div>

        {/* Metadata chips */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-2"
        >
          {CHIPS.map((tag) => (
            <span key={tag}
              className="text-[10px] text-[#EDE8DF]/25 border border-[#EDE8DF]/8 px-3 py-1.5 rounded-full"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Full-width waveform ───────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="relative z-10 flex items-end gap-[2px] px-6 md:px-14 h-20 md:h-28"
      >
        {WF.map((h, i) => <WaveBar key={i} height={h} index={i} />)}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 right-8 md:right-14 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#EDE8DF]/20 to-transparent"
        />
        <span className="text-[9px] text-[#EDE8DF]/18 tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Space Mono', monospace" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
