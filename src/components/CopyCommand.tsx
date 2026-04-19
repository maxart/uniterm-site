import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Props {
  command: string;
  className?: string;
}

export function CopyCommand({ command, className }: Props) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    []
  );

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard may be unavailable (insecure origin, permissions);
      // fail silently — users can select the text manually.
    }
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)]/80 py-2 pr-2 pl-5 font-mono text-sm shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md',
        className
      )}
    >
      <span className="text-[var(--color-fg)]/90 select-all">
        <span className="text-[var(--color-fg-dim)]">$ </span>
        {command}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy install command"
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[var(--color-fg-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-fg)]"
      >
        {copied ? (
          <Check className="h-4 w-4 text-[var(--color-accent)]" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </div>
  );
}
