import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'zangi-cloud-vs-local-storage-explained';
const TITLE = 'Zangi Cloud vs Local Storage Explained';
const DESCRIPTION =
  'Zangi primarily uses local storage to keep your data on your device, reducing cloud dependency and privacy risks. Understand the trade-offs and how Zangi balances both approaches.';
const DATE = '2025-02-12';

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

export default function ZangiStoragePage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Cloud vs Local Storage' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              Data storage plays a major role in how secure and private a messaging app is. Many platforms rely heavily
              on cloud storage to sync messages and media across devices. <strong className="text-brand">{BRAND}</strong>{' '}
              takes a different approach by giving users more control through a balance of local storage and limited
              cloud usage.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">What is Local Storage?</h2>
              <p>
                Local storage means that messages, media files, and shared documents are stored directly on the user&rsquo;s
                device. This reduces reliance on external servers and minimizes the risk of centralized data breaches.
                For privacy-focused users, local storage provides greater control over personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How {BRAND} Uses Local Storage</h2>
              <p>
                Zangi primarily uses local storage to keep user data close to the device. This design ensures that
                messages are not permanently stored on remote servers. As a result, even if a server were compromised,
                the amount of exposed user data would be minimal — a key part of{' '}
                <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">
                  Zangi&rsquo;s security approach
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Cloud Functionality in {BRAND}</h2>
              <p>
                Cloud functionality, when available, is optional and mainly focused on basic synchronization or backup
                needs. Unlike apps that automatically upload all content to the cloud, Zangi avoids excessive cloud
                dependency. This approach reduces long-term data retention and lowers privacy risks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Trade-Offs to Consider</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary rounded-xl p-5 border border-line">
                  <h3 className="text-lg font-bold text-brand mb-3">Local Storage</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-green-400">+</span> Stronger privacy and data control</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> No central server risk</li>
                    <li className="flex gap-2"><span className="text-yellow-400">–</span> Manual backup required</li>
                    <li className="flex gap-2"><span className="text-yellow-400">–</span> Data lost if device is lost (without backup)</li>
                  </ul>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-line">
                  <h3 className="text-lg font-bold text-brand mb-3">Cloud Storage</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2"><span className="text-green-400">+</span> Easy access across multiple devices</li>
                    <li className="flex gap-2"><span className="text-green-400">+</span> Automatic backup and recovery</li>
                    <li className="flex gap-2"><span className="text-yellow-400">–</span> Data stored on third-party servers</li>
                    <li className="flex gap-2"><span className="text-yellow-400">–</span> Higher privacy risk if server is breached</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                Zangi&rsquo;s storage model emphasizes user control and data minimization. By reducing cloud reliance
                and prioritizing local storage, the app offers a privacy-conscious alternative to traditional
                cloud-heavy messaging platforms. Those who prioritize privacy can rely mostly on local storage, while
                optional limited cloud features remain available for convenience.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
            <Link href="/zangi-app-file-sharing-limits-formats" className="text-brand hover:underline">File Sharing →</Link>
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
        articleBody="Zangi primarily uses local storage to keep user data on the device, reducing cloud dependency and minimizing the risk of centralized data breaches."
      />
    </article>
  );
}
