import { Check, Copy } from 'lucide-react';
import { useCallback, useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard may be unavailable in insecure contexts; silently no-op.
    }
  }, [code]);

  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]">
      {(filename || language) && (
        <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2 font-mono text-xs text-[var(--color-fg-muted)]">
          <span className="truncate">{filename ?? language}</span>
          {language && filename && <span>{language}</span>}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed text-[var(--color-fg)]">
          <code>{code}</code>
        </pre>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
          className="absolute top-2 right-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)]/80 text-[var(--color-fg-muted)] backdrop-blur transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-fg)]"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-[var(--color-accent)]" aria-hidden />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden />
          )}
        </button>
      </div>
    </figure>
  );
}

export function CommandBlock({ command }: { command: string }) {
  return (
    <CodeBlock
      code={command}
      language="bash"
    />
  );
}
