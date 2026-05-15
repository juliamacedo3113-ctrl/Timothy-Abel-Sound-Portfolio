import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { clientWork, ownReleases } from "../data/discography";

/* ── Album Modal ────────────────────────────────────────────── */
function AlbumModal({ album, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/88 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        className="w-full sm:max-w-[440px] bg-[#101010] rounded-t-3xl sm:rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_40px_100px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover */}
        <div className={`w-full aspect-square bg-gradient-to-br ${album.gradient} relative`}>
          {album.cover && (
            <img src={album.cover} alt={album.title} className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          <button onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/60 hover:text-white backdrop-blur-sm">
            <X size={16} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50 mb-1"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              {album.type} · {album.year}
            </p>
            <h3 className="text-2xl font-black text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {album.title}
            </h3>
            <p className="text-white/65 text-sm mt-0.5">{album.artist}</p>
          </div>
        </div>
        {/* Details */}
        <div className="p-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5A623] bg-[#F5A623]/10 px-3 py-1 rounded-full mb-4"
            style={{ fontFamily: "'Space Mono', monospace" }}>
            {album.role}
          </span>
          <p className="text-[#EDE8DF]/55 leading-relaxed text-sm mb-6">{album.description}</p>
          {album.streamLink && (
            <a href={album.streamLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5A623] hover:text-[#EDE8DF] transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              Stream <ExternalLink size={13} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Client Work — horizontal scroll crate ─────────────────── */
function ClientCrate({ items, onSelect }) {
  const ref = useRef(null);

  return (
    <div>
      {/* Featured first item — full-width spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <button
          onClick={() => onSelect(items[0])}
          className="group w-full rounded-2xl overflow-hidden relative flex flex-col md:flex-row cursor-pointer border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
          style={{ background: "#111" }}
        >
          {/* Cover — tall on mobile, square on desktop */}
          <div className={`w-full md:w-64 lg:w-80 shrink-0 aspect-square md:aspect-auto md:h-56 bg-gradient-to-br ${items[0].gradient} relative`}>
            {items[0].cover && (
              <img src={items[0].cover} alt={items[0].title} className="absolute inset-0 w-full h-full object-cover" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            {/* Featured badge */}
            <div className="absolute top-4 left-4 bg-[#F5A623] text-[#080808] text-[9px] font-black uppercase tracking-[0.3em] px-2.5 py-1 rounded-full"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              Featured
            </div>
          </div>
          {/* Info */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F5A623] mb-3"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              {items[0].role}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-[#EDE8DF] mb-1 group-hover:text-white transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {items[0].title}
            </h3>
            <p className="text-[#EDE8DF]/45 text-sm mb-4">{items[0].artist} · {items[0].type} · {items[0].year}</p>
            <p className="text-[#EDE8DF]/40 text-sm leading-relaxed max-w-sm hidden md:block">{items[0].description}</p>
            <span className="mt-5 text-sm text-[#F5A623] group-hover:text-[#EDE8DF] transition-colors font-semibold">
              View Details →
            </span>
          </div>
        </button>
      </motion.div>

      {/* Remaining items — horizontal scroll crate */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {items.slice(1).map((album, i) => (
          <motion.button
            key={album.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onClick={() => onSelect(album)}
            className="group shrink-0 text-left cursor-pointer"
            style={{ scrollSnapAlign: "start", width: 200 }}
          >
            <div className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${album.gradient} relative overflow-hidden mb-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}>
              {album.cover && (
                <img src={album.cover} alt={album.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Details
                </span>
              </div>
              <div className="absolute bottom-2 left-2">
                <span className="text-[9px] text-white/45 uppercase tracking-wider font-bold bg-black/40 px-1.5 py-0.5 rounded-full"
                  style={{ fontFamily: "'Space Mono', monospace" }}>
                  {album.type}
                </span>
              </div>
            </div>
            <h4 className="text-sm font-bold text-[#EDE8DF] group-hover:text-[#F5A623] transition-colors leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {album.title}
            </h4>
            <p className="text-xs text-[#EDE8DF]/40 mt-0.5">{album.artist}</p>
            <p className="text-[9px] text-[#F5A623]/50 mt-1 uppercase tracking-wider font-bold"
              style={{ fontFamily: "'Space Mono', monospace" }}>
              {album.role}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-[10px] text-[#EDE8DF]/20 mt-2 text-center md:hidden"
        style={{ fontFamily: "'Space Mono', monospace" }}>
        ← scroll for more →
      </p>
    </div>
  );
}

/* ── Own Releases — stacked vinyl aesthetic ─────────────────── */
function OwnReleaseGrid({ items, onSelect }) {
  return (
    <div>
      {/* Albums (first two are big) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {items.slice(0, 2).map((album, i) => (
          <motion.button
            key={album.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(album)}
            className="group text-left cursor-pointer rounded-2xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
            style={{ background: "#0f0f0f" }}
          >
            <div className={`w-full aspect-video bg-gradient-to-br ${album.gradient} relative overflow-hidden`}>
              {album.cover && (
                <img src={album.cover} alt={album.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute top-4 right-4">
                <span className="text-[9px] text-white/50 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10"
                  style={{ fontFamily: "'Space Mono', monospace" }}>
                  {album.type} · {album.year}
                </span>
              </div>
              {/* Artist label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-black text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {album.title}
                </p>
                <p className="text-white/55 text-xs mt-0.5">{album.role}</p>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="text-[#EDE8DF]/45 text-xs leading-relaxed">{album.description.slice(0, 120)}…</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Singles — horizontal scroll */}
      <div
        className="flex gap-4 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {items.slice(2).map((album, i) => (
          <motion.button
            key={album.id}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            onClick={() => onSelect(album)}
            className="group shrink-0 text-left cursor-pointer"
            style={{ scrollSnapAlign: "start", width: 180 }}
          >
            <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${album.gradient} relative overflow-hidden mb-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]`}>
              {album.cover && (
                <img src={album.cover} alt={album.title} className="absolute inset-0 w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-semibold bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  Details
                </span>
              </div>
            </div>
            <h4 className="text-sm font-bold text-[#EDE8DF] group-hover:text-[#F5A623] transition-colors"
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {album.title}
            </h4>
            <p className="text-[9px] text-[#EDE8DF]/35 mt-0.5">{album.year}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
export default function Discography() {
  const [tab, setTab] = useState("client");
  const [selected, setSelected] = useState(null);

  return (
    <section id="discography" className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="mb-12"
        >
          <p
            className="text-[11px] uppercase tracking-[0.5em] text-[#F5A623] mb-5 flex items-center gap-3"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span className="w-6 h-px bg-[#F5A623]" /> Discography
          </p>
          <h2
            className="text-[clamp(48px,7vw,100px)] font-black leading-[0.88] tracking-tight text-[#EDE8DF] uppercase"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            The Work
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-12 border-b border-[#EDE8DF]/[0.07]">
          {[{ key: "client", label: "Client Work" }, { key: "own", label: "Own Releases" }].map(({ key, label }) => (
            <button key={key} onClick={() => setTab(key)}
              className={`relative px-5 py-3.5 text-sm font-semibold transition-colors pb-4 ${tab === key ? "text-[#EDE8DF]" : "text-[#EDE8DF]/30 hover:text-[#EDE8DF]/65"}`}
              style={{ fontFamily: "'Syne', sans-serif" }}>
              {label}
              {tab === key && (
                <motion.div layoutId="disc-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5A623]" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "client"
              ? <ClientCrate items={clientWork} onSelect={setSelected} />
              : <OwnReleaseGrid items={ownReleases} onSelect={setSelected} />
            }
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <AlbumModal album={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
