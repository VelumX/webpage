import { PenLine, Radio, Zap, Bitcoin, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "User Signs Intent",
    description:
      "The user signs a gasless transaction intent with their Stacks wallet, specifying the action and authorizing a USDCx fee.",
    icon: PenLine,
  },
  {
    number: 2,
    title: "Relayer Picks Up",
    description:
      "The VelumX Relayer detects the signed intent and prepares a sponsored transaction, covering the required STX gas fee.",
    icon: Radio,
  },
  {
    number: 3,
    title: "Paymaster Sponsors Gas",
    description:
      "The on-chain Paymaster contract validates the USDCx authorization and reimburses the Relayer for the STX gas spent.",
    icon: Zap,
  },
  {
    number: 4,
    title: "Settles on Bitcoin",
    description:
      "The transaction is confirmed on Stacks and anchored to Bitcoin, giving the user Bitcoin-grade finality with zero STX held.",
    icon: Bitcoin,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-8 py-32 max-w-[1400px] mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter text-text-primary">
          How It Works
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Four steps from intent to Bitcoin-anchored settlement — no STX
          required.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-px border-t border-dashed border-black/10 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="elite-card p-8 space-y-6 group">
                {/* Step number + icon row */}
                <div className="flex items-start justify-between">
                  <span className="font-bungee text-6xl leading-none text-black/[0.06] select-none">
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 bg-purple/10 rounded-2xl flex items-center justify-center border border-purple/20 shadow-[0_0_16px_rgba(124,58,237,0.08)] flex-shrink-0">
                    <Icon className="h-6 w-6 text-purple" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-bungee text-xl tracking-tighter text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <a
          href="https://docs.velumx.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-text-secondary hover:text-purple transition-colors duration-200"
        >
          Read the Technical Docs
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
