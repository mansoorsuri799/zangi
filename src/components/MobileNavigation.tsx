'use client';

import { useState, useEffect, useTransition } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from './MobileMenuProvider';
import { DOWNLOAD_URL, APP_STORE_URL } from '@/lib/site';

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
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const close = () => startTransition(() => setIsOpen(false));

  const menuPanel =
    mounted &&
    isOpen &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] flex flex-col bg-white md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-white shrink-0">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image src="/zangi-app.webp" alt="Zangi" width={28} height={28} className="rounded" />
            <span className="font-semibold text-ink">Zangi</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            className="min-h-11 min-w-11 inline-flex items-center justify-center p-2 text-ink"
            onClick={close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-2 bg-white">
          <ul className="space-y-0">
            {links.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className={`block py-3.5 px-2 text-base border-b border-line ${
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

        <div className="p-4 border-t border-line bg-white shrink-0 flex flex-col gap-3 safe-pb">
          <a href={DOWNLOAD_URL} className="cta-btn w-full" onClick={close}>
            Download Zangi
          </a>
          <a
            href={APP_STORE_URL}
            className="cta-btn w-full"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Download for iOS
          </a>
        </div>
      </div>,
      document.body
    );

  if (!mounted) {
    return (
      <button
        type="button"
        className="md:hidden min-h-11 min-w-11 inline-flex items-center justify-center p-2 text-ink"
        aria-label="Open menu"
      >
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
      {menuPanel}
    </div>
  );
}
