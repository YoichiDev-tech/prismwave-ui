import { CopyButton } from './CopyButton';

export function CodeBlock({ code }: { code: string }) { return <div className="overflow-hidden rounded-pw-lg border bg-slate-950 text-slate-100"><div className="flex justify-end border-b border-white/10 p-2"><CopyButton value={code} label="Copy code" /></div><pre className="overflow-x-auto p-4 text-sm"><code>{code}</code></pre></div>; }
