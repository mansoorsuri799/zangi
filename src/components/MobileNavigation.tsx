'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { DOWNLOAD_URL } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/zangi-for-pc', label: 'PC Version' },
  { href: '/zangi-app-for-ios', label: 'iOS' },
  { href: '/zangi-for-business', label: 'Business' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
];

export default function MobileNavigation() {
  const { isOpen, setIsOpen } = useMobileMenu();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <button type="button" className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center p-2 text-ink" aria-label="Open menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    );
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="min-h-11 min-w-11 inline-flex items-center justify-center p-2 text-ink -mr-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={() => startTransition(() => setIsOpen(!isOpen))}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-line">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => startTransition(() => setIsOpen(false))}
            >
              <Image src="/zangi-app.webp" alt="Zangi" width={28} height={28} className="rounded" />
              <span className="font-semibold">Zangi</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="p-1"
              onClick={() => startTransition(() => setIsOpen(false))}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-1">
              {links.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => startTransition(() => setIsOpen(false))}
                      className={`block py-3 px-2 text-base border-b border-line ${
                        active ? 'text-brand font-semibold' : 'text-ink'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-line">
            <a
              href={DOWNLOAD_URL}
              className="cta-btn w-full"
              onClick={() => startTransition(() => setIsOpen(false))}
            >
              Download Zangi
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
