import { SITE_URL, BRAND } from '@/lib/site';
import { imageObjectSchema } from '@/lib/schemaImageLicensing';

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

type FaqItem = { q: string; a: string };

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  articleBody?: string;
  path?: string;
  faqs?: FaqItem[];
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${SITE_URL}/zangi-app.webp`,
  breadcrumbOnly = false,
  articleBody,
  path,
  faqs,
}: BlogPostSchemaProps) {
  const resolvedPath = path ?? `/blog/${slug}`;
  const url = `${SITE_URL}${resolvedPath}`;

  const article: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    image: imageObjectSchema({
      url: image,
      name: title,
      description,
      width: 1024,
      height: 1024,
    }),
    author: { '@type': 'Organization', name: BRAND, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: BRAND,
      logo: imageObjectSchema({
        url: '/zangi-app.webp',
        name: `${BRAND} logo`,
        description: `${BRAND} Private Messenger logo`,
        width: 1024,
        height: 1024,
      }),
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en-US',
    ...(articleBody && { articleBody }),
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  if (breadcrumbOnly) return null;

  return (
    <div suppressHydrationWarning style={{ display: 'contents' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      )}
    </div>
  );
}
