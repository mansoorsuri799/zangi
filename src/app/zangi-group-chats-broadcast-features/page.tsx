import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'zangi-group-chats-broadcast-features';
const TITLE = 'Zangi Group Chats & Broadcast Features';
const DESCRIPTION =
  'Zangi group chats and broadcast features enable private, efficient communication for families, teams, and communities — even on slow networks, with no data logging.';
const DATE = '2025-02-08';

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

export default function ZangiGroupChatsPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Group Chats & Broadcast' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              Group communication is an important part of messaging platforms, enabling users to stay connected with
              families, teams, and communities. <strong className="text-brand">{BRAND}</strong> offers both group chat
              and broadcast features designed to support efficient communication while maintaining privacy and low data
              usage.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Group Chats</h2>
              <p className="mb-3">
                Zangi group chats allow multiple users to communicate within a single conversation. Participants can
                exchange text messages, media, and files just as they would in one-on-one chats. Group chats are
                optimized to work smoothly even on slower networks, ensuring messages are delivered reliably without
                excessive data consumption.
              </p>
              <p>
                The interface is designed to avoid unnecessary distractions, making it easy to follow conversations.
                Users have control over group participation and can manage notifications according to their preferences,
                which helps prevent information overload.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Broadcast Features</h2>
              <p className="mb-3">
                Broadcast features serve a different purpose from group chats. Unlike group chats, broadcasts allow
                one-way communication from a sender to multiple recipients. Recipients receive the message individually
                and cannot see or interact with each other.
              </p>
              <p>This is useful for:</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Announcements and updates from organizations</li>
                <li>Information sharing by educators or community leaders</li>
                <li>Business communications without creating group discussions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Privacy in Group & Broadcast Messaging</h2>
              <p>
                From a privacy perspective, broadcast messaging offers additional protection. Since recipients are not
                visible to one another, personal contact details remain private. This is particularly suitable for
                organizations and educators who need to share information without exposing user identities.
              </p>
              <p className="mt-3">
                Zangi also applies its secure communication standards to both group and broadcast messages. Content is
                protected during transmission, and unnecessary data logging is avoided — consistent with{' '}
                <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">
                  Zangi&rsquo;s overall privacy philosophy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                Zangi&rsquo;s group chats and broadcast features provide flexible communication options for different
                needs, combining usability, privacy, and reliability — all without excessive data usage.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-app-file-sharing-limits-formats" className="text-brand hover:underline">File Sharing →</Link>
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Security & Privacy →</Link>
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
        articleBody="Zangi offers both group chat and broadcast features designed to support efficient communication while maintaining privacy and low data usage for families, teams, and communities."
      />
    </article>
  );
}
