import { Check, X, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonRow {
  [key: string]: string | boolean | undefined;
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  highlightColumn?: number;
  variant?: 'light' | 'dark';
}

function CellValue({
  value,
  isDark,
}: {
  value: string | boolean | undefined;
  isDark: boolean;
}) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check
        className={cn('h-5 w-5', isDark ? 'text-green-400' : 'text-green-600')}
        aria-label="Yes"
      />
    ) : (
      <X
        className={cn('h-5 w-5', isDark ? 'text-slate-600' : 'text-slate-300')}
        aria-label="No"
      />
    );
  }

  if (value === 'partial') {
    return (
      <Minus
        className={cn(
          'h-5 w-5',
          isDark ? 'text-yellow-400' : 'text-yellow-600',
        )}
        aria-label="Partial"
      />
    );
  }

  return <>{value}</>;
}

export function ComparisonTable({
  headers,
  rows,
  highlightColumn,
  variant = 'light',
}: ComparisonTableProps) {
  const isDark = variant === 'dark';

  return (
    <>
      {/* Desktop: standard table */}
      <div className="hidden md:block">
        <div className="-mx-6 overflow-x-auto px-6">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className={cn(
                      'border-b px-5 py-4 text-left text-xs font-semibold tracking-[0.2em] uppercase',
                      i === 0 && 'w-[30%]',
                      i === highlightColumn &&
                        !isDark &&
                        'bg-navy-950/[0.05] text-navy-950 font-bold',
                      i === highlightColumn &&
                        isDark &&
                        'bg-white/10 font-bold text-white',
                      i !== highlightColumn &&
                        isDark &&
                        'border-white/10 text-slate-400',
                      i !== highlightColumn &&
                        !isDark &&
                        'border-slate-200 text-slate-500',
                      i === highlightColumn && isDark && 'border-white/10',
                      i === highlightColumn && !isDark && 'border-slate-200',
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => {
                const keys = Object.keys(row);
                const labelKey = keys[0];
                const valueKeys = keys.slice(1);

                return (
                  <tr key={rowIndex}>
                    <td
                      className={cn(
                        'border-b px-5 py-4 font-medium',
                        isDark
                          ? 'border-white/10 text-white'
                          : 'text-navy-950 border-slate-200',
                      )}
                    >
                      {row[labelKey] as string}
                    </td>
                    {valueKeys.map((key, cellIndex) => {
                      const columnIndex = cellIndex + 1;
                      const isHighlighted = columnIndex === highlightColumn;

                      return (
                        <td
                          key={key}
                          className={cn(
                            'border-b px-5 py-4 text-sm',
                            isHighlighted && !isDark && 'bg-navy-950/[0.03]',
                            isHighlighted && isDark && 'bg-white/[0.03]',
                            isDark
                              ? 'border-white/10 text-slate-300'
                              : 'border-slate-200 text-slate-600',
                          )}
                        >
                          <CellValue value={row[key]} isDark={isDark} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile: card layout */}
      <div className="space-y-4 md:hidden">
        {rows.map((row, rowIndex) => {
          const keys = Object.keys(row);
          const labelKey = keys[0];
          const valueKeys = keys.slice(1);

          return (
            <div
              key={rowIndex}
              className={cn(
                'rounded-sm border',
                isDark ? 'border-white/10' : 'border-slate-200',
              )}
            >
              <div
                className={cn(
                  'border-b px-4 py-3 font-medium',
                  isDark
                    ? 'border-white/10 bg-white/5 text-white'
                    : 'text-navy-950 border-slate-200 bg-slate-50',
                )}
              >
                {row[labelKey] as string}
              </div>
              <div className="divide-y divide-slate-100">
                {valueKeys.map((key, cellIndex) => {
                  const columnIndex = cellIndex + 1;
                  const isHighlighted = columnIndex === highlightColumn;

                  return (
                    <div
                      key={key}
                      className={cn(
                        'flex items-center justify-between px-4 py-3',
                        isHighlighted && !isDark && 'bg-navy-950/[0.03]',
                        isHighlighted && isDark && 'bg-white/[0.03]',
                        isDark && 'divide-white/10',
                      )}
                    >
                      <span
                        className={cn(
                          'text-xs font-semibold tracking-[0.15em] uppercase',
                          isHighlighted && !isDark && 'text-navy-950',
                          isHighlighted && isDark && 'text-white',
                          !isHighlighted && isDark && 'text-slate-400',
                          !isHighlighted && !isDark && 'text-slate-500',
                        )}
                      >
                        {headers[columnIndex]}
                      </span>
                      <span
                        className={cn(
                          'text-sm',
                          isHighlighted &&
                            !isDark &&
                            'text-navy-950 font-medium',
                          isHighlighted && isDark && 'font-medium text-white',
                          !isHighlighted && isDark && 'text-slate-300',
                          !isHighlighted && !isDark && 'text-slate-600',
                        )}
                      >
                        <CellValue value={row[key]} isDark={isDark} />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
