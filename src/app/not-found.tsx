import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found - Zangi App',
  description: 'The page you are looking for does not exist. Return to the Zangi homepage.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="font-display text-6xl md:text-8xl font-extrabold text-brand/20 mb-2">404</p>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-ink">Page not found</h1>
      <p className="text-lg mb-8 text-muted max-w-lg mx-auto">
        This page may have moved. Head home to download Zangi or browse the guides.
      </p>
      <Link href="/" className="cta-btn inline-flex">
        <span>Back to home</span>
        <span className="cta-icon" aria-hidden>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l6-6m-6 6l6 6" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
