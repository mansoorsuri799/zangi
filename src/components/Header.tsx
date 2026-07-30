'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';
import { DOWNLOAD_URL } from '@/lib/site';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/zangi-for-pc', label: 'PC' },
  { href: '/zangi-app-for-ios', label: 'iOS' },
  { href: '/zangi-for-business', label: 'Business' },
  { href: '/blog', label: 'Blog' },
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-line">
      <div className="max-w-3xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3 min-w-0">
        <Link href="/" className="flex items-center gap-2 min-w-0 shrink">
          <Image
            src="/zangi-app.webp"
            alt="Zangi"
            width={32}
            height={32}
            className="rounded w-8 h-8"
            priority
          />
          <span className="font-semibold text-ink text-base sm:text-lg truncate">Zangi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? 'text-brand font-medium' : 'text-mute hover:text-ink'}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={DOWNLOAD_URL}
            className="hidden sm:inline-flex items-center min-h-[36px] text-sm font-semibold text-white bg-brand px-3 py-1.5 rounded hover:bg-brand-deep"
          >
            Download
          </a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
