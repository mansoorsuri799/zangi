import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'zangi-app-file-sharing-limits-formats';
const TITLE = 'Zangi App File Sharing – Limits & Formats';
const DESCRIPTION =
  'Zangi supports documents, images, videos, audio files, and compressed folders. Files are shared directly without cloud servers, preserving original quality on slow networks.';
const DATE = '2025-02-05';

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

export default function ZangiFileSharingPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'File Sharing Limits & Formats' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              File sharing is an essential feature of modern messaging apps, whether for personal use, education, or
              professional communication. <strong className="text-brand">{BRAND}</strong> offers built-in file sharing
              that focuses on simplicity, privacy, and efficiency — especially for users with limited internet
              connectivity.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Supported File Formats</h2>
              <p className="mb-3">Zangi allows users to share a wide range of file formats directly within chats:</p>
              <ul className="grid grid-cols-2 gap-2">
                {['PDF documents', 'Text files', 'Images (JPG, PNG, etc.)', 'Videos', 'Audio files', 'Compressed folders (ZIP, RAR)'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-brand">✓</span> {f}
                  </li>
                ))}
              </ul>
              <p className="mt-3">
                This flexibility makes the app suitable for everyday communication as well as work-related file exchange.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Direct Transfer Approach</h2>
              <p>
                One of the key advantages of Zangi&rsquo;s file sharing system is its direct transfer approach. Instead
                of uploading files to third-party cloud servers, files are shared directly between users whenever
                possible. This reduces dependency on external storage and lowers the risk of data exposure through server
                breaches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">File Size Limits</h2>
              <p>
                File size limits on Zangi are practical for most use cases. Users can send large media files and
                documents without aggressive compression. Unlike some messaging apps that automatically reduce image or
                video quality, Zangi preserves original file quality unless the user chooses otherwise — especially
                useful when sharing professional documents or high-resolution media.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Performance on Slow Networks</h2>
              <p>
                Zangi optimizes file transfers to work reliably even on slow or unstable networks. Files are transmitted
                in a way that minimizes interruptions, making it easier to send and receive content in regions with
                limited bandwidth. This complements Zangi&rsquo;s overall approach to{' '}
                <Link href="/how-zangi-uses-less-internet-data" className="text-brand hover:underline">
                  low data usage
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Privacy in File Sharing</h2>
              <p>
                Since files are not permanently stored on centralized servers, users maintain greater control over their
                shared content. Once files are received, they remain on the recipient&rsquo;s device rather than being
                accessible through online storage accounts — consistent with{' '}
                <Link href="/zangi-cloud-vs-local-storage-explained" className="text-brand hover:underline">
                  Zangi&rsquo;s local storage approach
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                Overall, Zangi&rsquo;s file sharing feature balances convenience, quality, and privacy. It is
                well-suited for users who want secure and reliable file exchange without relying heavily on cloud-based
                systems.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-cloud-vs-local-storage-explained" className="text-brand hover:underline">Cloud vs Local Storage →</Link>
            <Link href="/zangi-group-chats-broadcast-features" className="text-brand hover:underline">Group Chats & Broadcast →</Link>
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Zangi offers built-in file sharing that focuses on simplicity, privacy, and efficiency. Files are shared directly between users without uploading to third-party cloud servers."
      />
    </article>
  );
}
