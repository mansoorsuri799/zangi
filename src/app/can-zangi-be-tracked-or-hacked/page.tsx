import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'can-zangi-be-tracked-or-hacked';
const TITLE = 'Can Zangi Be Tracked or Hacked?';
const DESCRIPTION =
  'Can Zangi be tracked or hacked? Learn how Zangi\'s serverless architecture, multi-layer encryption, and no-data-collection policy make it extremely difficult to track or compromise.';
const DATE = '2025-02-20';

export const metadata: Metadata = {
  title: `${TITLE} – ${SITE_NAME}`,
  description: DESCRIPTION,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/${SLUG}`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    images: [{ url: `${SITE_URL}/zangi-logo.webp`, width: 512, height: 512, alt: `${BRAND} logo` }],
  },
};

export default function CanZangiBeTrackedPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Can Zangi Be Tracked or Hacked?' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              One of the most common questions users ask about privacy-focused apps is whether they can be tracked or
              hacked. For <strong className="text-brand">{BRAND}</strong>, the answer depends on understanding its
              architecture and design choices — which are fundamentally different from most mainstream messaging apps.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Can {BRAND} Be Tracked?</h2>
              <p className="mb-3">
                Tracking on messaging platforms typically works through one of these methods: collecting user metadata,
                storing messages on servers, or linking accounts to phone numbers. {BRAND} eliminates all three:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">No phone number required</strong> – Your real identity is not linked to your account.</li>
                <li><strong className="text-ink">No data stored on servers</strong> – There is no central database to query or subpoena.</li>
                <li><strong className="text-ink">No advertising networks</strong> – Zangi does not collect usage patterns for advertisers.</li>
                <li><strong className="text-ink">No metadata logging</strong> – Zangi minimizes the collection of metadata like timestamps and connection details.</li>
              </ul>
              <p className="mt-3">
                As a result, standard tracking mechanisms that work on other apps are largely ineffective against Zangi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Can {BRAND} Be Hacked?</h2>
              <p className="mb-3">
                No communication tool can claim to be 100% immune to all possible attacks. However, {BRAND} significantly
                reduces the attack surface through several design choices:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">Serverless Architecture</h3>
                  <p>
                    Unlike centralized apps, Zangi uses peer-to-peer technology. There are no central servers holding
                    user data that could be hacked in bulk. Even if a network is compromised, attackers cannot access
                    stored messages because they do not exist on any server.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">Multi-Layer Encryption</h3>
                  <p>
                    With three layers of{' '}
                    <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">
                      military-grade encryption
                    </Link>{' '}
                    — proprietary handshaking, dynamic channel encryption, and end-to-end encryption — intercepted data
                    packets appear as unreadable noise without the correct decryption keys.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-2">One Device – One Account Policy</h3>
                  <p>
                    When you log in from a new device, Zangi creates a fresh messenger with no previous data. This
                    prevents attackers from gaining access to historical conversations even if they compromise a new
                    device login.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">What About Device-Level Threats?</h2>
              <p>
                It is worth noting that if the device itself is compromised — for example, through malware or physical
                access — any app&rsquo;s data could potentially be exposed. This is true for all messaging apps, not
                just Zangi. Using a secure, up-to-date device with a strong password or biometrics significantly reduces
                this risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                {BRAND} is designed from the ground up to resist tracking and hacking. Its serverless architecture,
                multi-layer encryption, no data collection policy, and anonymous registration combine to make it one of
                the most privacy-protective communication apps available. For users who need strong protection against
                surveillance, {BRAND} offers a robust solution.
              </p>
              <p className="mt-3">
                Also read:{' '}
                <Link href="/is-zangi-safe-for-journalists-activists" className="text-brand hover:underline">
                  Is Zangi safe for journalists and activists?
                </Link>
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
            <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">End-to-End Encryption →</Link>
            <Link href="/is-zangi-safe-for-journalists-activists" className="text-brand hover:underline">Safe for Journalists →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Zangi significantly reduces tracking and hacking risks through its serverless architecture, multi-layer encryption, no data collection policy, and anonymous registration without a phone number."
      />
    </article>
  );
}
