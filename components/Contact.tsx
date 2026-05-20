import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-12 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/about-1.jpg" alt="" fill className="object-cover" />
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase mb-8 text-ink/60">— Let's Build Something</p>
        <h2 className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.95] mb-12">
          We build brands<br/>that matter.
        </h2>
        <a href="mailto:hello@amaclat.com" className="inline-flex items-center gap-3 bg-ink text-cream hover:bg-accent transition px-10 py-5 text-sm tracking-widest uppercase rounded-full">
          Contact Us
          <span>↗</span>
        </a>
        <div className="mt-20 flex flex-col md:flex-row gap-8 md:gap-16 justify-center text-sm tracking-widest uppercase text-ink/70">
          <div>hello@amaclat.com</div>
          <div>Berlin · Germany</div>
          <div>@amaclat</div>
        </div>
      </div>
    </section>
  );
}
