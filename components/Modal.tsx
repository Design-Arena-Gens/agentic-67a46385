'use client'

import { HTMLAttributes, forwardRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, isOpen, onClose, title, size = 'md', children, ...props }, ref) => {
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose()
        }
      }
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    if (!isOpen) return null

    const sizes = {
      sm: 'max-w-md',
      md: 'max-w-lg',
      lg: 'max-w-2xl',
      xl: 'max-w-4xl',
    }

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        <div
          ref={ref}
          className={cn(
            'relative w-full bg-white dark:bg-neutral-800 rounded-xl shadow-2xl transform transition-all',
            sizes[size],
            className
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {title && (
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
              <h3 id="modal-title" className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
          <div className="p-6">{children}</div>
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'

export { Modal }
