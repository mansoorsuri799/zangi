import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  DOWNLOAD_URL,
  APP_VERSION,
  APP_SIZE,
  CONTENT_UPDATED,
  APP_RATING_VALUE,
  APP_RATING_COUNT,
} from "@/lib/site";
import DownloadButton from "@/components/DownloadButton";
import StepList from "@/components/StepList";
import FaqAccordion from "@/components/FaqAccordion";
import ReviewSnippet, {
  softwareAppRatingSchema,
  downloadOfferSchema,
} from "@/components/ReviewSnippet";
import { imageObjectSchema } from "@/lib/schemaImageLicensing";

export const metadata: Metadata = {
  title: {
    absolute: "Zangi APP Private Messenger | Download for Android & iOS (2026)",
  },
  description:
    "Download Zangi Private Messenger APK for Android & iOS. Rated " +
    APP_RATING_VALUE +
    "/5. End-to-end encryption, offline P2P, no phone number required. Free APK " +
    APP_VERSION +
    ".",
  keywords: [
    "Zangi",
    "Zangi APK",
    "Zangi Private Messenger",
    "Zangi download",
    "Zangi app",
    "Zangi messenger APK",
    "private messenger no phone number",
    "offline messaging app",
    "encrypted messenger APK",
    "Zangi for PC",
    "Zangi iOS",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Zangi APP Private Messenger | Download for Android & iOS (2026)",
    description:
      "Download Zangi Private Messenger — encrypted chat, offline mode, no SIM required, HD calls, low data usage.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_URL}/zangi-app.webp`, width: 1024, height: 1024, alt: "Zangi Private Messenger" }],
  },
};

const faqs = [
  {
    q: "How can I download Zangi APP Private Messenger?",
    a: "Visit zangiapp.org and click Download to get the Zangi APK for Android. iOS users can install from the App Store.",
  },
  {
    q: "Can I use Zangi APK on PC?",
    a: "Yes. Install an Android emulator like BlueStacks or LDPlayer, then install the Zangi APK inside it. See our Zangi for PC guide.",
  },
  {
    q: "Is Zangi really private?",
    a: "Yes. Zangi uses end-to-end encryption, does not store chat history on servers, and lets you register without a real phone number.",
  },
  {
    q: "How does offline mode work without internet?",
    a: "Devices connect directly via Bluetooth or Wi-Fi Direct within roughly 30 meters — no internet required.",
  },
  {
    q: "Why does Zangi consume less data than WhatsApp?",
    a: "More efficient compression, less protocol overhead, and no automatic media downloading for text and calls.",
  },
  {
    q: "Does Zangi work behind firewalls or VPNs?",
    a: "Yes. Zangi works with VPNs and in many restricted network environments.",
  },
  {
    q: "Are there limits on call length or group size?",
    a: "Individual calls have no time limit. Free tier supports smaller group calls; premium unlocks up to 1000-person conferencing.",
  },
  {
    q: "Is Zangi completely anonymous?",
    a: "More anonymous than WhatsApp or Telegram because no phone number is required. Your IP may still be visible to servers.",
  },
  {
    q: "Can I use Zangi for business?",
    a: "Yes for small teams that prioritize privacy. See Zangi for Business for white-label and enterprise options.",
  },
  {
    q: "What if I lose my phone?",
    a: "Without cloud backup, chat history does not restore automatically. Bind an email in settings for account recovery where available.",
  },
];

