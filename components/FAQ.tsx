"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is VelumX?",
    answer:
      "VelumX is a gas abstraction protocol on Stacks (Bitcoin L2). It lets users bridge, swap, and transact using only USDCx — without ever holding STX for gas fees.",
  },
  {
    question: "How does gas abstraction work?",
    answer:
      "When you initiate a transaction, you sign an intent authorizing a USDCx fee. The VelumX Relayer submits the transaction to Stacks, paying the STX gas. The on-chain Paymaster contract reimburses the Relayer from your USDCx authorization.",
  },
  {
    question: "Which wallets are supported?",
    answer:
      "VelumX supports Xverse and Leather for Stacks wallet connections, and MetaMask / Rabby for Ethereum-side bridging. Any SIP-010 compatible wallet can interact with the Paymaster contract directly.",
  },
  {
    question: "Is VelumX audited and secure?",
    answer:
      "The Paymaster and Registry contracts are written in Clarity, a decidable smart contract language that prevents entire classes of vulnerabilities. A formal audit is in progress. All contracts are open-source on GitHub.",
  },
  {
    question: "How do I get started?",
    answer:
      "Visit app.velumx.xyz to use the protocol as an end user, or docs.velumx.xyz to integrate the SDK into your dApp. The SDK supports React, Node.js, and React Native.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-8 py-32 border-t border-black/[0.05] max-w-[1400px] mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-bungee text-5xl md:text-6xl tracking-tighter text-text-primary">
          Frequently Asked Questions
        </h2>
        <p className="text-text-secondary text-lg max-w-xl mx-auto">
          Everything you need to know about VelumX.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="elite-card overflow-hidden"
            >
              {/* Question row */}
              <button
                className="w-full flex items-center justify-between px-8 py-6 text-left gap-4"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-base text-text-primary leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-text-secondary flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-purple" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Answer panel */}
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-8 pb-6 text-sm text-text-secondary leading-relaxed font-light border-t border-black/[0.05] pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
