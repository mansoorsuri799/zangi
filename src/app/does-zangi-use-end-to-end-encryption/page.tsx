import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'does-zangi-use-end-to-end-encryption';
const TITLE = 'Does Zangi Use End-to-End Encryption?';
const DESCRIPTION =
  'Yes — Zangi uses end-to-end encryption for all messages, voice calls, video calls, and shared files. Learn how Zangi encryption keys work and why it offers stronger privacy than many alternatives.';
const DATE = '2025-02-15';

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

export default function ZangiE2EEncryptionPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'End-to-End Encryption' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              End-to-end encryption has become a key feature for modern messaging applications, especially for users who
              value privacy and secure communication. This naturally raises an important question:{' '}
              <strong className="text-ink">does Zangi use end-to-end encryption, and how secure is it?</strong>
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Yes — {BRAND} Uses End-to-End Encryption</h2>
              <p>
                {BRAND} employs strong encryption technologies to protect user communications. End-to-end encryption
                (E2EE) means that messages, voice calls, and video calls are encrypted on the sender&rsquo;s device and
                can only be decrypted by the intended recipient. No third party — including servers or service providers
                — can read or listen to the content while it is in transit.
              </p>
              <p className="mt-3">
                In Zangi&rsquo;s case, encryption is applied to messaging, file sharing, voice calls, and video
                conversations — ensuring all communications remain private between users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How Encryption Keys Are Managed</h2>
              <p>
                Encryption keys are generated and stored securely on user devices rather than being permanently stored on
                centralized servers. This reduces the chances of mass data exposure through server breaches. Even if a
                server were compromised, intercepted data packets would appear unreadable without the correct decryption
                keys.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Reduced Reliance on Cloud Storage</h2>
              <p>
                Many messaging apps store encrypted data on cloud servers, which can still pose risks if metadata or
                backups are compromised. Zangi focuses more on direct device-to-device communication and local storage,
                limiting the amount of sensitive information stored remotely. Learn more in our{' '}
                <Link href="/zangi-cloud-vs-local-storage-explained" className="text-brand hover:underline">
                  cloud vs local storage comparison
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Content Encryption vs Metadata</h2>
              <p>
                While end-to-end encryption secures message content, metadata such as timestamps, connection details, or
                device information can still exist in some form with some apps. Zangi aims to minimize metadata
                collection by avoiding advertising networks and unnecessary data tracking, which further enhances user
                privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Three Layers of {BRAND} Encryption</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">Proprietary handshaking mechanism</strong> – Verifies both users before communication begins.</li>
                <li><strong className="text-ink">Dynamic channel encryption</strong> – Channels are constantly refreshed to prevent interception.</li>
                <li><strong className="text-ink">End-to-end encryption</strong> – Only sender and receiver can read or hear the communication.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Who Benefits Most?</h2>
              <p>
                For users engaging in sensitive conversations — business discussions, personal matters, or confidential
                coordination — this level of encryption provides strong reassurance. End-to-end encryption ensures that
                conversations remain private even on public or insecure networks. Read our full article on{' '}
                <Link href="/is-zangi-safe-for-journalists-activists" className="text-brand hover:underline">
                  whether Zangi is safe for journalists and activists
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                Yes, {BRAND} uses end-to-end encryption by default. Combined with local storage prioritization and
                minimal metadata collection, Zangi offers a strong privacy-focused communication solution that goes
                beyond basic encryption. For users who need reliable and trustworthy encrypted communication, Zangi
                provides a balanced and security-conscious choice.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
            <Link href="/can-zangi-be-tracked-or-hacked" className="text-brand hover:underline">Can Zangi Be Tracked? →</Link>
            <Link href="/zangi-vs-whatsapp-telegram-signal-skype-viber" className="text-brand hover:underline">Zangi vs Signal & Others →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Zangi employs strong end-to-end encryption technologies to protect user communications. Messages, voice calls, video calls, and shared files are encrypted on the sender's device and can only be decrypted by the intended recipient."
      />
    </article>
  );
}
