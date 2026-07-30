import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import StepList from '@/components/StepList';
import Breadcrumbs from '@/components/Breadcrumbs';
import FaqAccordion from '@/components/FaqAccordion';
import ReviewSnippet from '@/components/ReviewSnippet';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import { imageObjectSchema } from '@/lib/schemaImageLicensing';

export const metadata: Metadata = {
  title: `Zangi for PC & Mac – Download & Install Guide – ${SITE_NAME}`,
  description:
    'Download and install Zangi Private Messenger on PC or Mac using an APK emulator. Step-by-step guide, system requirements, and FAQs for Windows and macOS.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: `${SITE_URL}/zangi-for-pc` },
  openGraph: {
    title: `Zangi for PC & Mac – Download & Install Guide`,
    description:
      'How to install Zangi Private Messenger on Windows or Mac using BlueStacks or LD Player emulator.',
    url: `${SITE_URL}/zangi-for-pc`,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'article',
    images: [
      { url: `${SITE_URL}/zangi-for-pc.webp`, width: 1200, height: 630, alt: `${BRAND} for PC` },
    ],
  },
};

const installSteps = [
  {
    title: 'Check the requirements',
    body: 'Confirm your PC or Mac meets the minimum system requirements before you start.',
  },
  {
    title: 'Download the APK',
    body: 'Click Download Zangi APK. Wait for the file to finish saving to your computer.',
  },
  {
    title: 'Install an emulator',
    body: 'APKs need an Android emulator. Install BlueStacks or LDPlayer from their official site.',
  },
  {
    title: 'Locate the APK',
    body: 'Open the emulator, choose APK install, and select the Zangi file from your Downloads folder.',
  },
  {
    title: 'Install and launch',
    body: 'Allow permissions, confirm install, then open Zangi from the emulator and register or log in.',
  },
];

const useSteps = [
  { title: 'Launch the emulator and open the Zangi app.' },
  {
    title: 'Register with a nickname to get your private number, or log in if you already have an account.',
  },
  {
    title: 'Search contacts by username, or share your nickname so others can find you.',
  },
  {
    title: 'Start chatting, calling, and sharing files with the same privacy features as mobile.',
  },
];

const faqs = [
  {
    q: 'Can I download the Zangi app on PC?',
    a: 'Yes. Download the APK, then install it with an Android emulator such as BlueStacks or LDPlayer on Windows or Mac.',
  },
  {
    q: 'Can I use Zangi on multiple devices without losing data?',
    a: 'Yes. You can log in on Android and PC. For privacy, each new device starts a fresh messenger session by design.',
  },
];

export default function ZangiForPCPage() {
  return (
    <article className="page-shell bg-white">
      <div className="max-w-3xl mx-auto min-w-0 w-full">
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Zangi for PC' },
          ]}
        />

        <section className="page-card mb-10 sm:mb-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <div className="order-1 md:order-2 hero-media">
              <Image
                src="/zangi-for-pc.webp"
                alt="Zangi Private Messenger for PC and Mac — desktop install guide"
                title="Zangi for PC and Mac"
                width={512}
                height={512}
                className="w-full h-auto rounded-full border border-line bg-white"
                sizes="(max-width: 768px) 160px, 200px"
                priority
              />
            </div>
            <div className="order-2 md:order-1 md:flex-1 w-full min-w-0 text-center md:text-left">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-ink">
                Zangi for PC &amp; Mac
              </h1>
              <p className="text-mute leading-relaxed mb-4 text-[15px] sm:text-base">
                The{' '}
                <Link href="/" className="text-brand font-semibold hover:underline">
                  Zangi App
                </Link>{' '}
                is a private messenger with military-grade encryption, no phone number registration,
                and no chat data stored on servers. Run it on Windows or Mac with an APK emulator.
              </p>
              <ReviewSnippet className="justify-center md:justify-start mb-4" />
              <div className="flex justify-center md:justify-start">
                <DownloadButton label="Download Zangi APK" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-ink mb-6 sm:mb-10">
            Download &amp; installation process
          </h2>
          <StepList steps={installSteps} />
        </section>

        <section className="page-card mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-4 sm:mb-5">
            Minimum system requirements
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-mute text-sm">
            {[
              'macOS 12 or later',
              'Windows 7 or above',
              'At least 4 GB RAM',
              'At least 10 GB free disk space',
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
            How to use {BRAND} on PC or Mac
          </h2>
          <StepList steps={useSteps} compact />
        </section>

        <section className="page-card mb-8 sm:mb-10">
          <h2 id="faq" className="text-lg sm:text-xl font-bold text-ink mb-4 sm:mb-6">
            FAQs
          </h2>
          <FaqAccordion items={faqs} />
        </section>

        <section className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-xl font-bold text-ink mb-3">Conclusion</h2>
          <p className="text-mute leading-relaxed mb-6 text-[15px] sm:text-base">
            Zangi is a strong choice for private messaging on desktop. Check the requirements,
            download the APK, install via an emulator, and you are ready in minutes.
          </p>
          <DownloadButton />
        </section>

        <div className="flex flex-wrap gap-4 text-sm border-t border-line pt-6">
          <Link href="/zangi-app-for-ios" className="text-brand hover:underline">
            Zangi for iOS →
          </Link>
          <Link href="/zangi-for-business" className="text-brand hover:underline">
            Zangi for Business →
          </Link>
          <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">
            Security &amp; Privacy →
          </Link>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'HowTo',
                name: 'Install Zangi on PC or Mac',
                description:
                  'Step-by-step guide to download and install Zangi Private Messenger on Windows or Mac using an Android emulator.',
                step: installSteps.map((s, i) => ({
                  '@type': 'HowToStep',
                  position: i + 1,
                  name: s.title,
                  text: s.body,
                })),
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              imageObjectSchema({
                url: '/zangi-for-pc.webp',
                name: 'Zangi for PC and Mac',
                description: 'Zangi Private Messenger desktop install guide image',
                width: 512,
                height: 512,
              }),
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />
    </article>
  );
}
