'use client'
import React, { useState, useEffect } from 'react'
import FAQAccordion from './FAQAccordion'
import { client } from '@/sanity/lib/client'

function FAQ() {
  const [faqSections, setFaqSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true)
        const query = '*[_type == "faqSection"] | order(order asc){ _id, sectionTitle, faqs[]{ question, answer } }'
        const data = await client.fetch(query)
        setFaqSections(data)
      } catch (err) {
        console.error('Error fetching FAQs:', err)
        setError('Failed to load FAQs. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchFAQs()
  }, [])

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 animate-pulse">
          <div className="lg:w-1/3 py-8">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-16">
        <p className="text-center text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-2">
      <h1 className="text-center text-4xl font-semibold font-enriqueta md:text-[42px] text-mainYellow my-16 uppercase">
        Frequently Asked Questions
      </h1>
      {faqSections.map((section, index) => (
        <div key={section._id || index} className={`${index > 0 ? 'mt-2' : ''}`}>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="lg:w-1/3 py-8">
              <h2 className="text-4xl md:text-[32px] text-mainBlue font-enriqueta font-semibold mb-4">
                {section.sectionTitle}
              </h2>
            </div>
            <div className="lg:w-2/3">
              <FAQAccordion faqs={section.faqs || []} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FAQ
