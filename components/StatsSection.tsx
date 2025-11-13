'use client'

const stats = [
  { value: '2M+', label: 'Downloads', sublabel: 'Across all packages' },
  { value: '150+', label: 'Countries', sublabel: 'Worldwide usage' },
  { value: '1000+', label: 'Companies', sublabel: 'Trust our platform' },
  { value: '24/7', label: 'Support', sublabel: 'Always available' },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-primary-600 dark:bg-primary-700">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Join thousands of developers and designers who are building amazing products with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-1">
                {stat.label}
              </div>
              <div className="text-primary-200">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
