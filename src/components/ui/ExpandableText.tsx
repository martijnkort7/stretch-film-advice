'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ExpandableTextProps {
  text: string;
  className?: string;
}

export function ExpandableText({ text, className }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn('md:block', className)}>
      <p
        className={cn(
          'text-sm leading-relaxed text-slate-600',
          !expanded && 'line-clamp-3 md:line-clamp-none',
        )}
      >
        {text}
      </p>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-1 text-sm font-medium text-blue-600 md:hidden"
        >
          Read more
        </button>
      )}
    </div>
  );
}
