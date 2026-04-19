import { cn } from '@/lib/utils';

export interface LogoMarqueeItem {
  name: string;
  src?: string;
  dotColor?: string;
  href?: string;
}

interface Props {
  items: LogoMarqueeItem[];
  speedPxPerSec?: number;
  logoHeight?: number;
  className?: string;
}

const MIN_ITEMS_PER_COPY = 8;
const AVG_ITEM_PX = 180;

export function LogoMarquee({
  items,
  speedPxPerSec = 70,
  logoHeight = 26,
  className,
}: Props) {
  const repeats = Math.max(1, Math.ceil(MIN_ITEMS_PER_COPY / items.length));
  const expanded = Array.from({ length: repeats }, () => items).flat();
  const durationSec = Math.max(
    20,
    (expanded.length * AVG_ITEM_PX) / speedPxPerSec
  );

  return (
    <div
      className={cn(
        'marquee-root group relative overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        '[-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        className
      )}
    >
      <div
        className="marquee-track flex w-max shrink-0 items-center"
        style={{ ['--marquee-duration' as string]: `${durationSec}s` }}
      >
        {[0, 1].map(copy => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
          >
            {expanded.map((item, i) => (
              <LogoItem
                key={`${copy}-${i}-${item.name}`}
                item={item}
                logoHeight={logoHeight}
              />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function LogoItem({
  item,
  logoHeight,
}: {
  item: LogoMarqueeItem;
  logoHeight: number;
}) {
  const body = item.src ? (
    <img
      src={item.src}
      alt={item.name}
      draggable={false}
      style={{ height: `${logoHeight}px` }}
      className="block w-auto opacity-80 transition-opacity hover:opacity-100"
    />
  ) : (
    <span className="inline-flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{
          backgroundColor: item.dotColor ?? 'var(--color-accent)',
          boxShadow: `0 0 10px ${item.dotColor ?? 'var(--color-accent)'}`,
        }}
      />
      <span className="font-mono text-sm tracking-tight whitespace-nowrap text-[var(--color-fg-muted)] group-hover:text-[var(--color-fg)] transition-colors">
        {item.name}
      </span>
    </span>
  );

  if (item.href) {
    return (
      <li>
        <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.name}>
          {body}
        </a>
      </li>
    );
  }
  return <li aria-label={item.name}>{body}</li>;
}
