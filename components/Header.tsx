"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between text-cream">
      <Link href="/" className="font-display text-2xl tracking-[0.3em]">AMACLAT</Link>
      <nav className="hidden md:flex gap-10 text-sm tracking-widest uppercase">
        <Link href="/" className="hover:opacity-60 transition">Home</Link>
        <Link href="#about" className="hover:opacity-60 transition">About</Link>
        <Link href="#works" className="hover:opacity-60 transition">Works</Link>
        <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
      </nav>
      <button onClick={() => setOpen(!open)} className="md:hidden text-sm tracking-widest">MENU</button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-ink text-cream p-8 flex flex-col gap-4 md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About</Link>
          <Link href="#works" onClick={() => setOpen(false)}>Works</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
