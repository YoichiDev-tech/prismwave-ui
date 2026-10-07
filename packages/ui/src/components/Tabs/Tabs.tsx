import { useState } from 'react';
import { cn } from '../../utils/cn';
import type { TabsProps } from './Tabs.types';

export function Tabs({ items, defaultValue, value, onValueChange }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.id ?? '');
  const active = value ?? internal;
  const select = (id: string) => {
    if (value === undefined) setInternal(id);
    onValueChange?.(id);
  };
  const current = items.find((item) => item.id === active);
  return (
    <div>
      <div role="tablist" aria-label="Tabs" className="flex gap-1 rounded-pw-lg bg-muted p-1">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            aria-controls={`panel-${item.id}`}
            disabled={item.disabled}
            onClick={() => select(item.id)}
            className={cn(
              'rounded-pw px-4 py-2.5 text-base transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
              active === item.id
                ? 'bg-canvas font-semibold text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {current && (
        <div id={`panel-${current.id}`} role="tabpanel" tabIndex={0} className="pt-4">
          {current.content}
        </div>
      )}
    </div>
  );
}
