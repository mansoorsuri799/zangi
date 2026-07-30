import { NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/site';

export async function GET() {
  const body = `# robots.txt for zangiapp.org
# Allow search engines and AI answer engines to crawl public content.

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`;

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
