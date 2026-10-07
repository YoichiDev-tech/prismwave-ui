import { useState } from 'react';
import { cn } from '../../utils/cn';
import type { AccordionProps } from './Accordion.types';

export function Accordion({ items, multiple = false }: AccordionProps) {
  const [open, setOpen] = useState<string[]>([]);
  const toggle = (id: string) =>
    setOpen((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : multiple
          ? [...current, id]
          : [id],
    );
  return (
    <div className="w-full divide-y rounded-pw border">
      {items.map((item) => {
        const isOpen = open.includes(item.id);
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-${item.id}`}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-6 p-4 text-left text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="min-w-0 flex-1">{item.title}</span>
                <span aria-hidden="true" className="ml-auto shrink-0 pl-3 text-lg leading-none">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={`accordion-${item.id}`}
              hidden={!isOpen}
              className={cn('px-4 pb-4 text-base text-muted-foreground')}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
