'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { name: 'Why Zangi', href: '/why-zangi' },
  { name: 'Security', href: '/zangi-security-and-privacy' },
  { name: 'No Phone Number', href: '/no-phone-number-messaging-app' },
  { name: 'Comparisons', href: '/zangi-vs-whatsapp-telegram-signal-skype-viber' },
  { name: 'Troubleshooting', href: '/zangi-app-not-working-common-problems-how-to-fix-them' },
];

export default function BlogCategoryDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-line text-ink text-sm font-semibold hover:border-brand transition-colors"
        aria-expanded={open}
      >
        Categories
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-20 mt-2 w-56 rounded-xl bg-surface border border-line shadow-soft py-1">
          {categories.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="block px-4 py-2 text-sm text-muted hover:bg-brand-soft hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
