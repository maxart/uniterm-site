import { cn } from '@/lib/utils';

import { StarfieldBackground } from './StarfieldBackground';

interface Props {
  className?: string;
}

export function HeroBackground({ className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden bg-black',
        className
      )}
    >
      <StarfieldBackground className="absolute inset-0 h-full w-full" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_42%,rgba(0,0,0,0.6)_0%,transparent_70%)]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />
    </div>
  );
}
