'use client'

import { Button } from './Button'
import { Check } from 'lucide-react'

const benefits = [
  'Component library with 50+ pre-built elements',
  'Responsive design that works on all devices',
  'Dark mode support out of the box',
  'Accessibility compliant (WCAG 2.1)',
  'Regular updates and new features',
  'Dedicated support team',
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium">
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
              Building the Future of Design Systems
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We believe that great design should be accessible to everyone. Our mission is to provide
              developers and designers with the tools they need to create beautiful, functional applications
              without compromising on quality or speed.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 dark:bg-success-900/30 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-success-600 dark:text-success-400" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg">
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
