import { ChevronDown } from 'lucide-react';

import { FAQS } from '@/lib/faqs';

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-accent)] uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Questions, answered.
          </h2>
        </div>

        <ul className="flex flex-col">
          {FAQS.map(({ q, a }) => (
            <li key={q} className="border-t border-[var(--color-border)] last:border-b">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-medium text-[var(--color-fg)] [&::-webkit-details-marker]:hidden">
                  {q}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-[var(--color-fg-muted)] transition-transform group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden
                  />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                  {a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
