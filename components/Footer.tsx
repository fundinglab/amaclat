export default function Footer() {
  return (
    <footer className="bg-ink text-cream py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-2xl tracking-[0.3em]">AMACLAT</div>
        <div className="text-xs tracking-widest uppercase text-cream/60">
          © {new Date().getFullYear()} Amaclat Studio. All rights reserved.
        </div>
        <div className="flex gap-6 text-xs tracking-widest uppercase">
          <a href="#" className="hover:text-accent">Instagram</a>
          <a href="#" className="hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
