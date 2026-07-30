import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/site';

type PageType = {
  url: string;
  changeFreq: string;
  priority: number;
  images?: Array<{ loc: string; title: string; caption: string }>;
};

export async function GET() {
  const lastMod = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/zangi-app.webp',
          title: 'Zangi Private Messenger',
          caption: 'Download Zangi Private Messenger APK for Android',
        },
        {
          loc: '/zangi-banner.webp',
          title: 'Zangi APP',
          caption: 'Zangi Private Messenger overview',
        },
      ],
    },
    { url: '/zangi-for-pc', changeFreq: 'weekly', priority: 0.9 },
    { url: '/zangi-app-for-ios', changeFreq: 'weekly', priority: 0.9 },
    { url: '/zangi-for-business', changeFreq: 'weekly', priority: 0.9 },
    { url: '/about-us', changeFreq: 'monthly', priority: 0.7 },
    { url: '/blog', changeFreq: 'weekly', priority: 0.8 },
    { url: '/contact-us', changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy-policy', changeFreq: 'yearly', priority: 0.5 },
    { url: '/disclaimer', changeFreq: 'yearly', priority: 0.5 },
  ];

  const posts: PageType[] = [
    'why-zangi',
    'no-phone-number-messaging-app',
    'zangi-security-and-privacy',
    'zangi-voice-video-call-quality',
    'how-zangi-uses-less-internet-data',
    'zangi-app-file-sharing-limits-formats',
    'zangi-group-chats-broadcast-features',
    'zangi-cloud-vs-local-storage-explained',
    'does-zangi-use-end-to-end-encryption',
    'can-zangi-be-tracked-or-hacked',
    'is-zangi-safe-for-journalists-activists',
    'zangi-app-not-working-common-problems-how-to-fix-them',
    'zangi-vs-whatsapp-telegram-signal-skype-viber',
  ].map((slug) => ({
    url: `/${slug}`,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...posts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${SITE_URL}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
