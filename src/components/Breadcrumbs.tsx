import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export type Crumb = {
  name: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href
        ? { item: item.href.startsWith('http') ? item.href : `${SITE_URL}${item.href}` }
        : {}),
    })),
  };

  return (
    <nav className={`text-xs sm:text-sm text-mute mb-6 sm:mb-8 ${className}`} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && (
                <span className="text-line shrink-0" aria-hidden>
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span className="text-brand font-medium break-words" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand transition-colors shrink-0">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
    </nav>
  );
}
