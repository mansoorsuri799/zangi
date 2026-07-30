import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StepList from '@/components/StepList';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippet from '@/components/ReviewSnippet';
import { AppStoreButton } from '@/components/DownloadButton';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';

export const metadata: Metadata = {
  title: `Zangi App for iOS – iPhone & iPad Download Guide – ${SITE_NAME}`,
  description:
    'Download and install Zangi Private Messenger on iOS (iPhone & iPad). No phone number required. Works on iOS 13+, iPadOS 13+, with end-to-end encryption and offline messaging.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: `${SITE_URL}/zangi-app-for-ios` },
  openGraph: {
    title: `Zangi App for iOS – iPhone & iPad Download Guide`,
    description:
      'How to install and use Zangi Private Messenger on iPhone or iPad. No SIM required, end-to-end encrypted.',
    url: `${SITE_URL}/zangi-app-for-ios`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    images: [
      { url: `${SITE_URL}/zangi-for-ios.webp`, width: 1200, height: 630, alt: `${BRAND} for iOS` },
    ],
  },
};

const installSteps = [
  {
    title: 'Open the App Store',
    body: 'Open the App Store on your iPhone or iPad and go to the search bar.',
  },
  {
    title: 'Search for Zangi',
    body: 'Type "Zangi Messenger" in the search bar and locate the official app.',
  },
  {
    title: 'Download',
    body: 'Tap Get to download the app. You may need to enter your Apple ID and password.',
  },
  {
    title: 'Launch',
    body: 'Wait for the download to complete, then launch Zangi from your home screen.',
  },
];

const useSteps = [
  { title: 'Open the Zangi app after installation.' },
  { title: 'Enter a unique username — no phone number needed.' },
  { title: 'Set a password and tap Register.' },
  {
    title: 'Search contacts by username, or share your username with friends to connect.',
  },
  { title: 'Start chatting, calling, or sharing files securely.' },
];

export default function ZangiForIOSPage() {
  return (
    <article className="page-shell bg-white">
      <div className="max-w-3xl mx-auto min-w-0 w-full">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Zangi for iOS' },
          ]}
        />

        <section className="page-card mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="order-1 md:order-2 w-full max-w-[140px] sm:max-w-[160px] mx-auto">
              <Image
                src="/zangi-for-ios.webp"
                alt="Zangi for iOS — iPhone and iPad"
                title="Zangi for iOS"
                width={400}
                height={650}
                className="w-full h-auto rounded-2xl border border-line object-contain bg-white"
                sizes="(max-width: 768px) 140px, 160px"
                priority
              />
            </div>
            <div className="order-2 md:order-1 md:flex-1 w-full min-w-0 text-center md:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-ink">
                Zangi App for iOS
              </h1>
              <p className="text-mute leading-relaxed mb-4 text-[15px] sm:text-base">
                Among messaging apps on the App Store,{' '}
                <strong className="text-brand">{BRAND}</strong> stands out for privacy. Encrypted,
                low-data, and smooth on iOS — without a phone number or SIM.
              </p>
              <ReviewSnippet className="justify-center md:justify-start mb-4" />
              <div className="flex justify-center md:justify-start">
                <AppStoreButton />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-10">
            Installation process
          </h2>
          <StepList steps={installSteps} />
        </section>

        <section className="page-card mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-4 sm:mb-5">System requirements</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-mute text-sm">
            {[
              'iOS 13 or above',
              'iPadOS 13 and up',
              'No SIM card required',
              'Internet connection for download',
            ].map((req) => (
              <li key={req} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" aria-hidden />
                {req}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-10">
            How to use {BRAND} on iOS
          </h2>
          <StepList steps={useSteps} compact />
        </section>

        <section className="page-card mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-4 sm:mb-6">
            Why choose {BRAND} on iOS?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Private & safe',
                desc: 'No SIM required. History clears on new device login.',
              },
              {
                title: 'Works on low data',
                desc: 'Send media quickly even on slow connections.',
              },
              {
                title: 'Offline mode',
                desc: 'Message nearby devices when internet is unavailable.',
              },
              {
                title: 'No ads',
                desc: 'Zero ads, zero pop-ups, zero third-party tracking.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="border border-line rounded-lg p-4">
                <h3 className="font-semibold text-brand mb-1">{title}</h3>
                <p className="text-mute text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-3">Conclusion</h2>
          <p className="text-mute leading-relaxed text-[15px] sm:text-base">
            Zangi is free on Android, iOS, and PC, with encryption, HD calls, and offline messaging —
            a complete private messenger for iPhone and iPad.
          </p>
        </section>

        <div className="flex flex-wrap gap-4 text-sm border-t border-line pt-6">
          <Link href="/zangi-for-pc" className="text-brand hover:underline">
            Zangi for PC →
          </Link>
          <Link href="/no-phone-number-messaging-app" className="text-brand hover:underline">
            No phone number messaging →
          </Link>
          <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">
            Security &amp; Privacy →
          </Link>
        </div>
      </div>
    </article>
  );
}
