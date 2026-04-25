import {
  ArrowLeftRight,
  RefreshCw,
  ArrowUpFromLine,
  FileSignature,
  Code2,
  Bitcoin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: "magenta" | "blue";
}

export const FEATURES: Feature[] = [
  {
    icon: ArrowLeftRight,
    title: "Gasless Bridging",
    description:
      "Bridge USDC from Ethereum to Stacks without holding STX. Fees deducted from your USDCx balance automatically.",
    accentColor: "magenta",
  },
  {
    icon: RefreshCw,
    title: "Gasless Swaps",
    description:
      "Swap tokens on the VelumX AMM paying fees in the input token. No STX required at any step.",
    accentColor: "blue",
  },
  {
    icon: ArrowUpFromLine,
    title: "Gasless Withdrawals",
    description:
      "Send funds back to Ethereum without needing STX dust for the bridge fee. Pure stablecoin UX.",
    accentColor: "magenta",
  },
  {
    icon: FileSignature,
    title: "Intent Settlement",
    description:
      "Sign a typed intent off-chain. The Relayer executes and the Paymaster settles — sub-block finality.",
    accentColor: "blue",
  },
  {
    icon: Code2,
    title: "Universal SDK",
    description:
      "React, Node, and Mobile SDKs. Integrate gasless transactions in under 20 lines of code.",
    accentColor: "magenta",
  },
  {
    icon: Bitcoin,
    title: "Bitcoin-Native Finality",
    description:
      "Every transaction anchors to Bitcoin via Stacks Nakamoto. Immutable, censorship-resistant settlement.",
    accentColor: "blue",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-32 border-t border-black/[0.05] max-w-[1400px] mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter text-text-primary">
          Core Capabilities
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Everything you need to build and use gasless DeFi on Bitcoin L2.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          const isMagenta = feature.accentColor === "magenta";
          return (
            <div key={feature.title} className="elite-card p-8 space-y-6 group">
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                  isMagenta
                    ? "bg-purple/10 border-purple/20 shadow-[0_0_16px_rgba(124,58,237,0.08)]"
                    : "bg-blue-500/10 border-blue-500/20 shadow-[0_0_16px_rgba(37,99,235,0.08)]"
                }`}
              >
                <Icon
                  className={`h-7 w-7 ${
                    isMagenta ? "text-purple" : "text-blue-neon"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-bungee text-xl tracking-tighter text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
