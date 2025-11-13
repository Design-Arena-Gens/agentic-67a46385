'use client'

import { useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Card, CardBody } from './Card'
import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@example.com',
      link: 'mailto:hello@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card>
              <CardBody className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <Input
                    label="Subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 transition-all duration-200 min-h-[150px]"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index}>
                  <CardBody className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </CardBody>
                </Card>
              )
            })}

            <Card>
              <CardBody>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">Monday - Friday</span>
                    <span className="text-neutral-900 dark:text-neutral-50">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">Saturday</span>
                    <span className="text-neutral-900 dark:text-neutral-50">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-400">Sunday</span>
                    <span className="text-neutral-900 dark:text-neutral-50">Closed</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
