import { UserPlus, Code2, TrendingUp, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: { label: string; href: string };
}

const USE_CASES: UseCase[] = [
  {
    icon: UserPlus,
    title: "New User Onboarding",
    description:
      "A user bridges USDC from Ethereum and immediately starts swapping on Stacks — no STX purchase required. VelumX removes the single biggest barrier to Bitcoin L2 adoption.",
    cta: { label: "Try the App", href: "https://app.velumx.xyz" },
  },
  {
    icon: Code2,
    title: "dApp Developer Integration",
    description:
      "Add gasless UX to your Stacks dApp in an afternoon. The VelumX SDK handles intent signing, relayer communication, and fee abstraction so you can focus on your product.",
    cta: { label: "Read the Docs", href: "https://docs.velumx.xyz" },
  },
  {
    icon: TrendingUp,
    title: "DeFi Protocol Optimization",
    description:
      "Reduce user drop-off at the gas step. Protocols integrating VelumX see higher conversion rates because users never leave the flow to acquire gas tokens.",
    cta: { label: "Integrate Now", href: "https://docs.velumx.xyz" },
  },
];

export default function UseCases() {
  return (
    <section className="px-8 py-32 border-t border-white/[0.03] max-w-[1400px] mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter">
          Built For Everyone
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Whether you&apos;re a first-time DeFi user or a seasoned protocol
          builder, VelumX removes the gas barrier.
        </p>
      </div>

      {/* Use Case Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {USE_CASES.map((useCase) => {
          const Icon = useCase.icon;
          return (
            <div
              key={useCase.title}
              className="elite-card p-8 space-y-6 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-magenta/10 rounded-2xl flex items-center justify-center border border-magenta/20 shadow-[0_0_20px_rgba(233,30,99,0.1)]">
                <Icon className="h-7 w-7 text-magenta" />
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="font-bungee text-xl tracking-tighter">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {useCase.description}
                </p>
              </div>

              {/* CTA */}
              <a
                href={useCase.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-200 mt-auto"
              >
                {useCase.cta.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
