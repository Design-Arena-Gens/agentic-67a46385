'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TableProps extends HTMLAttributes<HTMLTableElement> {}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="w-full overflow-x-auto">
        <table
          ref={ref}
          className={cn(
            'w-full text-sm text-left border-collapse',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

Table.displayName = 'Table'

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={cn(
          'bg-neutral-50 dark:bg-neutral-800 border-b-2 border-neutral-200 dark:border-neutral-700',
          className
        )}
        {...props}
      />
    )
  }
)

TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={cn('divide-y divide-neutral-200 dark:divide-neutral-700', className)} {...props} />
  }
)

TableBody.displayName = 'TableBody'

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn(
          'hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors',
          className
        )}
        {...props}
      />
    )
  }
)

TableRow.displayName = 'TableRow'

const TableHead = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={cn(
          'px-6 py-3 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider',
          className
        )}
        {...props}
      />
    )
  }
)

TableHead.displayName = 'TableHead'

const TableCell = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={cn(
          'px-6 py-4 text-neutral-900 dark:text-neutral-100',
          className
        )}
        {...props}
      />
    )
  }
)

TableCell.displayName = 'TableCell'

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
