import { SITE_URL, SITE_NAME } from '@/lib/site';

/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = SITE_URL;

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: SITE_ORIGIN,
};

/**
 * Schema.org ImageObject properties recommended by Google for Image Metadata
 * (license, creator, acquireLicensePage, copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: `${SITE_ORIGIN}/privacy-policy`,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: `© ${SITE_NAME}. All rights reserved.`,
  creditText: SITE_NAME,
} as const;

export function imageObjectSchema({
  url,
  name,
  description,
  width,
  height,
}: {
  url: string;
  name: string;
  description: string;
  width: number;
  height: number;
}) {
  const absolute = url.startsWith('http') ? url : `${SITE_ORIGIN}${url}`;
  return {
    '@type': 'ImageObject' as const,
    '@id': `${absolute}#image`,
    url: absolute,
    contentUrl: absolute,
    name,
    description,
    width,
    height,
    ...imageObjectLicensing,
  };
}
