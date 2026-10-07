import { cn } from '../../utils/cn';
import type { TableProps } from './Table.types';

export function Table<T extends Record<string, unknown>>({ columns, data, getRowKey = (_, index) => String(index), className, ...props }: TableProps<T>) {
  return <div className="overflow-x-auto rounded-pw border"><table className={cn('w-full text-sm', className)} {...props}><thead className="bg-muted/50"><tr>{columns.map((column) => <th key={column.key} scope="col" className="px-4 py-3 text-left font-medium">{column.header}</th>)}</tr></thead><tbody className="divide-y">{data.map((row, index) => <tr key={getRowKey(row, index)} className="hover:bg-muted/40">{columns.map((column) => <td key={column.key} className="px-4 py-3">{column.render ? column.render(row) : String(row[column.key] ?? '')}</td>)}</tr>)}</tbody></table></div>;
}