export default function Home() {
  const pageTitle = "Zangi APP Private Messenger | Download for Android & iOS (2026)";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: imageObjectSchema({
          url: "/zangi-app.webp",
          name: "Zangi App Logo",
          description: "Official Zangi Private Messenger logo used on zangiapp.org",
          width: 1024,
          height: 1024,
        }),
        email: "charlotteelizabeth799@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: "Download Zangi Private Messenger APK — secure, private messaging.",
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: pageTitle,
        description:
          "Download Zangi Private Messenger APK for Android & iOS. End-to-end encryption, offline P2P, no phone number required.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#app` },
        dateModified: CONTENT_UPDATED,
        datePublished: "2025-08-01",
        inLanguage: "en-US",
        primaryImageOfPage: { "@id": `${SITE_URL}/zangi-app.webp#image` },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      imageObjectSchema({
        url: "/zangi-app.webp",
        name: "Zangi Private Messenger",
        description:
          "Zangi Private Messenger app icon — download the official APK for Android from zangiapp.org",
        width: 1024,
        height: 1024,
      }),
      imageObjectSchema({
        url: "/zangi-banner.webp",
        name: "Zangi APP overview",
        description: "Zangi Private Messenger feature overview banner",
        width: 1080,
        height: 607,
      }),
      imageObjectSchema({
        url: "/zangi-messenger.webp",
        name: "Zangi Private Messenger interface",
        description: "Zangi Private Messenger secure chat and calling interface",
        width: 1080,
        height: 607,
      }),
      imageObjectSchema({
        url: "/zangi-phone-1.webp",
        name: "Zangi app private messenger screenshot",
        description: "Zangi Private Messenger Android screenshot — chat interface",
        width: 400,
        height: 650,
      }),
      imageObjectSchema({
        url: "/zangi-phone-2.webp",
        name: "Zangi APP screenshot",
        description: "Zangi Private Messenger Android screenshot — calls and features",
        width: 400,
        height: 650,
      }),
      imageObjectSchema({
        url: "/zangi-phone-3.webp",
        name: "Zangi features screenshot",
        description: "Zangi Private Messenger Android screenshot — privacy features",
        width: 400,
        height: 650,
      }),
      imageObjectSchema({
        url: "/zangi-phone-4.webp",
        name: "Zangi messenger screenshot",
        description: "Zangi Private Messenger Android screenshot — messaging UI",
        width: 400,
        height: 650,
      }),
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#app`,
        name: "Zangi Private Messenger",
        alternateName: ["Zangi", "Zangi APP", "Zangi Messenger"],
        operatingSystem: "Android 5.0+",
        applicationCategory: "CommunicationApplication",
        applicationSubCategory: "Messaging",
        offers: downloadOfferSchema(),
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: { "@id": `${SITE_URL}/zangi-app.webp#image` },
        screenshot: [
          { "@id": `${SITE_URL}/zangi-phone-1.webp#image` },
          { "@id": `${SITE_URL}/zangi-phone-2.webp#image` },
          { "@id": `${SITE_URL}/zangi-phone-3.webp#image` },
          { "@id": `${SITE_URL}/zangi-phone-4.webp#image` },
        ],
        description:
          "Secure private messenger with end-to-end encryption, offline P2P mode, no phone number registration, and ultra-low data usage.",
        url: SITE_URL,
        author: { "@id": `${SITE_URL}/#organization` },
        aggregateRating: softwareAppRatingSchema(),
      },
      {
        "@type": "HowTo",
        name: "How to download and install Zangi APK on Android",
        description: "Install Zangi Private Messenger APK on Android in three steps.",
        totalTime: "PT5M",
        tool: {
          "@type": "HowToTool",
          name: "Android smartphone or tablet",
        },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Download the file",
            text: "Tap Download and save the APK/XAPK file to your phone.",
            url: `${SITE_URL}/#download`,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Allow unknown apps",
            text: "Enable Unknown Sources / Install unknown apps in settings.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Install Zangi",
            text: "Open the file from Downloads and confirm install.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <article className="article max-w-3xl mx-auto px-4 py-6 sm:py-10 min-w-0">
        {/* Top app icon — same placement as WordPress */}
        <div className="flex justify-center mb-6">
          <Image
            src="/zangi-app.webp"
            alt="Zangi Private Messenger app icon — download official APK for Android"
            title="Zangi Private Messenger APK"
            width={160}
            height={160}
            priority
            fetchPriority="high"
            className="rounded-2xl"
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-ink text-center leading-snug mb-3">
          Zangi APP Private Messenger | Download for Android &amp; iOS (2026)
        </h1>

        <p className="text-center text-mute mb-3 text-[15px] sm:text-base px-1">
          Download Zangi APK Private Messenger on Android and enjoy a fast, secure messaging app.
          Also available for iOS and PC.
        </p>

        <ReviewSnippet className="mb-4" />

        <p className="text-center text-xs text-mute/80 mb-6">
          Updated {CONTENT_UPDATED} · Hosted APK {APP_VERSION} ({APP_SIZE}) · Rated{" "}
          {APP_RATING_VALUE}/5 from {Number(APP_RATING_COUNT).toLocaleString()}+ ratings
        </p>

        <div id="download" className="flex justify-center mb-8 sm:mb-10 px-1">
          <DownloadButton label="Download Zangi" />
        </div>

        {/* App info — simple table like WP */}
        <div className="overflow-x-auto mb-8 sm:mb-10 border border-line rounded-lg -mx-0">
          <table className="w-full text-sm min-w-[280px]">
            <tbody>
              {[
                ["App Name", "Zangi"],
                ["Publisher", "zangi.com"],
                ["Category", "Communication"],
                ["Latest Version", APP_VERSION],
                ["Size", APP_SIZE],
                ["Price", "Free"],
                ["Required OS", "Android 5.0+"],
                ["Rating", `${APP_RATING_VALUE}/5 (${Number(APP_RATING_COUNT).toLocaleString()}+)`],
                ["Language", "English"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-line last:border-0">
                  <th className="text-left font-medium text-ink py-2.5 px-3 sm:px-4 bg-secondary w-[38%] sm:w-40 align-top">
                    {k}
                  </th>
                  <td className="py-2.5 px-3 sm:px-4 text-mute break-words">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Overview</h2>
        <p>
          Looking for a messaging app that does not drain your data, works offline, performs well,
          and stays secure? Download the{" "}
          <Link href="/">Zangi app</Link>. It is free, with strong encryption, no message storage on
          servers, a private number (no SIM required), and peer-to-peer offline mode.
        </p>
        <p>
          You can send files in original quality, customize themes, and use it while traveling or in
          areas with weak connectivity — a reliable alternative to mainstream messengers.
        </p>

        <h2>What is Zangi APP?</h2>
        <p>
          Zangi Private Messenger focuses on privacy, speed, offline use, and performance. There are
          no tracking algorithms. You do not need your real number — the app assigns a private
          number. Messages deliver quickly, and you can send images, videos, and files in original
          quality.
        </p>

        {/* Wide banner after intro — WP placement */}
        <figure className="my-8">
          <Image
            src="/zangi-banner.webp"
            alt="Zangi APP overview — private messenger features for Android"
            title="Zangi Private Messenger overview"
            width={1024}
            height={576}
            className="w-full h-auto rounded-lg border border-line"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="sr-only">
            Zangi Private Messenger overview banner — encrypted chat and calling
          </figcaption>
        </figure>

        <h2>Main Features of Zangi APP</h2>
        <p>
          Features that make Zangi a strong competitor against leading messaging apps:
        </p>

        <h3>No SIM Card Needed</h3>
        <p>
          Register without a real phone number. Zangi assigns a private number so you can stay
          anonymous with a username.{" "}
          <Link href="/no-phone-number-messaging-app">Learn more about no-SIM messaging</Link>.
        </p>

        <h3>Offline Working</h3>
        <p>
          Chat nearby without internet using Bluetooth, Wi-Fi Direct, and local networks — useful
          for travel, hiking, and weak coverage.
        </p>

        <h3>Strong Encryption</h3>
        <p>
          End-to-end encryption with no third-party access. The app does not store your chat data on
          servers.{" "}
          <Link href="/does-zangi-use-end-to-end-encryption">Encryption explained</Link>.
        </p>

        <h3>Top Voice and Video Quality</h3>
        <p>
          Clear voice and HD video even on weak connections.{" "}
          <Link href="/zangi-voice-video-call-quality">Call quality guide</Link>.
        </p>

        <h3>Fast and Lightweight</h3>
        <p>Messages, images, and videos deliver quickly with a lightweight app footprint.</p>

        <h3>File Sharing</h3>
        <p>
          Send images and videos in high quality without aggressive compression.{" "}
          <Link href="/zangi-app-file-sharing-limits-formats">File sharing limits & formats</Link>.
        </p>

        <h3>No Ads</h3>
        <p>Completely ad-free, with no third-party ad tracking.</p>

        <h3>Customisation</h3>
        <p>Change colours, fonts, themes, and layouts to suit younger and older users alike.</p>

        <h3>Device Syncing</h3>
        <p>
          Log in on phone, tablet, and PC and continue conversations across devices.{" "}
          <Link href="/zangi-for-pc">Zangi for PC</Link>.
        </p>

        {/* 4 phone screenshots in a row — WP placement */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-10">
          {[
            ["/zangi-phone-1.webp", "Zangi app private messenger — Fastest Text & File Transfer"],
            ["/zangi-phone-2.webp", "Zangi APP — No Data Collection security screen"],
            ["/zangi-phone-3.webp", "Zangi features — HD voice and video call quality"],
            ["/zangi-phone-4.webp", "Zangi messenger — Low Data Usage mode"],
          ].map(([src, alt]) => (
            <figure
              key={src}
              className="rounded-lg border border-line bg-secondary overflow-visible m-0"
            >
              <Image
                src={src}
                alt={alt}
                title={alt}
                width={400}
                height={650}
                sizes="(max-width: 640px) 45vw, 180px"
                className="!my-0 w-full h-auto block rounded-lg"
              />
              <figcaption className="sr-only">{alt}</figcaption>
            </figure>
          ))}
        </div>

        <h2>Zangi APP Premium Features</h2>
        <p>Optional paid features for extra account security:</p>

        <h3>Wipe Passcode</h3>
        <p>
          Set a special code that secretly erases messages, files, and contacts while keeping your
          account.
        </p>

        <h3>Self-Destruct Messages</h3>
        <p>Turn on stealth mode and set a timer so messages disappear after a set time.</p>

        <h3>1000-Person Conferencing</h3>
        <p>Host large HD conference calls — even on slower networks.</p>

        {/* Second wide banner — WP placement after premium */}
        <figure className="my-8">
          <Image
            src="/zangi-messenger.webp"
            alt="Zangi Private Messenger secure chat interface"
            title="Zangi Private Messenger"
            width={1024}
            height={576}
            className="w-full h-auto rounded-lg border border-line"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <figcaption className="sr-only">
            Zangi Private Messenger interface showing secure messaging
          </figcaption>
        </figure>

        <h2>Is the Zangi App Safe to Use?</h2>
        <p>
          Yes. Communications are end-to-end encrypted on your device. Zangi does not store chat
          history on servers. A private number means you do not share your real phone number. Read
          more:{" "}
          <Link href="/zangi-security-and-privacy">security and privacy</Link>,{" "}
          <Link href="/can-zangi-be-tracked-or-hacked">can Zangi be tracked</Link>,{" "}
          <Link href="/is-zangi-safe-for-journalists-activists">safety for journalists</Link>.
        </p>

        <h2>How to Download and Install Zangi APK</h2>

        <h3>For Android</h3>
        <StepList
          className="mb-10"
          compact
          steps={[
            {
              title: "Download the file",
              body: "Tap Download and save the APK/XAPK file to your phone.",
            },
            {
              title: "Allow unknown apps",
              body: "Enable Unknown Sources / Install unknown apps in your device settings.",
            },
            {
              title: "Install Zangi",
              body: "Open the file from Downloads and confirm install.",
            },
          ]}
        />

        <h3>For PC</h3>
        <StepList
          className="mb-6"
          compact
          steps={[
            {
              title: "Download the APK",
              body: "Save the Zangi APK to your computer.",
            },
            {
              title: "Install an emulator",
              body: "Install BlueStacks or LDPlayer from the official site.",
            },
            {
              title: "Install inside the emulator",
              body: "Open the emulator and install the Zangi APK from your Downloads folder.",
            },
          ]}
        />
        <p>
          <Link href="/zangi-for-pc">Full PC installation guide →</Link>
        </p>

        <h3>iOS Installation</h3>
        <StepList
          className="mb-4"
          compact
          steps={[
            {
              title: "Open the App Store",
              body: "Search “Zangi Private Messenger” and tap Get.",
            },
            {
              title: "Set up your account",
              body: "Follow the prompts — no phone number required. Enable notifications if you want alerts.",
            },
          ]}
        />
        <p>
          <Link href="/zangi-app-for-ios">iOS guide →</Link>
        </p>

        <div className="flex justify-center my-8">
          <DownloadButton label="Download Zangi APK" />
        </div>

        <h2>Data Consumption vs Other Apps</h2>
        <div className="overflow-x-auto border border-line rounded-lg mb-4">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="border-b border-line bg-secondary text-left">
                <th className="py-2.5 px-3 font-medium">Activity</th>
                <th className="py-2.5 px-3 font-medium">WhatsApp</th>
                <th className="py-2.5 px-3 font-medium">Telegram</th>
                <th className="py-2.5 px-3 font-medium text-brand">Zangi</th>
              </tr>
            </thead>
            <tbody className="text-mute">
              {[
                ["Text (100 messages)", "2.1 MB", "1.8 MB", "0.7 MB"],
                ["Voice call (10 min)", "7.5 MB", "6.2 MB", "2.8 MB"],
                ["Video call (10 min)", "42 MB", "38 MB", "15 MB"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-line last:border-0">
                  <td className="py-2.5 px-3 text-ink">{row[0]}</td>
                  <td className="py-2.5 px-3">{row[1]}</td>
                  <td className="py-2.5 px-3">{row[2]}</td>
                  <td className="py-2.5 px-3 font-semibold text-brand">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <Link href="/zangi-vs-whatsapp-telegram-signal-skype-viber">
            Full comparison with WhatsApp, Telegram, Signal & more →
          </Link>
        </p>

        <h2>How to Use the Zangi APK</h2>
        <StepList
          className="mb-8"
          compact
          steps={[
            {
              title: "Download the app",
              body: "Install Zangi on Android, iOS, or PC (via emulator).",
            },
            {
              title: "Register",
              body: "Create an account with a nickname — no real phone number required. A private number is assigned.",
            },
            {
              title: "Customize settings",
              body: "Change fonts, themes, chat background, and enable dark or light mode.",
            },
            {
              title: "Add contacts",
              body: "Search usernames or invite friends. Share your nickname so others can find you.",
            },
            {
              title: "Use offline mode",
              body: "Enable offline / P2P when you have no internet but nearby Zangi users.",
            },
            {
              title: "Sync devices",
              body: "Log in on multiple devices to continue chats on phone and PC.",
            },
          ]}
        />

        <h2>Who Should Use the Zangi APP?</h2>
        <ul>
          <li>
            <strong>Privacy-conscious users</strong> — no ads, strong encryption, no server-side chat
            vault.
          </li>
          <li>
            <strong>People in remote areas</strong> — low data use and offline P2P when signal is weak.
          </li>
          <li>
            <strong>Travellers</strong> — stay connected with less battery and bandwidth drain.
          </li>
          <li>
            <strong>Journalists &amp; activists</strong> — see{" "}
            <Link href="/is-zangi-safe-for-journalists-activists">
              Is Zangi safe for journalists?
            </Link>
          </li>
        </ul>

        <h3>Who should avoid Zangi?</h3>
        <ul>
          <li>
            Users who switch devices often and need full cloud chat backup (Zangi prioritizes no
            server history).
          </li>
          <li>
            Very large free group-call hosts — free tier is limited; premium unlocks 1000-person calls.
          </li>
          <li>
            iOS users who need every Android feature on day one — iOS can lag Android on some updates.
          </li>
        </ul>

        <h2>Tips and Tricks</h2>
        <ul>
          <li>Enable data-save mode in settings for even lower usage.</li>
          <li>Turn on offline mode for local / no-signal communication.</li>
          <li>Personalize themes and fonts for a clearer interface.</li>
          <li>Sync on multiple devices so conversations continue on PC.</li>
          <li>Use a nickname instead of your phone number for more privacy.</li>
          <li>Keep notifications on so you do not miss offline messages and calls.</li>
        </ul>

        <h2>Pros and Cons</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="!mt-0">Pros</h3>
            <ul>
              <li>Ultra-fast messaging</li>
              <li>Works on low internet</li>
              <li>Strong privacy / encryption</li>
              <li>Multi-device login</li>
              <li>Low data consumption</li>
              <li>No ads or tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="!mt-0">Cons</h3>
            <ul>
              <li>Smaller user base than WhatsApp or Telegram</li>
              <li>No traditional cloud chat backup by design</li>
              <li>Losing a phone without recovery setup can lose history</li>
            </ul>
          </div>
        </div>

        <h2>Free vs Premium</h2>
        <p>
          Free tier includes unlimited messaging, HD group calls (smaller size), end-to-end encryption,
          offline P2P, and large file sharing. Premium (~$9.99/month) adds 1000-person conference calls,
          self-destruct messages, wipe passcode, and advanced delivery analytics. For most people, the
          free tier is enough — premium helps businesses and high-security use cases. See{" "}
          <Link href="/zangi-for-business">Zangi for Business</Link>.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FaqAccordion items={faqs} className="mb-6" />
        <p>
          <Link href="/zangi-app-not-working-common-problems-how-to-fix-them">
            App not working? Common fixes →
          </Link>
        </p>

        <h2>Conclusion</h2>
        <p>
          Zangi suits anyone who wants extra security, fast messaging, and offline communication.
          Download the latest APK and try it yourself.
        </p>

        <div className="flex justify-center mt-8 mb-4">
          <a href={DOWNLOAD_URL} className="cta-btn">
            Download Now
          </a>
        </div>
      </article>
    </>
  );
}
