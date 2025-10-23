import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Rocket, Star, Sparkles } from 'lucide-react';

const demos = [
  {
    title: 'Nebula Visualizer',
    href: '#',
    icon: Sparkles,
    desc: 'Particle-based canvas with spectral gradients.'
  },
  {
    title: 'Quantum UI Kit',
    href: '#',
    icon: Star,
    desc: 'Modular components for cosmic aesthetics.'
  },
  {
    title: 'Wormhole Router',
    href: '#',
    icon: Rocket,
    desc: 'Animated transitions across app sectors.'
  },
];

export default function DemoLinks() {
  return (
    <div className="space-y-3">
      {demos.map((d, idx) => (
        <DemoItem key={idx} demo={d} />
      ))}
      <p className="text-xs text-white/60 mt-3">
        More coming soon—hover to feel the motion. Links are demos to the rest of the portfolio.
      </p>
    </div>
  );
}

function DemoItem({ demo }) {
  const Icon = demo.icon;
  return (
    <motion.a
      href={demo.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition overflow-hidden"
      initial={{ y: 6, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="p-4 flex items-center gap-4">
        <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
          <Icon size={18} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium truncate pr-3">{demo.title}</h3>
            <ExternalLink size={16} className="text-white/70 group-hover:text-white transition shrink-0" />
          </div>
          <p className="text-xs text-white/70 mt-1 line-clamp-1">{demo.desc}</p>
        </div>
      </div>
      <motion.div
        className="h-0.5 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/70 to-cyan-400/0"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.35 }}
      />
    </motion.a>
  );
}
