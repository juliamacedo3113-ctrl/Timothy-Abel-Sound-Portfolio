import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Mixing",
    desc: "Full multitrack mix sessions — balancing, dynamics, spatial treatment, and final delivery for streaming or sync.",
  },
  {
    num: "02",
    title: "Mastering",
    desc: "Loudness normalization, tonal balance, stereo width enhancement, and distribution-ready output.",
  },
  {
    num: "03",
    title: "Recording & Tracking",
    desc: "Microphone placement, gain structure, session management, and live ensemble capture in studio or location settings.",
  },
  {
    num: "04",
    title: "Live Sound Reinforcement",
    desc: "FOH and monitor mixing, stage patching, signal flow troubleshooting for live performances and events.",
  },
  {
    num: "05",
    title: "Music Production",
    desc: "Full arrangement, instrument programming, beat construction, and creative direction from demo to final track.",
  },
  {
    num: "06",
    title: "Audiobook & Spoken Word",
    desc: "Clean editing, noise reduction, breath control, loudness compliance (ACX/DCSA), and chapter delivery.",
  },
  {
    num: "07",
    title: "Vocal Editing & Post",
    desc: "Timing correction, pitch treatment, comping, de-essing, and restoration for vocal-forward productions.",
  },
];

const tools = [
  "Pro Tools", "Logic Pro", "Ableton Live",
  "SSL Duality Delta", "Yamaha DM3",
  "AT4049", "AKG C414", "Waves", "iZotope",
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#F5EFE0" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p
              className="text-[11px] uppercase tracking-[0.5em] text-[#1A1006]/40 mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span className="w-6 h-px bg-[#1A1006]/30" /> Services
            </p>
            <h2
              className="text-[clamp(48px,7vw,100px)] font-black leading-[0.88] tracking-tight text-[#1A1006] uppercase"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What I<br />Do.
            </h2>
          </div>
          <p className="text-[#1A1006]/45 text-sm max-w-xs md:text-right leading-relaxed">
            Full-service audio — from raw session files to the finished, released product.
          </p>
        </motion.div>

        {/* Top rule */}
        <div className="w-full h-px bg-[#1A1006]/10 mb-0" />

        {/* Service rows */}
        <div>
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-10 py-7 md:py-8 border-b border-[#1A1006]/10 hover:pl-2 transition-all duration-300"
            >
              {/* Number */}
              <span
                className="text-[#1A1006]/18 text-4xl font-black leading-none shrink-0 md:w-16 md:text-right group-hover:text-[#1A1006]/30 transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {svc.num}
              </span>

              {/* Title + desc */}
              <div className="flex-1">
                <h3
                  className="text-xl md:text-2xl font-bold text-[#1A1006] leading-tight mb-2 group-hover:text-[#1A1006] transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-[#1A1006]/50 text-sm leading-relaxed max-w-2xl">{svc.desc}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex shrink-0 w-8 h-8 items-center justify-center text-[#1A1006]/15 group-hover:text-[#1A1006]/40 transition-colors text-lg mt-1">
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <p
            className="text-[10px] uppercase tracking-[0.4em] text-[#1A1006]/35 mb-5"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Tools & Equipment
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs text-[#1A1006]/55 border border-[#1A1006]/15 px-3.5 py-2 rounded-full hover:bg-[#1A1006] hover:text-[#F5EFE0] hover:border-[#1A1006] transition-all duration-200 cursor-default"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
