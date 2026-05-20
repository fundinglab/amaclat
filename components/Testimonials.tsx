const QUOTES = [
  { q: "Amaclat translated our raw idea into a brand that finally feels like us. Strategic, beautiful, and exactly on point.", author: "Lena R.", role: "Founder, Kyor" },
  { q: "Working with the team was effortless. They listened, pushed back when needed, and delivered work that elevated our entire category.", author: "Marco V.", role: "CEO, Ammos" },
  { q: "Best investment we made this year. Sales jumped 40% after the rebrand launched.", author: "Sara P.", role: "Co-founder, The Derma Edit" },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-ink text-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-cream/60">— Testimonials</p>
        <h2 className="font-display text-4xl md:text-6xl mb-20 max-w-3xl">What people are saying about Amaclat.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {QUOTES.map((t, i) => (
            <div key={i} className="border-t border-cream/20 pt-8">
              <p className="font-display text-2xl md:text-3xl leading-snug italic mb-8">"{t.q}"</p>
              <div className="text-sm tracking-widest uppercase">
                <div>{t.author}</div>
                <div className="text-cream/50 mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
