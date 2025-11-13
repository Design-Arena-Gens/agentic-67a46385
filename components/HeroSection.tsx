'use client'

import { Button } from './Button'
import { Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
              ✨ New Feature Released
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
              Build Amazing Products Faster
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Transform your ideas into reality with our comprehensive design system.
              Create beautiful, accessible, and responsive applications with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">50K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Active Users</div>
              </div>
              <div className="h-12 w-px bg-neutral-300 dark:bg-neutral-700" />
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">4.9/5</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">User Rating</div>
              </div>
              <div className="h-12 w-px bg-neutral-300 dark:bg-neutral-700" />
              <div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">99.9%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0"
                title="Product Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <Play className="w-4 h-4" />
              <span>Watch our 2-minute introduction video</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-200/20 to-transparent dark:from-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary-200/20 to-transparent dark:from-secondary-900/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
