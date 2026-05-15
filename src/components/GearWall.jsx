import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gear } from "../data/gear";

/* Per-sticker layout — varied sizes, rotations, vertical offsets */
const LAYOUT = [
  { cols: "col-span-2", minH: 210, mt:   0, rot: "-1.5deg", tape: true  }, // SSL — wide
  { cols: "col-span-1", minH: 188, mt:  28, rot:  "3.5deg", tape: false },  // Yamaha
  { cols: "col-span-1", minH: 225, mt: -14, rot: "-4deg",   tape: true  }, // Pro Tools
  { cols: "col-span-1", minH: 192, mt:  36, rot:  "2.5deg", tape: false },  // Logic
  { cols: "col-span-2", minH: 200, mt:  -8, rot: "-2deg",   tape: true  }, // Ableton — wide
  { cols: "col-span-1", minH: 216, mt:  18, rot:  "5deg",   tape: false },  // AT4049
  { cols: "col-span-1", minH: 182, mt: -10, rot: "-3.5deg", tape: true  }, // C414
];

/* ── Gear Modal ─────────────────────────────────────────────── */
function GearModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.88, y: 16, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
        className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        style={{ background: item.bgColor }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent stripe */}
        <div className="h-[3px] w-full" style={{ background: item.accentColor }} />

        {/* Tape decoration on modal */}
        <div
          className="absolute top-0 left-8 w-12 h-[18px] -translate-y-1/2 rounded-sm"
          style={{ background: `${item.accentColor}30`, transform: "rotate(-2deg) translateY(-40%)" }}
        />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }} />
                ) : (
                  <span className="text-4xl">{item.emoji}</span>
                )}
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.3em] px-2.5 py-1 rounded-full"
                  style={{ background: `${item.accentColor}18`, color: item.accentColor, fontFamily: "'Space Mono', monospace" }}
                >
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {item.name}
              </h3>
            </div>
            <button onClick={onClose}
              className="p-2 rounded-full text-white/30 hover:text-white hover:bg-white/10 transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="h-px mb-6" style={{ background: `${item.accentColor}18` }} />
          <p className="text-white/65 leading-relaxed text-sm mb-6">{item.description}</p>
          <ul className="space-y-3">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                <span className="shrink-0 mt-0.5 text-xs" style={{ color: item.accentColor }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Single sticker ─────────────────────────────────────────── */
function Sticker({ item, layout, onClick, index }) {
  return (
    <motion.div
      className={`${layout.cols} relative flex flex-col items-center`}
      style={{ marginTop: layout.mt }}
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, type: "spring", damping: 14, stiffness: 160 }}
    >
      {/* Masking tape strip */}
      {layout.tape && (
        <div
          className="absolute -top-3 left-1/2 z-20 w-14 h-[10px] rounded-sm"
          style={{
            background: "rgba(237,232,223,0.18)",
            transform: `translateX(-50%) rotate(${parseFloat(layout.rot) * 0.4}deg)`,
            backdropFilter: "blur(2px)",
            border: "1px solid rgba(237,232,223,0.1)",
          }}
        />
      )}

      <motion.button
        onClick={onClick}
        className="relative w-full cursor-pointer flex flex-col items-center gap-2 bg-transparent border-none p-0"
        style={{ rotate: layout.rot }}
        whileHover={{ scale: 1.12, rotate: "0deg", y: -14, zIndex: 30 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", damping: 14, stiffness: 200 }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full object-contain select-none"
          style={{
            height: layout.minH,
            filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.75)) drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
          }}
          draggable={false}
        />
        <p
          className="text-[9px] uppercase tracking-[0.25em] text-center"
          style={{ color: item.accentColor, opacity: 0.35, fontFamily: "'Space Mono', monospace" }}
        >
          {item.name}
        </p>
      </motion.button>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function GearWall() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gear" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0b0b0b" }}>

      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(237,232,223,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.5,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,166,35,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* "STUDIO WALL" watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,14vw,200px)] font-black uppercase text-[#EDE8DF] opacity-[0.018] pointer-events-none select-none whitespace-nowrap"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Studio Wall
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-16 md:mb-20"
        >
          <p
            className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623] mb-5 flex items-center gap-3"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span className="w-6 h-px bg-[#F5A623]" /> Tools of the Trade
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-[clamp(48px,7vw,100px)] font-black leading-[0.88] tracking-tight text-[#EDE8DF] uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Gear<br />Wall
            </h2>
            <p className="text-[#EDE8DF]/35 text-sm max-w-xs md:text-right">
              Click any sticker to open experience notes.
            </p>
          </div>
        </motion.div>

        {/* ── Scattered sticker grid ─────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-start">
          {gear.map((item, i) => (
            <Sticker
              key={item.id}
              item={item}
              layout={LAYOUT[i] ?? LAYOUT[0]}
              onClick={() => setSelected(item)}
              index={i}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <GearModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
