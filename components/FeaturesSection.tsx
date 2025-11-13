'use client'

import { Card, CardBody } from './Card'
import { Zap, Shield, Palette, Code, Users, BarChart } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your applications run at blazing speeds with minimal load times.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built with security best practices to protect your data and ensure compliance with industry standards.',
  },
  {
    icon: Palette,
    title: 'Customizable Design',
    description: 'Flexible theming system allows you to match your brand identity perfectly with ease.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Clean, well-documented APIs and comprehensive guides make integration seamless.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for team workflows, comments, and version control to work together efficiently.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Powerful insights and metrics to track performance and make data-driven decisions.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Powerful features designed to help you build better products faster and scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} hover className="h-full">
                <CardBody className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
