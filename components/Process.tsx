const STEPS = [
  { num: "I", title: "Onboarding", desc: "We start with an easygoing onboarding to get to know your goals and make sure we're on the same page." },
  { num: "II", title: "Strategy / Consult", desc: "Then, we dive into crafting a solid strategy and messaging that hits the mark with your audience." },
  { num: "III", title: "Strategy-Based Design", desc: "We bring your ideas to life with fresh, engaging designs that fit your brand perfectly." },
  { num: "IV", title: "Cultivate / Delivery", desc: "Finally, we wrap things up and deliver everything, making sure it's just what your brand needs." },
];

export default function Process() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-ink text-cream">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-4 text-cream/60">— Our Process</p>
        <h2 className="font-display text-4xl md:text-6xl mb-20 max-w-2xl">From kickoff to launch.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((s, i) => (
            <div key={i} className="border-t border-cream/20 pt-8">
              <span className="font-display text-3xl text-accent">{s.num}</span>
              <h3 className="font-display text-2xl mt-4 mb-4">{s.title}</h3>
              <p className="text-cream/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
