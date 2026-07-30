'use client';

import { useState } from 'react';

type Faq = { q: string; a: string };

export default function FaqAccordion({
  items,
  className = '',
}: {
  items: Faq[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`space-y-3 ${className}`} role="list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div
            key={item.q}
            role="listitem"
            className="rounded-lg border border-line bg-white overflow-hidden"
          >
            <button
              type="button"
              id={buttonId}
              className="w-full flex items-center justify-between gap-3 px-3.5 sm:px-4 py-3.5 min-h-[48px] text-left hover:bg-secondary/80 transition-colors"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-semibold text-ink text-sm sm:text-[15px] leading-snug pr-2">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-brand/30 text-brand text-lg leading-none transition-transform duration-200 ${
                  isOpen ? 'rotate-45 bg-brand text-white border-brand' : 'bg-white'
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-mute text-sm leading-relaxed border-t border-line pt-3">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
