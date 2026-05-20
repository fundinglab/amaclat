export default function Marquee() {
  const items = ["brand identity", "packaging design", "brand naming", "art direction", "brand strategy", "visual systems"];
  const loop = [...items, ...items, ...items];
  return (
    <div className="py-8 bg-ink text-cream border-y border-cream/10 overflow-hidden">
      <div className="marquee">
        {loop.map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl mx-8 italic opacity-80">— {t}</span>
        ))}
      </div>
    </div>
  );
}
