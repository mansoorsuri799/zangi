import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Disclaimer – ${SITE_NAME}`,
  description:
    'Disclaimer for zangiapp.org. The information on this site is for general informational and educational purposes only. We are not affiliated with Zangi.com.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  openGraph: {
    title: `Disclaimer – ${SITE_NAME}`,
    description: 'Read the disclaimer for zangiapp.org regarding accuracy, affiliation, and use of information.',
    url: `${SITE_URL}/disclaimer`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function DisclaimerPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Disclaimer' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-ink">
            Disclaimer for Zangi App Private Messenger Website
          </h1>

          <div className="bg-secondary rounded-xl border border-line p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              The information provided on{' '}
              <a href={SITE_URL} className="text-brand hover:underline">
                {SITE_URL}
              </a>{' '}
              is for general informational and educational purposes only. While we strive to keep the content accurate and
              up to date, we make no guarantees of any kind—express or implied—about the completeness, accuracy,
              reliability, or availability of the content.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">1. App Affiliation</h2>
              <p>
                We are not affiliated, associated, authorized, or endorsed by Zangi.com or its developers. All trademarks
                and names belong to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">2. Use at Your Own Risk</h2>
              <p>
                Any action you take based on the information you find on this website is strictly at your own risk. We will
                not be liable for any losses or damages in connection with the use of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">3. External Links</h2>
              <p>
                Our website may contain links to external websites. We do not have control over the content or availability
                of these sites and are not responsible for any information or services they offer.
              </p>
            </section>

            <div className="pt-6 border-t border-line">
              <p className="text-sm text-gray-500">
                If you have questions, visit our{' '}
                <Link href="/contact-us" className="text-brand hover:underline">
                  Contact Us
                </Link>{' '}
                page.
              </p>
            </div>
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
              { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: `${SITE_URL}/disclaimer` },
            ],
          }),
        }}
      />
    </article>
  );
}
