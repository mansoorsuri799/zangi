import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'why-zangi';
const TITLE = 'Why Zangi? Everything You Need to Know About the Private Messenger';
const DESCRIPTION =
  'Why Zangi? Discover why millions of users and businesses trust Zangi for messaging, voice, and video. Unmatched security, ultra-low data usage, no phone number required, and 100% free.';
const DATE = '2025-01-15';

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

export default function WhyZangiPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Why Zangi' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="flex justify-start mb-8">
            <DownloadButton />
          </div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              In today&rsquo;s digital age, privacy, security, and data efficiency have become essential when choosing a
              communication platform. While many messaging apps claim to provide secure communication, only a few truly
              deliver. That&rsquo;s where <strong className="text-brand">{BRAND} app</strong> stands out.
            </p>
            <p className="text-lg">
              So, why Zangi? Because it offers unmatched security, complete privacy, ultra-low data usage, and reliable
              performance even on the slowest internet connections. Unlike other messengers, {BRAND} refuses to collect or
              store your data, making it one of the safest and most transparent platforms for communication.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">What is {BRAND} APP?</h2>
              <p className="mb-3">
                Zangi is a Silicon Valley-based private communication messenger that operates through two main business
                lines:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">Zangi Free Messenger</strong> – A free, secure, and fast messaging app for personal use.</li>
                <li><strong className="text-ink">Zangi Business Solutions</strong> – A white-label communication platform for companies and service providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Why {BRAND} is Different From Other Messengers</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">You Control Your Conversations</h3>
                  <p>
                    Zangi does not store your personal information, messages, or call history on any servers. Since it has
                    no access to your communications in the first place, there is zero chance of leaks, monitoring, or
                    surveillance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Serverless Architecture</h3>
                  <p>
                    Unlike centralized messengers that depend on servers, Zangi uses peer-to-peer technologies. This
                    decentralized approach means there are no servers that can be hacked, shut down, or forced to share
                    user data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Three Levels of Military-Grade Encryption</h3>
                  <p className="mb-2">Zangi provides robust, multi-layered encryption:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Proprietary handshaking mechanism</li>
                    <li>Dynamic channel encryption</li>
                    <li>End-to-end encryption</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Ultra-Low Data Usage</h3>
                  <p>
                    You can make 7 minutes of high-quality calls using just 1 MB of data. With the Low Data Usage mode,
                    you save up to 6× more data compared to other messengers — ideal for travelers and users on limited
                    plans.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">Works Even on Poor Internet</h3>
                  <p>
                    {BRAND} adapts to all internet speeds, from 2G/EDGE to noisy Wi-Fi and satellite networks. You can
                    enjoy HD-quality audio and video calls even in remote areas with unstable connections.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand mb-2">100% Free – No Ads, No Subscriptions</h3>
                  <p>
                    The app is completely free with no ads and no hidden costs. You will never be interrupted by
                    advertisements, and there are no subscription fees.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Who is {BRAND} For?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-ink">Travelers on a budget</strong> – Save money on roaming with free calls over Wi-Fi and low data usage.</li>
                <li><strong className="text-ink">Journalists, activists, lawyers</strong> – Share sensitive files and conduct private calls with complete peace of mind.</li>
                <li><strong className="text-ink">Privacy-conscious users</strong> – Protect your data from tracking, profiling, or selling.</li>
                <li><strong className="text-ink">Everyday users</strong> – High-quality group chats, calls, and videos with family, friends, or colleagues.</li>
                <li><strong className="text-ink">Businesses and communities</strong> – Build your own branded communication platform with enterprise-grade security.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How Secure is {BRAND}?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption ensures only you and your recipient can access your data.</li>
                <li>No servers means your information cannot be hacked or handed over.</li>
                <li>No backdoors – {BRAND} does not compromise encryption for surveillance.</li>
                <li>No profiling – {BRAND} never sells or shares analytics or usage data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Why {BRAND} for Businesses?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Self-Hosted Team Communication App</li>
                <li>Messenger for Business Phone Systems</li>
                <li>MVNO Messenger Solutions</li>
                <li>Create Your Own Messenger with {BRAND}&rsquo;s ready-made infrastructure</li>
              </ul>
              <p className="mt-3">
                Learn more on the{' '}
                <Link href="/zangi-for-business" className="text-brand hover:underline">
                  Zangi for Business
                </Link>{' '}
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How {BRAND} Saves You Money</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Low data consumption while traveling or on limited plans</li>
                <li>No ads — ad-free by default</li>
                <li>No subscription fees — free forever</li>
                <li>Optional Zangi-Out Calls to non-Zangi users at low rates (iOS only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                Why Zangi over other messaging apps? Because it offers a unique combination of top-notch security, true
                privacy, ultra-low data usage, global accessibility, and enterprise-level flexibility. Unlike WhatsApp,
                Telegram, or other popular messengers, {BRAND} refuses to compromise your privacy or turn your data into
                a business model.
              </p>
              <p className="mt-4">
                Compare {BRAND} with other apps on our{' '}
                <Link href="/zangi-vs-whatsapp-telegram-signal-skype-viber" className="text-brand hover:underline">
                  Zangi vs WhatsApp, Telegram, Signal, Skype & Viber
                </Link>{' '}
                comparison.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          {/* Related */}
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Zangi Security & Privacy →</Link>
            <Link href="/no-phone-number-messaging-app" className="text-brand hover:underline">No Phone Number Messaging →</Link>
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
        articleBody="Zangi app stands out because it offers unmatched security, complete privacy, ultra-low data usage, and reliable performance even on the slowest internet connections. Unlike other messengers, Zangi refuses to collect or store your data."
      />
    </article>
  );
}
