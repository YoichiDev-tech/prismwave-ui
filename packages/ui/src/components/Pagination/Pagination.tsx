import { cn } from '../../utils/cn';
import type { PaginationProps } from './Pagination.types';

export function Pagination({ page, pageCount, onPageChange, className, ...props }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
  return <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)} {...props}><button type="button" disabled={page <= 1} onClick={() => onPageChange(page - 1)} className="rounded px-3 py-2 text-sm disabled:opacity-40">Previous</button>{pages.map((item) => <button key={item} type="button" aria-current={item === page ? 'page' : undefined} onClick={() => onPageChange(item)} className={cn('rounded px-3 py-2 text-sm', item === page && 'bg-primary text-primary-foreground')}>{item}</button>)}<button type="button" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)} className="rounded px-3 py-2 text-sm disabled:opacity-40">Next</button></nav>;
}
