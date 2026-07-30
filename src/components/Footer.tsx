import Link from 'next/link';
import { DOWNLOAD_URL, SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line mt-10 sm:mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-10 min-w-0">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 text-sm">
          <div className="min-w-0">
            <p className="font-semibold text-ink mb-2">Zangi</p>
            <p className="text-mute max-w-xs leading-relaxed">
              Private messenger with encryption, offline mode, and no phone number required.
            </p>
          </div>
          <div className="flex gap-10 sm:gap-12">
            <ul className="space-y-2.5 text-mute">
              <li><Link href="/blog" className="hover:text-ink py-0.5 inline-block">Blog</Link></li>
              <li><Link href="/about-us" className="hover:text-ink py-0.5 inline-block">About</Link></li>
              <li><Link href="/contact-us" className="hover:text-ink py-0.5 inline-block">Contact</Link></li>
            </ul>
            <ul className="space-y-2.5 text-mute">
              <li><Link href="/privacy-policy" className="hover:text-ink py-0.5 inline-block">Privacy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-ink py-0.5 inline-block">Disclaimer</Link></li>
              <li>
                <a href={DOWNLOAD_URL} className="text-brand font-medium hover:underline py-0.5 inline-block">
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-line text-xs text-mute flex flex-col sm:flex-row gap-2 sm:justify-between break-words">
          <p>
            © 2026 {SITE_NAME} ·{' '}
            <Link href="/" className="hover:text-ink">
              {SITE_URL.replace('https://', '')}
            </Link>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ink break-all">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p className="mt-3 text-xs text-mute/80">
          Independent informational site — not affiliated with Zangi.com.
        </p>
      </div>
    </footer>
  );
}
