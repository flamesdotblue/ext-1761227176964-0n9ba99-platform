import React from 'react';
import { Rocket, Star, Github } from 'lucide-react';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur">
            <Rocket size={18} className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Cosmic Swarm</div>
            <div className="text-xs text-white/70">Futuristic Portfolio</div>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-1">
          <a href="#demos" className="px-3 py-2 rounded-md text-sm hover:bg-white/10 border border-transparent hover:border-white/10 transition">Demos</a>
          <a href="#about" className="px-3 py-2 rounded-md text-sm hover:bg-white/10 border border-transparent hover:border-white/10 transition">About</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm hover:bg-white/10 border border-transparent hover:border-white/10 transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition px-4 py-2 backdrop-blur border border-white/10 text-sm"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
