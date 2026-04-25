import { Monitor, Server, Smartphone, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SDKCapability {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CAPABILITIES: SDKCapability[] = [
  {
    icon: Monitor,
    title: "React",
    description:
      "Drop-in hooks for gasless transactions in any React or Next.js app.",
  },
  {
    icon: Server,
    title: "Node.js",
    description:
      "Server-side SDK for relayer integration and backend transaction sponsorship.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description:
      "React Native compatible. Bring gasless DeFi to iOS and Android.",
  },
];

// GitHub SVG icon
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CODE_SNIPPET = `import { VelumXClient } from '@velumx/sdk';

const client = new VelumXClient({
  network: 'mainnet',
  paymasterContract: 'SP...velumx-paymaster-v1',
});

// Gasless swap — user pays in USDCx, no STX needed
const result = await client.sponsoredSwap({
  tokenIn:  'usdcx',
  tokenOut: 'stx',
  amount:   1_000_000, // 1 USDCx (6 decimals)
  slippage: 0.5,
});

console.log('Settled:', result.txId);`;

// Tokenize the code snippet for syntax highlighting
function renderCodeLine(line: string, index: number) {
  // Simple token-based coloring
  const parts: React.ReactNode[] = [];

  // Handle import line
  if (line.startsWith("import")) {
    const importMatch = line.match(/^(import)\s+(\{[^}]+\})\s+(from)\s+('.+')$/);
    if (importMatch) {
      parts.push(
        <span key="kw" className="text-[#c792ea]">{importMatch[1]}</span>,
        " ",
        <span key="imp" className="text-[#82aaff]">{importMatch[2]}</span>,
        " ",
        <span key="from" className="text-[#c792ea]">{importMatch[3]}</span>,
        " ",
        <span key="str" className="text-[#c3e88d]">{importMatch[4]}</span>,
        ";"
      );
      return <div key={index}>{parts}</div>;
    }
  }

  // Handle comments
  if (line.trim().startsWith("//")) {
    return (
      <div key={index}>
        <span className="text-[#546e7a] italic">{line}</span>
      </div>
    );
  }

  // Handle const declarations
  if (line.includes("const ")) {
    const rendered = line
      .replace(/\bconst\b/g, "§CONST§")
      .replace(/\bawait\b/g, "§AWAIT§")
      .replace(/'[^']*'/g, (m) => `§STR§${m}§/STR§`)
      .replace(/\b(true|false|null|undefined)\b/g, "§BOOL§$1§/BOOL§")
      .replace(/\b(\d[\d_]*)\b/g, "§NUM§$1§/NUM§");

    return (
      <div key={index}>
        {rendered.split(/(§CONST§|§AWAIT§|§STR§.*?§\/STR§|§BOOL§.*?§\/BOOL§|§NUM§.*?§\/NUM§)/).map((part, i) => {
          if (part === "§CONST§") return <span key={i} className="text-[#c792ea]">const</span>;
          if (part === "§AWAIT§") return <span key={i} className="text-[#c792ea]">await</span>;
          if (part.startsWith("§STR§")) return <span key={i} className="text-[#c3e88d]">{part.replace(/§STR§|§\/STR§/g, "")}</span>;
          if (part.startsWith("§BOOL§")) return <span key={i} className="text-[#ff9cac]">{part.replace(/§BOOL§|§\/BOOL§/g, "")}</span>;
          if (part.startsWith("§NUM§")) return <span key={i} className="text-[#f78c6c]">{part.replace(/§NUM§|§\/NUM§/g, "")}</span>;
          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  }

  // Handle method calls and object keys
  if (line.includes(":") && !line.includes("//")) {
    const rendered = line
      .replace(/'[^']*'/g, (m) => `§STR§${m}§/STR§`)
      .replace(/\b(\d[\d_,]*)\b/g, "§NUM§$1§/NUM§");

    return (
      <div key={index}>
        {rendered.split(/(§STR§.*?§\/STR§|§NUM§.*?§\/NUM§)/).map((part, i) => {
          if (part.startsWith("§STR§")) return <span key={i} className="text-[#c3e88d]">{part.replace(/§STR§|§\/STR§/g, "")}</span>;
          if (part.startsWith("§NUM§")) return <span key={i} className="text-[#f78c6c]">{part.replace(/§NUM§|§\/NUM§/g, "")}</span>;
          return <span key={i}>{part}</span>;
        })}
      </div>
    );
  }

  // Default: render as-is with string highlighting
  const withStrings = line.replace(/'[^']*'/g, (m) => `§STR§${m}§/STR§`);
  return (
    <div key={index}>
      {withStrings.split(/(§STR§.*?§\/STR§)/).map((part, i) => {
        if (part.startsWith("§STR§")) return <span key={i} className="text-[#c3e88d]">{part.replace(/§STR§|§\/STR§/g, "")}</span>;
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
}

export default function SDK() {
  const lines = CODE_SNIPPET.split("\n");

  return (
    <section className="px-8 py-32 border-t border-black/[0.05] max-w-[1400px] mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter text-text-primary">
          Build Gasless Apps
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Integrate in minutes. The VelumX SDK handles everything from intent
          signing to settlement.
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Code Snippet — 60% */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-[#1E1E2E]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.05] bg-white/[0.04]">
              <div className="system-dot dot-red" />
              <div className="system-dot dot-yellow" />
              <div className="system-dot dot-green" />
              <span className="ml-4 text-[10px] uppercase font-bold tracking-[0.3em] text-white/30">
                velumx-sdk — example.ts
              </span>
            </div>

            {/* Code */}
            <pre className="p-6 text-sm font-mono text-white/80 overflow-x-auto leading-relaxed">
              <code>
                {lines.map((line, i) => renderCodeLine(line, i))}
              </code>
            </pre>
          </div>
        </div>

        {/* Capabilities — 40% */}
        <div className="lg:col-span-2 space-y-8">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center border border-purple/20 flex-shrink-0">
                  <Icon className="h-5 w-5 text-purple" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bungee text-lg tracking-tighter text-text-primary">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTAs */}
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="https://docs.velumx.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-purple text-white font-bold text-sm uppercase tracking-[0.15em] hover:bg-purple-light transition-all shadow-[0_4px_20px_rgba(124,58,237,0.3)]"
            >
              View SDK Docs
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="https://github.com/velumX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-black/10 text-text-primary font-bold text-sm uppercase tracking-[0.15em] hover:bg-black/[0.03] hover:border-black/20 transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
