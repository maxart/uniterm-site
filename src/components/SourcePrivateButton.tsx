import { Github } from 'lucide-react';
import type { MouseEvent, ReactNode } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

const TOOLTIP_TEXT = 'Source isn’t public at this time';

interface SourcePrivateButtonProps {
  /** Visual variant — matches the original buttons it replaces. */
  variant: 'icon-circle' | 'pill' | 'text';
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
}

const VARIANT_CLASSES: Record<SourcePrivateButtonProps['variant'], string> = {
  'icon-circle':
    'inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[var(--color-fg-muted)]',
  pill: 'inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--color-fg-muted)]',
  text: 'inline-flex items-center gap-1.5 text-xs text-[var(--color-fg-muted)]',
};

export function SourcePrivateButton({
  variant,
  className,
  children,
  ariaLabel,
}: SourcePrivateButtonProps) {
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          onClick={handleClick}
          className={cn(
            VARIANT_CLASSES[variant],
            'cursor-not-allowed opacity-70 transition-none',
            className,
          )}
        >
          {variant === 'icon-circle' ? (
            <Github className="h-4 w-4" aria-hidden />
          ) : variant === 'pill' ? (
            <>
              <Github className="h-4 w-4" aria-hidden />
              {children ?? 'GitHub'}
            </>
          ) : (
            <>
              <Github className="h-3.5 w-3.5" aria-hidden />
              {children}
            </>
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>{TOOLTIP_TEXT}</TooltipContent>
    </Tooltip>
  );
}
