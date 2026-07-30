import { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import FaqAccordion from '@/components/FaqAccordion';
import { SITE_URL, SITE_NAME, BRAND } from '@/lib/site';
import Breadcrumbs from '@/components/Breadcrumbs';

const SLUG = 'no-phone-number-messaging-app';
const TITLE = 'Zangi App – Secure Messaging Without Phone Number or SIM';
const DESCRIPTION =
  'Zangi App is a secure messaging app with military-level encryption that allows anonymous messaging without a phone number or SIM card. Learn how to create an account and why it is safe.';
const DATE = '2025-01-20';

const faqs = [
  {
    q: 'Will people see my real number on the Zangi app?',
    a: 'No. People will not be able to see your real number. Your identity is anonymous and protected.',
  },
  {
    q: 'How can I back up my data on the Zangi App?',
    a: 'You can link your email during registration to back up and recover your data.',
  },
  {
    q: 'How can I add contacts on the Zangi app?',
    a: 'Search usernames directly in the app or share your username with others to add and connect.',
  },
];

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

export default function NoPhoneNumberPage() {
  return (
    <article className="page-shell">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: 'No Phone Number Messaging' },
            ]}
          />

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-ink">{TITLE}</h1>
          <div className="mb-8">
            <DownloadButton />
          </div>

          <div className="bg-white border border-line rounded-lg p-4 sm:p-6 md:p-8 space-y-8 text-mute leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Overview</h2>
              <p className="text-lg">
                If you are looking for a secure messaging app, <strong className="text-brand">{BRAND} App</strong> is
                perfect for you. It is a messaging application with military-level encryption and high security measures.
                It allows anonymous messaging since it does not require your phone number for registration. It has a
                strict policy that your data will not be saved on its servers, and third-party users cannot access it.
              </p>
              <p className="mt-3">
                The benefit of messaging without a phone number is that you have full privacy and security. You will not
                get any spam or unknown calls. This distinct and innovative feature has attracted millions of users
                worldwide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">{BRAND} No Phone Number Feature</h2>
              <p>
                One of the best features of the Zangi app is that it does not require a phone number for registration.
                Once you download it on your device, you start the registration process without a SIM or phone number.
                During registration, it assigns you a <strong className="text-ink">private number</strong>. You set a
                nickname and optionally add a recovery email to protect your data. This setup means no spam calls, and
                your identity remains completely anonymous.
              </p>
              <p className="mt-3">
                Since no SIM card is required, it is perfect for those who want to use a messaging app on PC, Mac, or
                tablet. See our guide on{' '}
                <Link href="/zangi-for-pc" className="text-brand hover:underline">
                  Zangi for PC
                </Link>{' '}
                for installation steps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">How to Create an Account on {BRAND} Without a Phone Number</h2>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Download the app on your device (Android, PC, Mac, or any supported device).</li>
                <li>Tap <strong className="text-ink">Register</strong> — no phone number field to fill in.</li>
                <li>Enter a unique nickname of your choice.</li>
                <li>Set a strong, non-guessable password.</li>
                <li>Optionally add your email address to keep your data safe and recoverable.</li>
                <li>Tap Register — your account is created instantly.</li>
                <li>If you already have an account, enter your username and password to log in.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Is {BRAND} Safe to Use?</h2>
              <p>
                The Zangi app is 100% safe and secure. It does not require phone number registration or a SIM card,
                keeping your identity anonymous. The app also works{' '}
                <Link href="/how-zangi-uses-less-internet-data" className="text-brand hover:underline">
                  offline
                </Link>{' '}
                when you do not have an internet connection, and it does not save any data on its servers — so no third
                party can access your conversations.
              </p>
            </section>

            <section>
              <h2 id="faq" className="text-2xl font-bold text-ink mb-4">
                FAQs
              </h2>
              <FaqAccordion items={faqs} />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Conclusion</h2>
              <p>
                In a nutshell, {BRAND} App is another name for anonymous messaging. Register on the app without a SIM or
                phone number and start messaging anonymously with end-to-end encryption. Every time your device is
                changed, your data is erased for your privacy. Adding contacts is as simple as searching for a username
                and connecting.
              </p>
            </section>

            <div className="pt-6 border-t border-line flex justify-center">
              <DownloadButton />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/zangi-security-and-privacy" className="text-brand hover:underline">Zangi Security & Privacy →</Link>
            <Link href="/does-zangi-use-end-to-end-encryption" className="text-brand hover:underline">End-to-End Encryption →</Link>
            <Link href="/can-zangi-be-tracked-or-hacked" className="text-brand hover:underline">Can Zangi Be Tracked? →</Link>
          </div>
        </div>
      </div>

      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished={DATE}
        path={`/${SLUG}`}
        faqs={faqs}
        articleBody="Zangi App is a secure messaging application with military-level encryption that allows anonymous messaging since it does not require your phone number for registration."
      />
    </article>
  );
}
