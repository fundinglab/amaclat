const SERVICES = [
  {
    title: "Visual Identity",
    items: ["Logo & Wordmark Creation", "Typography & Typefaces", "Color Palette Development", "Iconography & Symbol Design", "Custom Illustrations", "Visual Style Guide", "Brand Collateral Design"],
  },
  {
    title: "Art Direction",
    items: ["Art Direction Strategy", "Visual Concept Development", "Creative Direction for Campaigns", "Photography Direction", "Illustration Oversight", "Set & Location Styling"],
  },
  {
    title: "Brand Strategy",
    items: ["Brand Discovery & Research", "Market & Competitor Analysis", "Brand Positioning", "Voice & Messaging Development", "Brand Naming", "Tagline & Storytelling", "Brand Architecture"],
  },
  {
    title: "Packaging Design",
    items: ["Concept Development", "Structural Design & Prototyping", "Graphic Design for Packaging", "Label & Tag Design", "Material Selection", "Mockups", "Packaging Guidelines"],
  },
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-ink/60">— Our Services</p>
        <h2 className="font-display text-4xl md:text-6xl mb-6 max-w-3xl">We don't just make visuals,<br/>we shape brand stories.</h2>
        <p className="text-lg text-ink/70 max-w-2xl mb-20 leading-relaxed">
          We start each project with the Foundation Focus — a workshop that helps clients define their brand's essence and lay out a clear vision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {SERVICES.map((s, i) => (
            <div key={i} className="border-t border-ink/15 pt-8">
              <h3 className="font-display text-3xl md:text-4xl mb-6">{s.title}</h3>
              <ul className="space-y-2 text-ink/75">
                {s.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-accent mt-1">·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
