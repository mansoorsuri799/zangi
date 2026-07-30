import { DOWNLOAD_URL, APP_VERSION, APP_SIZE } from '@/lib/site';

type Props = {
  className?: string;
  label?: string;
};

export default function DownloadButton({
  className = '',
  label = 'Download Zangi',
}: Props) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={`cta-btn ${className}`}
      download
      aria-label={`${label} ${APP_VERSION} (${APP_SIZE})`}
    >
      {label}
    </a>
  );
}
