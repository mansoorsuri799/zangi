import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `${BRAND} Blog – Privacy, Security & Messaging Guides – ${SITE_NAME}`,
  description: `In-depth guides and articles about ${BRAND} Private Messenger: security, privacy, call quality, data usage, troubleshooting, and comparisons with other messaging apps.`,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `${BRAND} Blog – Privacy, Security & Messaging Guides`,
    description: `Guides, tips, and in-depth articles about ${BRAND} Private Messenger.`,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
};

const posts = [
  {
    href: '/why-zangi',
    title: 'Why Zangi? Everything You Need to Know About the Private Messenger',
    desc: 'Unmatched security, ultra-low data usage, no phone number required, and 100% free. Here\'s why millions choose Zangi.',
    date: 'January 2025',
    readTime: '10 min read',
    featured: true,
  },
  {
    href: '/no-phone-number-messaging-app',
    title: 'Zangi App – Secure Messaging Without Phone Number or SIM',
    desc: 'How to create a Zangi account anonymously without a phone number or SIM card, and why it is safe.',
    date: 'January 2025',
    readTime: '6 min read',
  },
  {
    href: '/zangi-security-and-privacy',
    title: 'Zangi Security and Privacy – How Zangi Keeps You Safe',
    desc: 'End-to-end encryption by default, zero data collection, and multi-layer military-grade security explained.',
    date: 'January 2025',
    readTime: '8 min read',
  },
  {
    href: '/zangi-voice-video-call-quality',
    title: 'Zangi Voice & Video Call Quality – How It Performs on Low Bandwidth',
    desc: 'Adaptive bitrate, peer-to-peer optimization, and advanced audio compression keep calls clear even on 2G.',
    date: 'January 2025',
    readTime: '5 min read',
  },
  {
    href: '/how-zangi-uses-less-internet-data',
    title: 'How Zangi Uses Less Internet Data',
    desc: 'Smart compression, lightweight packets, and an adaptive transmission system reduce data usage by up to 6×.',
    date: 'February 2025',
    readTime: '5 min read',
  },
  {
    href: '/zangi-app-file-sharing-limits-formats',
    title: 'Zangi App File Sharing – Limits & Formats',
    desc: 'Supported file formats, direct transfer without cloud servers, and performance on slow networks.',
    date: 'February 2025',
    readTime: '5 min read',
  },
  {
    href: '/zangi-group-chats-broadcast-features',
    title: 'Zangi Group Chats & Broadcast Features',
    desc: 'How Zangi group chats and broadcast messaging work — private, efficient, and optimized for slow networks.',
    date: 'February 2025',
    readTime: '5 min read',
  },
  {
    href: '/zangi-cloud-vs-local-storage-explained',
    title: 'Zangi Cloud vs Local Storage Explained',
    desc: 'How Zangi balances local storage and optional cloud use to maximize privacy and minimize data risk.',
    date: 'February 2025',
    readTime: '5 min read',
  },
  {
    href: '/does-zangi-use-end-to-end-encryption',
    title: 'Does Zangi Use End-to-End Encryption?',
    desc: 'Yes — Zangi encrypts all messages, calls, and files end-to-end. Here is how the encryption works.',
    date: 'February 2025',
    readTime: '6 min read',
  },
  {
    href: '/can-zangi-be-tracked-or-hacked',
    title: 'Can Zangi Be Tracked or Hacked?',
    desc: 'Zangi\'s serverless architecture, multi-layer encryption, and no-data-collection policy make tracking extremely difficult.',
    date: 'February 2025',
    readTime: '6 min read',
  },
  {
    href: '/is-zangi-safe-for-journalists-activists',
    title: 'Is Zangi Safe for Journalists and Activists?',
    desc: 'Anonymous accounts, no server-side data, and multi-layer encryption make Zangi a strong choice for high-risk users.',
    date: 'February 2025',
    readTime: '7 min read',
  },
  {
    href: '/zangi-app-not-working-common-problems-how-to-fix-them',
    title: 'Zangi App Not Working? Common Problems & How to Fix Them',
    desc: 'Practical troubleshooting guide for crashes, call failures, notification issues, login errors, and more.',
    date: 'March 2025',
    readTime: '7 min read',
  },
  {
    href: '/zangi-vs-whatsapp-telegram-signal-skype-viber',
    title: 'Zangi vs WhatsApp, Telegram, Signal, Skype & Viber',
    desc: 'In-depth comparison of Zangi against five popular messaging apps across privacy, data usage, call quality, and features.',
    date: 'March 2025',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <div className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-ink">{BRAND} Blog</h1>
          <p className="text-mute mb-10 text-lg">
            In-depth guides, security explainers, and tips for {BRAND} Private Messenger users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(({ href, title, desc, date, readTime, featured }) => (
              <div
                key={href}
                className={`bg-secondary px-4 py-5 sm:px-6 sm:py-6 rounded-lg hover:shadow-lg transition-all border-2 ${
                  featured ? 'border-brand' : 'border-line hover:border-brand'
                }`}
              >
                {featured && (
                  <div className="inline-block bg-brand text-ink text-xs font-bold px-3 py-1 rounded-full mb-3">
                    FEATURED
                  </div>
                )}
                <h2 className="text-xl font-bold mb-3 text-ink leading-snug">{title}</h2>
                <p className="text-mute mb-4 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-2 text-xs text-mute mb-4">
                  <span>{date}</span>
                  <span>•</span>
                  <span>{readTime}</span>
                </div>
                <Link href={href} className="text-brand hover:underline font-semibold text-sm">
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          {/* Explore Pages */}
          <div className="mt-16 bg-white border border-line rounded-xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-ink mb-6">Explore More About {BRAND}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { href: '/zangi-for-pc', label: 'Zangi for PC' },
                { href: '/zangi-app-for-ios', label: 'Zangi for iOS' },
                { href: '/zangi-for-business', label: 'Zangi for Business' },
                { href: '/about-us', label: 'About Us' },
                { href: '/contact-us', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block bg-secondary rounded-xl p-4 text-center text-mute hover:text-brand hover:border-brand border border-line transition-colors text-sm font-medium"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${BRAND} Blog`,
            description: `In-depth guides and articles about ${BRAND} Private Messenger`,
            url: `${SITE_URL}/blog`,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: posts.map(({ href, title }, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: title,
                url: `${SITE_URL}${href}`,
              })),
            },
          }),
        }}
      />
    </div>
  );
}
