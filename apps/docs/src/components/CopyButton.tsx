import { useState } from 'react';
import { Button } from '@prismwave/ui';

export function CopyButton({ value, label = 'Copy' }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {copyError && (
        <span role="status" className="text-[11px] text-rose-300">
          We couldn’t copy this. We can select the code manually.
        </span>
      )}
      <Button
        size="sm"
        variant="outline"
        onClick={copy}
        className="h-8 border-white/15 bg-white/[0.06] text-slate-100 hover:bg-white/[0.12] hover:text-white focus-visible:ring-violet-300 focus-visible:ring-offset-0"
        aria-label={copied ? 'Code copied' : label}
      >
        {copied ? 'Copied' : label}
      </Button>
    </div>
  );
}
