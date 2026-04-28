import { Link } from '@/lib/router';

import { H1, Lede, P } from '../components/Prose';

export function NotFound() {
  return (
    <>
      <p className="mb-3 font-mono text-xs tracking-wider text-[var(--color-fg-dim)] uppercase">
        404
      </p>
      <H1>Page not found</H1>
      <Lede>
        We couldn't find that documentation page. It may have moved, been
        renamed, or never existed.
      </Lede>
      <P>
        Try the{' '}
        <Link
          to="/docs"
          className="text-[var(--color-accent)] underline underline-offset-4"
        >
          documentation index
        </Link>{' '}
        or the sidebar to find what you were looking for.
      </P>
    </>
  );
}
