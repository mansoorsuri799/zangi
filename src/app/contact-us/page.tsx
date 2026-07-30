import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, BRAND, CONTACT_EMAIL } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Contact Us – ${SITE_NAME}`,
  description:
    'Get in touch with the zangiapp.org team. Send your questions, suggestions, or concerns via email and we will respond within 24–48 hours.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    title: `Contact Us – ${SITE_NAME}`,
    description: 'Reach the zangiapp.org team with any questions about Zangi Private Messenger content.',
    url: `${SITE_URL}/contact-us`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Contact Us' },
            ]}
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">Contact Us</h1>
            <p className="text-lg text-mute">We&rsquo;re here to help!</p>
          </div>

          {/* Main Content */}
          <div className="bg-secondary rounded-xl border border-line p-4 sm:p-6 md:p-8 mb-8">
            <p className="text-lg text-mute leading-relaxed mb-8">
              If you have any questions, suggestions, or concerns regarding the content or policies of our website, feel
              free to contact us. We typically respond within 24–48 hours.
            </p>

            {/* Email Card */}
            <div className="bg-secondary rounded-xl p-6 md:p-8 border-2 border-[#0ea5e9] text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <svg
                  aria-hidden="true"
                  className="w-14 h-14 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-ink">Email Us</h2>
              <p className="text-mute mb-6">Send us your questions or content suggestions via email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label={`Send email to ${BRAND} support`}
                className="cta-btn break-all"
              >
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ink">App Information</h3>
              <p className="text-mute text-sm mb-4">Learn about {BRAND} features and download</p>
              <Link href="/" className="text-brand hover:underline font-semibold text-sm">Learn More →</Link>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ink">Privacy Policy</h3>
              <p className="text-mute text-sm mb-4">Read our data and privacy policy</p>
              <Link href="/privacy-policy" className="text-brand hover:underline font-semibold text-sm">Read Policy →</Link>
            </div>

            <div className="bg-secondary rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-ink">About Us</h3>
              <p className="text-mute text-sm mb-4">Learn more about zangiapp.org</p>
              <Link href="/about-us" className="text-brand hover:underline font-semibold text-sm">About Us →</Link>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              contactPoint: {
                '@type': 'ContactPoint',
                email: CONTACT_EMAIL,
                contactType: 'Customer Support',
                availableLanguage: ['English'],
              },
            },
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
              { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${SITE_URL}/contact-us` },
            ],
          }),
        }}
      />
    </div>
  );
}
