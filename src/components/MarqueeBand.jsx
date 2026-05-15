const ITEMS = [
  "Mixing", "Mastering", "Recording", "Live Sound",
  "Production", "Audiobook Editing", "Vocal Editing",
  "Pro Tools", "Logic Pro", "Ableton", "SSL Duality",
];

const SEP = "◆";

export default function MarqueeBand() {
  const track = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden bg-[#F5A623] py-4 border-y-0">
      {/* Left/right fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#F5A623] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#F5A623] to-transparent pointer-events-none" />

      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 px-4 shrink-0"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#080808] whitespace-nowrap">
              {item}
            </span>
            <span className="text-[#080808]/40 text-[10px]">{SEP}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
