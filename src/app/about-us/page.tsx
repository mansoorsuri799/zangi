import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import DownloadButton from '@/components/DownloadButton';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `About Us – ${SITE_NAME}`,
  description:
    'Welcome to zangiapp.org, your trusted source for everything related to Zangi Private Messenger. We provide accurate, up-to-date information about Zangi features, installation, and usage tips.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: `About Us – ${SITE_NAME}`,
    description:
      'Your trusted source for everything about Zangi Private Messenger: features, privacy, installation guides, and more.',
    url: `${SITE_URL}/about-us`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{ url: `${SITE_URL}/zangi-logo.webp`, width: 512, height: 512, alt: `${BRAND} logo` }],
  },
};

export default function AboutPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'About Us' },
            ]}
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">About Us</h1>
          </div>

          {/* Main Content */}
          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center">
                <Link href="/">
                  <div className="relative w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-2xl overflow-hidden bg-secondary flex items-center justify-center mx-auto">
                    <Image
                      src="/zangi-logo.webp"
                      alt={`${BRAND} Private Messenger logo`}
                      width={280}
                      height={280}
                      className="object-contain p-4 sm:p-6 w-full h-auto"
                      sizes="(max-width: 640px) 160px, 240px"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-mute leading-relaxed mb-6">
                    Welcome to <strong className="text-brand">zangiapp.org</strong>, your trusted source for everything
                    related to the{' '}
                    <Link href="/" className="text-brand hover:underline font-semibold">
                      Zangi App Private Messenger
                    </Link>
                    !
                  </p>
                  <p className="text-lg text-mute leading-relaxed mb-6">
                    We aim to provide accurate, detailed, and up-to-date information about Zangi Messenger&rsquo;s
                    features, performance, installation process, and usage tips. Our content is created with the user in
                    mind, whether you&rsquo;re a privacy-conscious individual, a frequent traveler, or someone living in
                    a region with limited internet access.
                  </p>
                  <p className="text-lg text-mute leading-relaxed">
                    We are not affiliated with Zangi.com, but we are passionate about technology and secure
                    communication apps. Our goal is to help you explore apps like Zangi that offer freedom, privacy, and
                    quality performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <DownloadButton />
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl border border-line p-4 sm:p-6 md:p-8 mb-12">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-ink text-center">Our Mission</h2>
            <p className="text-lg text-ink leading-relaxed text-center">
              Our mission is to give every user clear, honest, and actionable information about{' '}
              <strong>{BRAND}</strong> so they can communicate privately and securely. If you have any questions or
              content suggestions, visit our{' '}
              <Link href="/contact-us" className="underline hover:text-yellow-100 font-semibold">
                Contact Us
              </Link>{' '}
              page.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { href: '/zangi-for-pc', title: 'Zangi for PC', desc: 'Install Zangi on Windows or Mac using an emulator.' },
              { href: '/zangi-app-for-ios', title: 'Zangi for iOS', desc: 'Get Zangi on iPhone or iPad from the App Store.' },
              { href: '/zangi-for-business', title: 'Zangi for Business', desc: 'Enterprise-grade encrypted communication solutions.' },
            ].map(({ href, title, desc }) => (
              <div key={href} className="bg-secondary rounded-xl p-6 text-center border border-line hover:border-brand transition-colors">
                <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
                <p className="text-mute text-sm mb-4">{desc}</p>
                <Link href={href} className="text-brand hover:underline font-semibold text-sm">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-xl border border-line p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-ink">Have Questions?</h2>
            <p className="text-mute mb-6 text-lg">
              We&rsquo;re here to help! Reach out with any questions or content suggestions.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/zangi-logo.webp`,
              description:
                'zangiapp.org is an independent information site about Zangi Private Messenger — covering features, privacy, installation guides, and more.',
            },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/about-us` },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'About Us', item: `${SITE_URL}/about-us` },
            ],
          }),
        }}
      />
    </article>
  );
}
