import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  { name: "Somma", category: "Brand Identity", img: "/images/project-1.jpg", tag: "Hospitality" },
  { name: "Ato Matcha", category: "Packaging Design", img: "/images/project-3.jpg", tag: "Wellness" },
  { name: "Innudo", category: "Packaging / Branding", img: "/images/project-2.jpg", tag: "Food & Beverage" },
  { name: "Kyor", category: "Full Brand System", img: "/images/project-4.jpg", tag: "Lifestyle" },
  { name: "Naago", category: "Visual Identity", img: "/images/project-5.jpg", tag: "Fashion" },
  { name: "The Derma Edit", category: "Brand Strategy", img: "/images/project-3.jpg", tag: "Beauty" },
];

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-4 text-ink/60">— Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl">Recent projects.</h2>
          </div>
          <Link href="#contact" className="text-sm tracking-widest uppercase border-b border-ink pb-1 hover:text-accent transition">View All Work →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {PROJECTS.map((p, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 mb-4">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 text-xs tracking-widest uppercase bg-cream/90 px-3 py-1 rounded-full">{p.tag}</span>
              </div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl md:text-3xl">{p.name}</h3>
                <span className="text-xs tracking-widest uppercase text-ink/60">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
