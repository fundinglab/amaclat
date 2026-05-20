import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-ink">
      <Image
        src="/images/hero-1.jpg"
        alt="AMACLAT brand identity"
        fill
        priority
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 text-cream">
        <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-80 fade-up">Brand Identity · Packaging · Strategy</p>
        <h1 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl fade-up" style={{animationDelay: "0.1s"}}>
          We build brands<br/>that matter.
        </h1>
        <div className="mt-12 flex items-center gap-6 fade-up" style={{animationDelay: "0.3s"}}>
          <Link href="#works" className="inline-flex items-center gap-3 border border-cream/40 hover:bg-cream hover:text-ink transition px-8 py-4 text-sm tracking-widest uppercase rounded-full">
            View Our Work
            <span className="text-accent">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
