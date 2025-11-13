'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type InputVariant = 'default' | 'error' | 'success'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant
  label?: string
  helperText?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', label, helperText, error, disabled, ...props }, ref) => {
    const baseStyles = 'w-full px-4 py-2 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-100 dark:disabled:bg-neutral-800'

    const variants = {
      default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100',
      error: 'border-error-500 focus:border-error-600 focus:ring-error-500',
      success: 'border-success-500 focus:border-success-600 focus:ring-success-500',
    }

    const currentVariant = error ? 'error' : variant

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(baseStyles, variants[currentVariant], className)}
          disabled={disabled}
          aria-invalid={currentVariant === 'error'}
          aria-describedby={error ? 'error-message' : helperText ? 'helper-text' : undefined}
          {...props}
        />
        {error && (
          <p id="error-message" className="mt-1.5 text-sm text-error-600 dark:text-error-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id="helper-text" className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
