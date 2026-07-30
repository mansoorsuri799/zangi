import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqAccordion from '@/components/FaqAccordion';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'zangi-security-and-privacy';
const TITLE = 'Zangi Security and Privacy – How Zangi Keeps You Safe';
const DESCRIPTION =
  'Everything about Zangi security and privacy: end-to-end encryption, zero data collection, no phone number required, and multi-layered military-grade encryption for unbreakable digital safety.';
const DATE = '2025-01-22';

const faqs = [
  {
    q: 'Is Zangi safer than WhatsApp?',
    a: 'Yes. Unlike WhatsApp, Zangi does not store messages or personal data on servers. With its serverless system and multi-layered encryption, Zangi offers stronger privacy protection.',
  },
  {
    q: 'Does Zangi work without a phone number?',
    a: 'Absolutely. Zangi does not require phone number verification. It assigns you a private number upon registration.',
  },
  {
    q: 'Does Zangi collect or sell user data?',
    a: "No. Zangi follows a strict no-data-collection policy. Nothing is stored on Zangi's servers.",
  },
];

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

export default function ZangiSecurityPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Zangi Security & Privacy' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              When it comes to secure communication, <strong className="text-brand">{BRAND} security and privacy</strong>{' '}
              features make it one of the safest messaging apps in the world. Unlike many apps that store user data on
              servers, Zangi ensures that your private information never leaves your device. With military-grade
              encryption, no phone number requirement, and a strict no-data-collection policy, Zangi is designed for
              people who value complete digital privacy.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">1. End-to-End Encryption by Default</h2>
              <p className="mb-3">
                Unlike apps that require users to manually enable security features, Zangi has end-to-end encryption
                active by default.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">How it works:</strong> All encryption and decryption happen directly on your device.</li>
                <li><strong className="text-ink">What it means:</strong> No third party — including Zangi itself — can access your calls or messages.</li>
                <li><strong className="text-ink">The benefit:</strong> Your personal and professional conversations remain completely private.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">2. One Device – One Zangi Account</h2>
              <p>
                To enhance security, the app follows a one-device–one-account principle. When you log in from another
                device, Zangi creates a brand-new messenger with no messages, call history, or previous data transferred.
                This prevents hacking attempts, account takeovers, and unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">3. No Phone Number Requirement</h2>
              <p>
                Most messaging apps ask you to register with your personal phone number, which can lead to identity theft,
                tracking, and privacy violations. With Zangi, phone number verification is not required. Instead, Zangi
                assigns you a private number during registration, keeping your identity hidden from marketers and hackers
                alike.
              </p>
              <p className="mt-3">
                Read more about{' '}
                <Link href="/no-phone-number-messaging-app" className="text-brand hover:underline">
                  messaging without a phone number on Zangi
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">4. Multi-Layered Encryption Technology</h2>
              <p className="mb-3">Zangi uses three levels of military-grade security:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">Encrypted proprietary handshaking mechanism:</strong> Ensures both users are verified before communication begins.</li>
                <li><strong className="text-ink">Dynamic channel encryption:</strong> Channels are constantly encrypted and refreshed to prevent hacking.</li>
                <li><strong className="text-ink">End-to-end encryption:</strong> Only the sender and receiver can read or hear the messages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">5. No Data Collection – Ever</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">No collection</strong> – Zangi does not collect your personal data.</li>
                <li><strong className="text-ink">No storage</strong> – Nothing is stored on Zangi&rsquo;s servers; everything stays on your device.</li>
                <li><strong className="text-ink">No selling</strong> – Since Zangi doesn&rsquo;t have your data, there is nothing to sell.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">6. Your Privacy is Uninvadable</h2>
              <p>
                By combining strong encryption, zero data storage, and no personal number requirement, {BRAND} security
                ensures that no one — not even Zangi — can invade your digital life. Whether you are an individual, a
                business professional, or an activist, Zangi provides an unbreakable layer of communication security.
              </p>
            </section>

            <section>
              <h2 id="faq" className="text-2xl font-bold text-ink mb-4">
                FAQs
              </h2>
              <FaqAccordion items={faqs} />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                With default end-to-end encryption, no data collection, and strict privacy standards, {BRAND} gives you
                the safest communication platform without sacrificing ease of use. If you care about your online privacy
                and want your conversations to remain truly yours, {BRAND} is the messenger built for you.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">End-to-End Encryption →</Link>
            <Link href="/can-zangi-be-tracked-or-hacked" className="text-brand hover:underline">Can Zangi Be Tracked? →</Link>
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
        faqs={faqs}
        articleBody="Zangi security and privacy features make it one of the safest messaging apps in the world. Zangi ensures that your private information never leaves your device with military-grade encryption and no data collection."
      />
    </article>
  );
}
