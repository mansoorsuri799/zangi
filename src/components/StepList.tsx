type Step = {
  title: string;
  body?: string;
};

type StepListProps = {
  steps: Step[];
  className?: string;
  /** Tighter spacing for nested / shorter lists */
  compact?: boolean;
};

export default function StepList({ steps, className = '', compact = false }: StepListProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute right-3 top-4 bottom-4 w-px bg-brand/30 hidden sm:block"
        aria-hidden
      />

      <ol className={compact ? 'space-y-8' : 'space-y-12'}>
        {steps.map((item, i) => {
          const n = String(i + 1).padStart(2, '0');
          return (
            <li key={`${n}-${item.title}`} className="relative pr-4 sm:pr-14">
              <span
                className="absolute right-1.5 top-3 hidden sm:flex h-3.5 w-3.5 rounded-full border-2 border-brand bg-white"
                aria-hidden
              />

              <div className={`flex flex-col ${compact ? 'gap-2' : 'gap-3'}`}>
                <div
                  className={`flex items-center justify-center rounded-full border-2 border-brand text-brand font-semibold ${
                    compact ? 'h-10 w-10 text-base' : 'h-12 w-12 sm:h-14 sm:w-14 text-lg sm:text-xl'
                  }`}
                  aria-hidden
                >
                  {i + 1}
                </div>
                <p className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand">
                  Step {n}
                </p>
                <h3
                  className={`font-bold text-ink leading-tight ${
                    compact ? 'text-base sm:text-lg' : 'text-lg sm:text-xl md:text-2xl'
                  }`}
                >
                  {item.title}
                </h3>
                {item.body ? (
                  <p className="text-mute leading-relaxed max-w-xl text-[15px] sm:text-base">
                    {item.body}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
