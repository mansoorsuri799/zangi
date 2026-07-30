'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center">
      <h1 className="font-display text-3xl font-bold text-ink mb-3">Something went wrong</h1>
      <p className="text-muted mb-6 text-center max-w-md">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <button type="button" onClick={reset} className="cta-btn">
        <span>Try again</span>
        <span className="cta-icon" aria-hidden>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
