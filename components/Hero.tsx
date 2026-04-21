"use client";

import { ArrowUpRight, Terminal, ChevronDown } from "lucide-react";

export interface HeroStat {
  label: string;
  value: string;
  unit?: string;
}

export const STATS: HeroStat[] = [
  { label: "Transactions Sponsored", value: "12,400+", unit: "txns" },
  { label: "Uptime", value: "99.99", unit: "%" },
  { label: "Settlement Latency", value: "~2.4", unit: "s" },
];

export default function Hero() {
  return (
    <section className="relative px-6 pt-52 pb-32 flex flex-col items-center overflow-hidden">
      {/* Decorative background */}
      <div className="mesh-glow" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* HUD Badge */}
      <div className="mb-14 hud-badge relative z-10">
        <div className="w-2 h-2 rounded-full dot-green animate-pulse-dot" />
        <span className="text-[10px] uppercase font-bold tracking-[0.35em] text-white/30 whitespace-nowrap">
          Mainnet Operational // Bitcoin Settlement Active
        </span>
      </div>

      {/* Headline + Sub-headline + CTAs */}
      <div className="max-w-[1200px] text-center space-y-12 relative z-10">
        <h1 className="hero-headline">
          The <span className="neon-text-magenta">Settlement</span>
          <br />
          <span className="text-white/90">Layer</span> For
          <br />
          Gasless DeFi
        </h1>

        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg md:text-xl text-text-secondary font-light leading-relaxed tracking-tight">
            VelumX is the gas abstraction protocol for Stacks (Bitcoin L2).
            Bridge, swap, and transact using only USDCx — no STX required at
            any step.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a
              href="https://app.velumx.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elite btn-primary group"
            >
              <span className="flex items-center gap-3">
                Enter Protocol
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </span>
            </a>

            <a
              href="https://dashboard.velumx.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-elite btn-secondary group"
            >
              <span className="flex items-center gap-3">
                <Terminal className="h-4 w-4" />
                Developer Portal
              </span>
            </a>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="elite-card p-6 text-center space-y-2">
              <div className="font-bungee text-3xl tracking-tighter text-white">
                {stat.value}
                {stat.unit && (
                  <span className="text-magenta text-xl ml-1">{stat.unit}</span>
                )}
              </div>
              <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-24 flex flex-col items-center gap-4 animate-scroll opacity-20 relative z-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.4em]">
          Scroll to Explore
        </span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}
