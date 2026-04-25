import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: "Protocol",
    links: [
      { label: "Docs", href: "https://docs.velumx.xyz" },
      { label: "App", href: "https://app.velumx.xyz" },
      { label: "Dashboard", href: "https://dashboard.velumx.xyz" },
      { label: "Overview", href: "#" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "GitHub", href: "https://github.com/velumX" },
      { label: "SDK Docs", href: "https://docs.velumx.xyz" },
      { label: "Core Relayer", href: "#" },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        label: "@velumxprotocol",
        href: "https://twitter.com/velumxprotocol",
      },
      { label: "Brand Resources", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

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

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function Footer() {
  return (
    <footer className="px-8 py-24 border-t border-black/[0.05] relative z-10 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Image
              src="/velumx-logo.svg"
              alt="VelumX Logo"
              width={48}
              height={48}
              className="object-contain opacity-80"
              style={{ height: "auto" }}
            />
            <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-text-secondary leading-relaxed">
              The settlement protocol
              <br />
              for gas-free liquidity
              <br />
              and abstraction.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="space-y-6">
              <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-text-primary">
                {col.heading}
              </h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-text-secondary font-medium uppercase tracking-widest hover:text-purple transition-colors duration-200"
                      {...(isExternal(link.href)
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[9px] uppercase font-bold tracking-[0.5em] text-text-secondary">
            © 2025 VelumX Lab // Advanced Infrastructure For Stacks L2
          </p>

          <div className="flex items-center gap-8">
            {/* Status indicator */}
            <a
              href="#"
              className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-[0.4em] text-text-secondary hover:text-purple transition-colors duration-200"
            >
              <div className="w-1.5 h-1.5 rounded-full dot-green animate-pulse-dot" />
              Mainnet
            </a>

            {/* Social icons */}
            <a
              href="https://github.com/velumX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-purple transition-colors duration-200"
              aria-label="VelumX on GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href="https://twitter.com/velumxprotocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-purple transition-colors duration-200"
              aria-label="VelumX on Twitter/X (@velumxprotocol)"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
