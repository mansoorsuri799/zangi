import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'how-zangi-uses-less-internet-data';
const TITLE = 'How Zangi Uses Less Internet Data';
const DESCRIPTION =
  'Zangi uses smart compression, lightweight data packets, and an adaptive transmission system to consume far less internet data than other messaging apps. Ideal for limited plans.';
const DATE = '2025-02-01';

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

export default function HowZangiUsesLessDataPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'How Zangi Uses Less Data' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              <strong className="text-brand">{BRAND}</strong> is specifically designed for users who want to communicate
              without consuming large amounts of mobile data. The app achieves this through a combination of smart
              compression techniques and efficient network management.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Lightweight Data Packets</h2>
              <p>
                Voice and video data are compressed before transmission, reducing the total amount of data sent over the
                network. Unlike many apps that continuously transmit high-resolution streams, Zangi only sends what is
                necessary for smooth communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Adaptive Transmission System</h2>
              <p>
                The app constantly monitors network speed and adjusts data flow in real time. When bandwidth is limited,
                Zangi lowers data usage automatically instead of buffering or disconnecting — keeping your call connected
                and your chat responsive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">No Unnecessary Background Data</h2>
              <p>
                Messages, calls, and files are transmitted directly without syncing excessive metadata to cloud servers.
                This reduces hidden data consumption that many users are unaware of with other messaging apps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Real-World Data Savings</h2>
              <p>
                Because of these optimizations, Zangi is especially useful for users with limited data plans or those
                living in areas with expensive internet costs. You can make up to 7 minutes of high-quality calls using
                just 1 MB of data — and with Low Data Usage mode, you save up to 6× more data compared to popular
                messaging platforms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Who Benefits Most?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Frequent travelers on roaming plans</li>
                <li>Users in regions with expensive or limited mobile data</li>
                <li>People on 2G or weak Wi-Fi connections</li>
                <li>Anyone who wants to reduce their monthly data bill</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                In short, {BRAND} proves that efficient communication does not require heavy data usage. Through smart
                compression, adaptive transmission, and minimal background data, it delivers reliable communication on
                the smallest possible data footprint. Explore{' '}
                <Link href="/zangi-voice-video-call-quality" className="text-brand hover:underline">
                  Zangi voice and video call quality
                </Link>{' '}
                for more on how the app performs on low bandwidth.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-voice-video-call-quality" className="text-brand hover:underline">Call Quality →</Link>
            <Link href="/zangi-vs-whatsapp-telegram-signal-skype-viber" className="text-brand hover:underline">Zangi vs Viber & Others →</Link>
            <Link href="/why-zangi" className="text-brand hover:underline">Why Zangi? →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Zangi is designed for users who want to communicate without consuming large amounts of mobile data through lightweight data packets and an adaptive transmission system."
      />
    </article>
  );
}
