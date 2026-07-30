import {
  DOWNLOAD_URL,
  APP_VERSION,
  APP_SIZE,
  APP_RATING_VALUE,
  APP_RATING_COUNT,
  APP_REVIEW_COUNT,
} from '@/lib/site';

type ReviewStarsProps = {
  className?: string;
  showCount?: boolean;
};

/** Visible review snippet (supports AggregateRating / SERP star eligibility) */
export default function ReviewSnippet({ className = '', showCount = true }: ReviewStarsProps) {
  const value = Number(APP_RATING_VALUE);
  const full = Math.floor(value);
  const half = value - full >= 0.25 && value - full < 0.75;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
      aria-label={`${APP_RATING_VALUE} out of 5 stars from ${Number(APP_RATING_COUNT).toLocaleString()} ratings`}
    >
      <div className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: full }).map((_, i) => (
          <Star key={`f-${i}`} fill="full" />
        ))}
        {half && <Star fill="half" />}
        {Array.from({ length: empty }).map((_, i) => (
          <Star key={`e-${i}`} fill="empty" />
        ))}
      </div>
      <span className="text-sm font-semibold text-ink">
        {APP_RATING_VALUE}
        <span className="text-mute font-normal">/5</span>
      </span>
      {showCount && (
        <span className="text-[11px] sm:text-xs text-mute text-center sm:text-left">
          ({Number(APP_RATING_COUNT).toLocaleString()}+ ratings · Free · Android · Communication)
        </span>
      )}
    </div>
  );
}

function Star({ fill }: { fill: 'full' | 'half' | 'empty' }) {
  if (fill === 'half') {
    return (
      <svg className="w-4 h-4 text-brand" viewBox="0 0 20 20" aria-hidden>
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#e5e5e5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfStar)"
          d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.27l-4.94 2.46.94-5.52-4-3.9 5.53-.8L10 1.5z"
        />
      </svg>
    );
  }
  return (
    <svg
      className={`w-4 h-4 ${fill === 'full' ? 'text-brand' : 'text-line'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.27l-4.94 2.46.94-5.52-4-3.9 5.53-.8L10 1.5z" />
    </svg>
  );
}

/** JSON-LD block helpers for app rating */
export function softwareAppRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: APP_RATING_VALUE,
    bestRating: '5',
    worstRating: '1',
    ratingCount: APP_RATING_COUNT,
    reviewCount: APP_REVIEW_COUNT,
  };
}

export function downloadOfferSchema() {
  return {
    '@type': 'Offer',
    url: DOWNLOAD_URL,
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  };
}

export { APP_VERSION, APP_SIZE, DOWNLOAD_URL };
