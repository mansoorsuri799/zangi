import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Zangi for Business | Secure Enterprise Communication – ${SITE_NAME}`,
  description:
    'Zangi for Business delivers military-grade encrypted, zero-data-trace communication apps for enterprises. White-label solutions, HD calls, VoIP, and on-premises deployment.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_URL}/zangi-for-business` },
  openGraph: {
    title: `Zangi for Business | Secure Enterprise Communication`,
    description: 'Zangi Business Solutions: encrypted messaging, white-label apps, VoIP, and HD calls for enterprises of all sizes.',
    url: `${SITE_URL}/zangi-for-business`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    images: [{ url: `${SITE_URL}/zangi-for-business.webp`, width: 1200, height: 630, alt: `${BRAND} for Business` }],
  },
};

export default function ZangiForBusinessPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Zangi for Business' },
            ]}
          />

          {/* Hero */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="md:w-2/3">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">
                {BRAND} for Business | The Future of Secure Enterprise Communication
              </h1>
              <p className="text-lg text-mute leading-relaxed">
                In today&rsquo;s digital-first world, business communication solutions must go beyond convenience.
                Security, privacy, and reliability are essential. <strong className="text-brand">{BRAND} for Business</strong>{' '}
                redefines how organizations communicate by offering secure, private, and customizable messaging solutions
                that protect sensitive corporate data while keeping teams seamlessly connected.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center w-full max-w-[220px] mx-auto md:mx-0">
              <Image
                src="/zangi-for-business.webp"
                alt="Zangi for Business — enterprise secure communication"
                width={1200}
                height={665}
                className="w-full h-auto rounded-2xl object-contain border border-line"
                sizes="(max-width: 768px) 220px, 300px"
                priority
              />
            </div>
          </div>

          {/* Why Businesses Need Secure Comms */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">Why Businesses Need Secure Communication Platforms</h2>
            <p className="text-mute leading-relaxed mb-4">
              Every organization handles sensitive data: client records, financial information, internal strategies, and
              employee communications. Traditional messaging apps often rely on third-party servers and cloud storage,
              exposing companies to risks of breaches, leaks, and data misuse.
            </p>
            <p className="text-mute leading-relaxed">
              Unlike most business communication apps, {BRAND} is built on the principle of{' '}
              <strong className="text-ink">military-grade encryption combined with zero data collection</strong>. Your
              messages, calls, and files never touch external servers — making {BRAND} one of the most secure business
              communication platforms available.
            </p>
          </div>

          {/* Key Features */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-8">Key Features of {BRAND} for Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'End-to-End Encrypted Communication',
                  desc: 'Every call, message, and file is encrypted from sender to receiver. With no server storage and a zero-trace policy, businesses enjoy absolute confidentiality.',
                },
                {
                  title: 'Turnkey App & Desktop Solutions',
                  desc: 'Get a branded business communication app for mobile and desktop, eliminating reliance on third-party apps.',
                },
                {
                  title: 'White-Label Customization',
                  desc: 'Launch fully customized apps with your branding, design, and features. From internal messaging to social networking platforms.',
                },
                {
                  title: 'Networking & Deskphone Integration',
                  desc: 'Link desk phones to secure communication apps, allowing employees to connect safely from anywhere.',
                },
                {
                  title: 'Seamless Global Connectivity',
                  desc: 'Zangi consumes 6× less mobile data than traditional messengers, ensuring cost-effective communication worldwide on any network.',
                },
                {
                  title: 'HD Audio & Video Calls',
                  desc: 'Advanced codecs deliver HD-quality voice and video calls without interruptions, even with low bandwidth.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-secondary rounded-xl p-5 border border-line">
                  <h3 className="text-lg font-bold text-brand mb-2">{title}</h3>
                  <p className="text-mute text-sm">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-secondary rounded-xl p-5 border border-line">
              <h3 className="text-lg font-bold text-ink mb-3">Business-Class Features Include</h3>
              <ul className="grid grid-cols-2 gap-2 text-mute text-sm">
                {['In/Out VoIP Terminations', 'Virtual/DID Numbers', 'Groups & Supergroups', 'Audio Conferencing', 'Rapid File Transfer', 'Fast, Reliable Messaging'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6">Benefits of {BRAND} Business Solutions</h2>
            <ul className="space-y-4">
              {[
                { title: 'Full Data Ownership', desc: 'With on-premises deployment, businesses control where data is stored and who has access.' },
                { title: 'Operational Cost Savings', desc: 'Reduced data usage and VoIP features help lower telecommunication costs significantly.' },
                { title: 'Future-Proof Technology', desc: 'As remote and hybrid work models expand, Zangi ensures secure connectivity from any location.' },
                { title: 'Enhanced Brand Identity', desc: 'White-label solutions let businesses promote their brand while maintaining secure communication.' },
              ].map(({ title, desc }) => (
                <li key={title} className="flex gap-3">
                  <span className="text-brand font-bold mt-1">→</span>
                  <div>
                    <strong className="text-ink">{title}:</strong>{' '}
                    <span className="text-mute">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Telco Section */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">{BRAND} for Telcos and MVNOs</h2>
            <p className="text-mute leading-relaxed">
              {BRAND} also empowers telecom operators and MVNOs with Telco+ solutions. These enable zero-cost calls for
              users, enhanced customer engagement, and new revenue opportunities. By integrating messenger features into
              telecom services, providers can increase efficiency and deliver more value to customers.
            </p>
          </div>

          {/* Why Choose */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">Why Choose {BRAND} Over Other Business Messaging Apps?</h2>
            <p className="text-mute leading-relaxed mb-4">
              Most business communication tools offer encryption, but many still store metadata or communication logs.
              {BRAND} eliminates this risk by adopting a{' '}
              <strong className="text-ink">zero data collection model</strong>. Businesses that prioritize
              confidentiality, compliance, and security will find Zangi unmatched in its category.
            </p>
            <p className="text-mute leading-relaxed">
              Unlike other platforms, {BRAND} is not just another chat or VoIP app — it is a scalable business
              communication solution built to adapt to the unique needs of enterprises, government bodies, and telecom
              providers.
            </p>
          </div>

          {/* Conclusion + CTA */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-ink mb-4">Conclusion</h2>
            <p className="text-mute leading-relaxed mb-8">
              In an era where corporate espionage, cyberattacks, and data leaks are on the rise, businesses cannot
              afford to compromise on security. {BRAND} for Business provides the ultimate solution: military-grade
              encrypted, zero-data-trace communication apps tailored for enterprises. With HD calling, white-label
              customization, deskphone integration, and ultra-low data usage, {BRAND} ensures organizations remain
              secure, connected, and future-ready.
            </p>
            <DownloadButton label="Download Zangi App" />
          </div>

          {/* Related */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/why-zangi" className="text-brand hover:underline">Why Zangi? →</Link>
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
            <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">End-to-End Encryption →</Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Zangi for Business', item: `${SITE_URL}/zangi-for-business` },
            ],
          }),
        }}
      />
    </article>
  );
}
