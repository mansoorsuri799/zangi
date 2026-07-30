import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'is-zangi-safe-for-journalists-activists';
const TITLE = 'Is Zangi Safe for Journalists and Activists?';
const DESCRIPTION =
  'Zangi is safe for journalists, activists, lawyers, and anyone who needs secure, anonymous communication. No phone number, no data storage, military-grade encryption by default.';
const DATE = '2025-02-25';

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

export default function ZangiForJournalistsPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Safe for Journalists & Activists' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              For journalists, activists, human rights workers, lawyers, and whistleblowers, the choice of communication
              tool is not just a matter of convenience — it can be a matter of personal safety. This article examines
              whether <strong className="text-brand">{BRAND}</strong> provides the level of security and anonymity these
              groups need.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Why Secure Communication Matters for High-Risk Users</h2>
              <p>
                Journalists, activists, and similar professionals often handle sensitive sources, unpublished information,
                and communications that could endanger people if exposed. Standard messaging apps that store data on
                servers, link accounts to phone numbers, or collect metadata can inadvertently create a trail of
                evidence that puts users at risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How {BRAND} Protects High-Risk Users</h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Anonymous Registration</h3>
                  <p>
                    Zangi does not require a phone number or SIM card to register. This means your real identity is not
                    linked to your account. A journalist or activist can communicate without revealing their phone number
                    to sources or contacts. Read more about{' '}
                    <Link href="/no-phone-number-messaging-app" className="text-brand hover:underline">
                      messaging without a phone number
                    </Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">No Data Storage on Servers</h3>
                  <p>
                    Zangi stores no messages, call history, or user data on its servers. If Zangi were ever presented
                    with a legal order to hand over user data, there would be nothing to provide. This zero-data policy
                    is a critical protection for those who fear surveillance or legal pressure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Military-Grade Encryption</h3>
                  <p>
                    Three layers of{' '}
                    <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">
                      end-to-end encryption
                    </Link>{' '}
                    protect every message, call, and file. Even if communications were intercepted in transit, they
                    would be unreadable without the decryption keys, which exist only on user devices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">One Device – One Account Policy</h3>
                  <p>
                    When you log in from a new device, Zangi creates a fresh messenger with no previous data. This
                    prevents historical message access even if an adversary gains control of a new device.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Works on Low Bandwidth</h3>
                  <p>
                    Journalists and activists often work in remote areas or regions with internet restrictions. {BRAND}&rsquo;s{' '}
                    <Link href="/how-zangi-uses-less-internet-data" className="text-brand hover:underline">
                      ultra-low data usage
                    </Link>{' '}
                    and ability to operate on 2G/EDGE networks means communication remains possible even in difficult
                    connectivity environments.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Limitations to Be Aware Of</h2>
              <p className="mb-3">
                While {BRAND} offers strong privacy protections, no app can protect against all threat models:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>If the device itself is compromised by malware, any app&rsquo;s content could be exposed.</li>
                <li>Zangi is not open-source, so its encryption implementation has not been publicly audited in the way Signal&rsquo;s has.</li>
                <li>Social engineering attacks (convincing someone to share their credentials) remain outside any app&rsquo;s control.</li>
              </ul>
              <p className="mt-3">
                For maximum security, high-risk users should combine Zangi with device security best practices, strong
                passwords, and biometric locks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                For most practical threat scenarios facing journalists, activists, and privacy-conscious professionals,
                {BRAND} provides a strong level of protection: anonymous accounts, no server-side data, multi-layer
                encryption, and low data usage. It is a credible choice for anyone who needs secure communication
                without leaving a traceable digital footprint.
              </p>
              <p className="mt-3">
                Also read:{' '}
                <Link href="/can-zangi-be-tracked-or-hacked" className="text-brand hover:underline">
                  Can Zangi be tracked or hacked?
                </Link>
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/can-zangi-be-tracked-or-hacked" className="text-brand hover:underline">Can Zangi Be Tracked? →</Link>
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
            <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">End-to-End Encryption →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Zangi provides strong protection for journalists and activists through anonymous registration without a phone number, no data storage on servers, and military-grade end-to-end encryption."
      />
    </article>
  );
}
