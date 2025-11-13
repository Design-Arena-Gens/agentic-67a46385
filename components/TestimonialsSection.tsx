'use client'

import { Card, CardBody } from './Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer',
    company: 'TechCorp Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'This design system has completely transformed how our team works. The components are beautiful, accessible, and incredibly easy to use.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'The documentation is outstanding, and the component library saved us months of development time. Highly recommended for any serious project.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Engineering Manager',
    company: 'Global Solutions',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'We migrated our entire product to this design system and saw immediate improvements in consistency and development speed.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Loved by Developers & Designers
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            See what our community has to say about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardBody className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning-500 text-warning-500" />
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
