import React from 'react';
import Navigation from './components/Navigation';
import HeroCover from './components/HeroCover';
import SidePanel from './components/SidePanel';
import DemoLinks from './components/DemoLinks';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <HeroCover />
      <div className="relative z-10">
        <Navigation />
        <main className="flex flex-col lg:flex-row items-stretch gap-6 px-4 sm:px-6 lg:px-12 pt-24 lg:pt-28 pb-10">
          <section className="flex-1 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Cosmic Swarm Portfolio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              A trippy galaxy rollercoaster of work. This cover is the hero. Explore the rest through demo links on the side, animated with a touch of cosmic motion.
            </p>
            <div className="mt-8">
              <a
                href="#demos"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 transition px-5 py-2.5 backdrop-blur border border-white/10"
              >
                <span>See Demo Links</span>
              </a>
            </div>
          </section>
          <aside id="demos" className="w-full lg:w-[420px] xl:w-[460px]">
            <SidePanel>
              <DemoLinks />
            </SidePanel>
          </aside>
        </main>
      </div>
    </div>
  );
}
