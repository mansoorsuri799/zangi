import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Privacy Policy – ${SITE_NAME}`,
  description:
    'Privacy Policy for zangiapp.org. Learn how we collect, use, and protect your information when you visit our website about Zangi Private Messenger.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: `Privacy Policy – ${SITE_NAME}`,
    description: 'Our privacy policy outlines what data we collect and how we protect visitor privacy on zangiapp.org.',
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Privacy Policy' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-ink">
            Privacy Policy for Zangi App Private Messenger Website
          </h1>

          <div className="bg-secondary rounded-xl border border-line p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              At zangiapp.org, accessible from{' '}
              <a href={SITE_URL} className="text-brand hover:underline">
                {SITE_URL}
              </a>
              , the privacy of our visitors is of utmost importance. This Privacy Policy outlines the types of
              information we collect and how we use, store, and protect it.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-ink">Personal Information:</strong> We do not collect personal data unless
                  you choose to provide it (e.g., via contact forms).
                </li>
                <li>
                  <strong className="text-ink">Log Data:</strong> Like most websites, we collect information such as
                  your IP address, browser type, date and time of visit, and the pages you visit.
                </li>
                <li>
                  <strong className="text-ink">Cookies:</strong> We use cookies to improve your browsing experience.
                  You can disable them through your browser settings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">2. How We Use Your Information</h2>
              <p className="mb-3">We may use the collected data to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Improve our website content and functionality.</li>
                <li>Respond to your queries or feedback.</li>
                <li>Analyze website traffic using tools like Google Analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">3. Third-Party Sharing</h2>
              <p>
                We do not share your personal information with third parties. However, we may use third-party services
                (like advertising networks or analytics tools) that collect information in aggregate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">4. Data Security</h2>
              <p>
                We use standard security measures to protect your data but cannot guarantee 100% security over the
                internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">5. Children&rsquo;s Privacy</h2>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect personal data from
                minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-3">6. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy occasionally. Changes will be posted here with a revised date.
              </p>
            </section>

            <div className="pt-6 border-t border-line">
              <p>
                If you have questions, contact us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                  {CONTACT_EMAIL}
                </a>{' '}
                or visit our{' '}
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
              { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy-policy` },
            ],
          }),
        }}
      />
    </article>
  );
}
