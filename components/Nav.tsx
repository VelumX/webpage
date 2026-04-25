"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    {
      label: "Protocol Docs",
      href: "https://docs.velumx.xyz",
      external: true,
    },
    { label: "GitHub", href: "https://github.com/velumX", external: true },
    { label: "Ecosystem", href: "#ecosystem", external: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 px-8 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-bg-primary/90 backdrop-blur-2xl border-b border-black/[0.06]"
            : "py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 group">
            <div className="relative w-9 h-9">
              <Image
                src="/velumx-icon.svg"
                alt="VelumX Icon"
                width={36}
                height={36}
                className="object-contain filter drop-shadow-[0_0_8px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-110"
                style={{ height: "auto" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bungee text-2xl leading-none tracking-tighter text-text-primary">
                VelumX
              </span>
              <span className="text-[9px] uppercase font-bold tracking-[0.4em] text-text-secondary/60 mt-1">
                Infrastructure
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12" aria-label="Main navigation">
            <div className="flex items-center gap-8 text-[10px] uppercase font-bold tracking-[0.25em] text-text-secondary">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-text-primary transition-colors duration-200"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="https://app.velumx.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-purple text-white text-[10px] uppercase font-bold tracking-[0.15em] hover:bg-purple-light transition-all shadow-[0_4px_16px_rgba(124,58,237,0.25)]"
            >
              Launch App
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-[100] bg-bg-primary flex flex-col ${
          mobileOpen ? "open" : ""
        }`}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/[0.06]">
          <a href="/" className="flex items-center gap-4" onClick={() => setMobileOpen(false)}>
            <Image
              src="/velumx-icon.svg"
              alt="VelumX Icon"
              width={36}
              height={36}
              style={{ height: "auto" }}
            />
            <span className="font-bungee text-2xl leading-none tracking-tighter text-text-primary">
              VelumX
            </span>
          </a>
          <button
            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Overlay Links */}
        <nav className="flex flex-col gap-2 px-8 py-12 flex-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-bungee tracking-tighter text-text-secondary hover:text-text-primary transition-colors py-4 border-b border-black/[0.06]"
              onClick={() => setMobileOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Overlay CTA */}
        <div className="px-8 py-12 border-t border-black/[0.06]">
          <a
            href="https://app.velumx.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-5 rounded-full bg-purple text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-purple-light transition-all shadow-[0_4px_20px_rgba(124,58,237,0.3)]"
            onClick={() => setMobileOpen(false)}
          >
            Launch App
          </a>
        </div>
      </div>
    </>
  );
}
