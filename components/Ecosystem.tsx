interface Partner {
  name: string;
  role: string;
}

const PARTNERS: Partner[] = [
  { name: "Bitcoin", role: "Security Layer" },
  { name: "Stacks", role: "Execution Layer" },
  { name: "Hiro", role: "Infrastructure" },
  { name: "ALEX", role: "Liquidity Partner" },
  { name: "Bitflow", role: "Liquidity Partner" },
  { name: "Circle", role: "xReserve / USDC" },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="px-8 py-32 border-t border-black/[0.05] bg-black/[0.02] group"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter text-text-primary">
            Ecosystem &amp; Integrations
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Built on the most trusted infrastructure in the Bitcoin ecosystem.
          </p>
        </div>

        {/* Partner Grid */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-3"
            >
              <span className="font-bungee text-2xl tracking-tighter text-text-primary">
                {partner.name}
              </span>
              <span className="text-[8px] uppercase tracking-widest font-bold text-text-secondary">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
