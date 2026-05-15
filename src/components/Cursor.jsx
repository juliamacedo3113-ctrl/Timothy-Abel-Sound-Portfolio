import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.left  = `${x - 4}px`;
      dot.style.top   = `${y - 4}px`;
      ring.style.left = `${x - 18}px`;
      ring.style.top  = `${y - 18}px`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* Outer ring — CSS transition gives the lag */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: -100,
          left: -100,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(245,166,35,0.6)",
          pointerEvents: "none",
          zIndex: 999999,
          transition: "left 0.12s ease-out, top 0.12s ease-out",
          willChange: "left, top",
        }}
      />
      {/* Inner dot — no transition, snaps instantly */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: -100,
          left: -100,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#F5A623",
          pointerEvents: "none",
          zIndex: 999999,
          willChange: "left, top",
        }}
      />
    </>
  );
}
