import { motion } from "framer-motion";

/* Pre-computed bar heights for two waveform rows */
const BARS_A = [
  22,45,68,38,82,55,30,75,48,90,35,60,25,72,50,88,40,65,28,80,
  52,35,70,45,85,32,60,42,78,55,25,68,38,90,48,62,30,75,52,40,
];
const BARS_B = [
  60,30,75,50,25,80,42,65,35,85,48,20,70,38,90,28,62,45,78,32,
  55,68,25,82,40,58,30,72,50,88,36,64,45,78,22,68,52,35,80,48,
];

const DUR_A = [1.2,0.9,1.5,1.1,0.8,1.4,1.0,1.6,1.3,0.85,1.25,1.0,1.45,0.95,1.2];
const DUR_B = [1.0,1.3,0.85,1.55,1.15,0.9,1.4,1.1,1.65,0.8,1.3,1.05,0.95,1.5,1.2];

export default function WaveformDivider({ flip = false, dim = false }) {
  const opacity = dim ? 0.18 : 0.28;

  return (
    <div
      className="relative w-full overflow-hidden pointer-events-none select-none"
      style={{ height: 64, background: "transparent" }}
      aria-hidden="true"
    >
      {/* Row A — taller bars */}
      <div
        className="absolute inset-x-0 flex items-end gap-[2px] px-0"
        style={{ bottom: flip ? "auto" : 0, top: flip ? 0 : "auto", height: "100%" }}
      >
        {BARS_A.map((h, i) => (
          <motion.div
            key={`a-${i}`}
            className="flex-1 min-w-0 rounded-[1px]"
            style={{
              height: `${h}%`,
              background: "rgba(245,166,35,0.9)",
              opacity,
              transformOrigin: flip ? "top" : "bottom",
            }}
            animate={{ scaleY: [1, 0.18 + (i % 4) * 0.07, 1] }}
            transition={{
              duration: DUR_A[i % DUR_A.length],
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.055,
            }}
          />
        ))}
      </div>

      {/* Row B — faint secondary layer offset */}
      <div
        className="absolute inset-x-0 flex items-end gap-[2px] px-0"
        style={{ bottom: flip ? "auto" : 0, top: flip ? 0 : "auto", height: "60%" }}
      >
        {BARS_B.map((h, i) => (
          <motion.div
            key={`b-${i}`}
            className="flex-1 min-w-0 rounded-[1px]"
            style={{
              height: `${h}%`,
              background: "rgba(237,232,223,0.9)",
              opacity: opacity * 0.35,
              transformOrigin: flip ? "top" : "bottom",
            }}
            animate={{ scaleY: [1, 0.15 + (i % 3) * 0.1, 1] }}
            transition={{
              duration: DUR_B[i % DUR_B.length],
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.04 + 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
