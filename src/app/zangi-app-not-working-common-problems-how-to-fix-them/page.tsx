import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'zangi-app-not-working-common-problems-how-to-fix-them';
const TITLE = 'Zangi App Not Working? Common Problems & How to Fix Them';
const DESCRIPTION =
  'If Zangi is not working, crashing, or failing to connect calls, this guide covers common problems and practical fixes: network issues, notification settings, login errors, and more.';
const DATE = '2025-03-01';

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

export default function ZangiTroubleshootingPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'Zangi Not Working – Fix Guide' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8"><DownloadButton /></div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <p className="text-lg">
              Messaging apps are expected to work smoothly, but like any digital platform, users may occasionally face
              technical issues. If you are experiencing problems with the <strong className="text-brand">{BRAND} app</strong>{' '}
              — such as calls not connecting, messages not sending, or notifications not appearing — this guide explains
              the most common causes and practical solutions.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">{BRAND} App Not Opening or Crashing</h2>
              <p className="mb-3">If the app is not opening, freezing, or crashing, the issue is often related to device performance or network connectivity.</p>
              <p className="font-semibold text-ink mb-2">Common causes:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Poor or unstable internet connection</li>
                <li>Outdated app version</li>
                <li>Device storage or memory limitations</li>
                <li>Temporary system glitches</li>
              </ul>
              <p className="font-semibold text-ink mb-2">How to fix:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Restart your device to clear temporary system issues</li>
                <li>Check your internet connection (Wi-Fi or mobile data)</li>
                <li>Update the app to the latest version</li>
                <li>Clear app cache from device settings</li>
                <li>Ensure your device has enough free storage</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">{BRAND} Calls Not Connecting</h2>
              <p className="mb-3">Call connection issues are usually linked to network quality rather than the app itself.</p>
              <p className="font-semibold text-ink mb-2">Possible reasons:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Weak or unstable internet signal</li>
                <li>Background apps consuming bandwidth</li>
                <li>Firewall or network restrictions</li>
              </ul>
              <p className="font-semibold text-ink mb-2">Solutions:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Switch between Wi-Fi and mobile data</li>
                <li>Move to an area with stronger signal</li>
                <li>Close background apps using internet</li>
                <li>Disable VPN temporarily and try again</li>
              </ol>
              <p className="mt-3 text-sm">
                Note: Zangi is optimized for{' '}
                <Link href="/how-zangi-uses-less-internet-data" className="text-brand hover:underline">
                  low bandwidth
                </Link>
                , but extremely unstable networks can still affect call setup.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">{BRAND} Notifications Not Showing</h2>
              <p className="mb-3">Missing notifications can cause users to think the app is not working, even when messages are being delivered.</p>
              <p className="font-semibold text-ink mb-2">Common causes:</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>Notification permissions disabled</li>
                <li>Battery optimization restrictions</li>
                <li>Background app refresh disabled</li>
              </ul>
              <p className="font-semibold text-ink mb-2">Fix steps:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enable notifications in device settings</li>
                <li>Turn off battery optimization for Zangi</li>
                <li>Allow background data usage</li>
                <li>Check &quot;Do Not Disturb&quot; mode</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Login Issues &amp; Fixes</h2>
              <p className="mb-3">Login problems can occur during first-time setup or when switching devices.</p>
              <p className="font-semibold text-ink mb-2">What to do:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Double-check your username and password</li>
                <li>Ensure a stable internet connection during login</li>
                <li>Restart the app and try again</li>
                <li>Wait a few minutes before retrying (avoid repeated attempts)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Messages Not Sending</h2>
              <p className="mb-3">If messages are stuck or fail to deliver, connectivity or background restrictions are the usual cause.</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Refresh your internet connection</li>
                <li>Keep the app open until the message is sent</li>
                <li>Disable data-saving mode for Zangi</li>
                <li>Restart the app and resend the message</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">When to Reinstall the App</h2>
              <p>
                If none of the above solutions work, reinstalling Zangi can resolve corrupted files or incomplete updates.
                Before reinstalling, make sure you remember your login credentials and backup any important data.
                Reinstallation should only be used as a last step.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Final Thoughts</h2>
              <p>
                Most {BRAND} app issues are temporary and can be fixed with basic troubleshooting. Network quality,
                device settings, and permissions play a major role in app performance. By following the steps above,
                users can quickly resolve common problems and restore smooth communication.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/why-zangi" className="text-brand hover:underline">Why Zangi? →</Link>
            <Link href="/zangi-for-pc" className="text-brand hover:underline">Zangi for PC →</Link>
            <Link href="/zangi-app-for-ios" className="text-brand hover:underline">Zangi for iOS →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        articleBody="Common Zangi app issues include crashes, call connection failures, missing notifications, and login errors. Most can be fixed by restarting the device, checking internet connectivity, and updating the app."
      />
    </article>
  );
}
