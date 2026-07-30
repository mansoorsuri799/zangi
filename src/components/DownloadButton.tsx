import { DOWNLOAD_URL, APP_STORE_URL, APP_VERSION, APP_SIZE } from '@/lib/site';

type Props = {
  className?: string;
  label?: string;
};

function AndroidIcon() {
  return (
    <svg
      className="cta-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.6 9.48l1.84-3.18a.5.5 0 00-.2-.7.5.5 0 00-.7.2l-1.86 3.22A8.9 8.9 0 0012 8c-1.66 0-3.2.45-4.52 1.22L5.62 5.8a.5.5 0 00-.7-.2.5.5 0 00-.2.7L6.56 9.48C4.4 10.9 3 13.27 3 16v.5c0 .83.67 1.5 1.5 1.5H5v2.25A1.75 1.75 0 006.75 22 1.75 1.75 0 008.5 20.25V18h7v2.25A1.75 1.75 0 0017.25 22a1.75 1.75 0 001.75-1.75V18h.5c.83 0 1.5-.67 1.5-1.5V16c0-2.73-1.4-5.1-3.4-6.52zM8.5 15.25A1.25 1.25 0 017.25 14 1.25 1.25 0 018.5 12.75 1.25 1.25 0 019.75 14 1.25 1.25 0 018.5 15.25zm7 0A1.25 1.25 0 0114.25 14 1.25 1.25 0 0115.5 12.75 1.25 1.25 0 0116.75 14 1.25 1.25 0 0115.5 15.25z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      className="cta-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function DownloadButton({
  className = '',
  label = 'Download Zangi',
}: Props) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={`cta-btn ${className}`}
      download
      aria-label={`${label} Android APK ${APP_VERSION} (${APP_SIZE})`}
    >
      <AndroidIcon />
      <span>{label}</span>
    </a>
  );
}

export function AppStoreButton({
  className = '',
  label = 'Download for iOS',
}: Props) {
  return (
    <a
      href={APP_STORE_URL}
      className={`cta-btn ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <AppleIcon />
      <span>{label}</span>
    </a>
  );
}

/** Android APK + App Store CTAs stacked on mobile, side-by-side on larger screens */
export function DownloadCtas({
  className = '',
  apkLabel = 'Download Zangi',
  storeLabel = 'Download for iOS',
}: {
  className?: string;
  apkLabel?: string;
  storeLabel?: string;
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-stretch sm:items-center justify-center ${className}`}
    >
      <DownloadButton label={apkLabel} />
      <AppStoreButton label={storeLabel} />
    </div>
  );
}
