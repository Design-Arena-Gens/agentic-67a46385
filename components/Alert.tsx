'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  onClose?: () => void
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, onClose, ...props }, ref) => {
    const icons = {
      info: Info,
      success: CheckCircle,
      warning: AlertTriangle,
      error: AlertCircle,
    }

    const variants = {
      info: 'bg-primary-50 border-primary-200 text-primary-900 dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100',
      success: 'bg-success-50 border-success-200 text-success-900 dark:bg-success-900/20 dark:border-success-800 dark:text-success-100',
      warning: 'bg-warning-50 border-warning-200 text-warning-900 dark:bg-warning-900/20 dark:border-warning-800 dark:text-warning-100',
      error: 'bg-error-50 border-error-200 text-error-900 dark:bg-error-900/20 dark:border-error-800 dark:text-error-100',
    }

    const iconColors = {
      info: 'text-primary-600 dark:text-primary-400',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      error: 'text-error-600 dark:text-error-400',
    }

    const Icon = icons[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'relative rounded-lg border-2 p-4 flex gap-3',
          variants[variant],
          className
        )}
        {...props}
      >
        <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', iconColors[variant])} />
        <div className="flex-1">
          {title && <h5 className="font-semibold mb-1">{title}</h5>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Close alert"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { Alert }
